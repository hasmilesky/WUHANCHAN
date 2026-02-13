/**
 * Helen Design - main.js 完整整合版
 */

// --- 0. Swiper 初始化函式 (獨立定義) ---
const initBrandSwiper = () => {
  const brandSwiper = new Swiper('.brand-swiper', {
    spaceBetween: 30,
    slidesPerView: 2,
    loop: true,
    allowTouchMove: false, // 避免使用者拖動破壞節奏 (選用)

    // 設定為線性勻速滾動
    speed: 2000, // 數值越大，滾動越慢 (5秒移動一個循環)
    autoplay: {
      delay: 0, // 延遲為 0，代表不間斷
      disableOnInteraction: false,
    },

    breakpoints: {
      640: { slidesPerView: 3 },
      1024: { slidesPerView: 5 },
    },
  });
};

document.addEventListener('DOMContentLoaded', () => {
  // --- A. 區塊顯現動畫 (Reveal) ---
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll('.reveal').forEach((el) => {
    revealObserver.observe(el);
  });

  // --- B. Navbar 連結變色 (ScrollSpy) ---
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav_link');

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove('active'));
          const id = entry.target.getAttribute('id');
          const activeLink = document.querySelector(`.nav_link[href="#${id}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    },
    {
      rootMargin: '-40% 0px -40% 0px',
      threshold: [0, 0.1],
    },
  );

  sections.forEach((section) => navObserver.observe(section));

  // 額外處理捲動到底部時，強制讓最後一個連結變色
  window.addEventListener('scroll', () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 10
    ) {
      navLinks.forEach((link) => link.classList.remove('active'));
      if (navLinks.length > 0) {
        navLinks[navLinks.length - 1].classList.add('active');
      }
    }
  });

  // --- C. Portfolio 濾鏡功能 ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  if (filterBtns.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        // 切換按鈕 active 樣式
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        // 執行消失動畫
        portfolioItems.forEach((item) => {
          item.classList.add('animating');
        });

        // 動畫中途切換顯示狀態
        setTimeout(() => {
          portfolioItems.forEach((item) => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
              item.classList.remove('hide');
              setTimeout(() => {
                item.classList.remove('animating');
              }, 30);
            } else {
              item.classList.add('hide');
            }
          });
        }, 150);
      });
    });
  }

  // --- D. 漢堡選單控制 (Mobile Menu) ---
  const menu = document.querySelector('#mobile-menu');
  const navList = document.querySelector('#nav-list');

  if (menu && navList) {
    menu.addEventListener('click', function () {
      const isActive = this.classList.toggle('active');
      navList.classList.toggle('active');

      // 選單打開時防止背景捲動
      document.body.style.overflow = isActive ? 'hidden' : 'auto';
    });

    // 點擊連結後自動關閉選單並恢復捲動
    document.querySelectorAll('.nav_link').forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
        navList.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    });
  }

  // --- E. 初始化 Fancybox 燈箱 ---
  if (typeof Fancybox !== 'undefined') {
    Fancybox.bind('[data-fancybox]', {
      Carousel: { transition: 'fade' },
      Click: { backdrop: 'close' },
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ['iterateZoom', 'close'],
        },
      },
    });
  }

  // --- F. 執行 Swiper 初始化 ---
  initBrandSwiper();
});
