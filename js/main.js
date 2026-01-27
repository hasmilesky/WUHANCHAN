document.addEventListener('DOMContentLoaded', () => {
  // --- A. Hamburger Menu ---
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('is-active');
    });
  }

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
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          navLinks.forEach((link) => link.classList.remove('active'));
          const id = entry.target.getAttribute('id');
          const activeLink = document.querySelector(`.nav_link[href="#${id}"]`);
          if (activeLink) activeLink.classList.add('active');
        }
      });
    },
    {
      rootMargin: '-20% 0px -70% 0px',
    },
  );

  sections.forEach((section) => navObserver.observe(section));

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
