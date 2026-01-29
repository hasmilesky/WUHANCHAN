document.addEventListener('DOMContentLoaded', () => {
  // --- B. 區塊顯現動畫 (Reveal) ---
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

  document
    .querySelectorAll('.reveal')
    .forEach((el) => revealObserver.observe(el));

  // --- C. Navbar 連結變色 (ScrollSpy) ---
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav_link');

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // 只要區塊進入視窗比例超過 20% (或視情況調整)
        if (entry.isIntersecting) {
          // 先移除所有人的 active
          navLinks.forEach((link) => link.classList.remove('active'));

          // 取得當前區塊 id
          const id = entry.target.getAttribute('id');
          // 尋找對應的 href
          const activeLink = document.querySelector(`.nav_link[href="#${id}"]`);

          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    },

    {
      // 讓偵測範圍更寬一些，例如上方留 30%，下方留 30%
      rootMargin: '-40% 0px -40% 0px',
      threshold: [0, 0.1], // 只要稍微進去或出來就觸發偵測
    },
  );

  sections.forEach((section) => navObserver.observe(section));

  window.addEventListener('scroll', () => {
    // 判斷是否滑到底部
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 10
    ) {
      navLinks.forEach((link) => link.classList.remove('active'));
      navLinks[navLinks.length - 1].classList.add('active');
    }
  });

  // --- D. Portfolio 濾鏡功能 ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  if (filterBtns.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        // 1. 按鈕樣式切換
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        // 2. 執行「集體消失」動畫
        portfolioItems.forEach((item) => {
          item.classList.add('animating');
        });

        // 3. 等消失動畫跑到一半（約 300ms），再切換顯示狀態
        setTimeout(() => {
          portfolioItems.forEach((item) => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
              item.classList.remove('hide');
              // 讓它稍微延遲一點點再彈出來，會有順序感
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

  // --- E. 初始化 Fancybox 燈箱 (放在 DOMContentLoaded 內確保 HTML 已載入) ---
  Fancybox.bind('[data-fancybox]', {
    Carousel: {
      transition: 'fade',
    },
    // 強化點擊背景關閉的功能
    Click: {
      backdrop: 'close', // 點擊黑色背景關閉
    },
    Toolbar: {
      display: {
        left: [], // 不顯示左側工具列
        middle: [],
        right: ['iterateZoom', 'close'], // 這裡只保留「縮放」與「關閉」
      },
    },
  });
});

// navbar 漢堡
// 確保 DOM 載入後執行
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('#mobile-menu');
  const navList = document.querySelector('#nav-list');

  if (menu && navList) {
    menu.addEventListener('click', function () {
      // 1. 讓按鈕變叉叉
      this.classList.toggle('active');
      // 2. 讓選單掉下來
      navList.classList.toggle('active');
    });

    // 點擊連結後自動關閉選單
    document.querySelectorAll('.nav_link').forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
        navList.classList.remove('active');
      });
    });
  }
});
