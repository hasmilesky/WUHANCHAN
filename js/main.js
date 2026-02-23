/**
 * Helen Design - 完整整合版 main.js
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. 優先執行：渲染作品集 ---
  // 確保 works_data.js 已在 index.html 中先引用
  if (typeof worksData !== 'undefined') {
    renderWorks();
  } else {
    console.error('找不到 worksData，請檢查 works_data.js 是否正確引用。');
  }

  // --- 2. 初始化作品濾鏡 (Portfolio Filter) ---
  initPortfolioFilter();

  // --- 3. 初始化外部套件 (Fancybox, Swiper) ---
  initThirdPartyPlugins();

  // --- 4. 漢堡選單與導覽列 (Mobile Menu) ---
  initMobileMenu();

  // --- 5. 區塊顯現動畫 (Scroll Reveal) ---
  initScrollReveal();
});

/**
 * [渲染函式] 根據 worksData 產生 HTML
 */
function renderWorks() {
  const container = document.getElementById('portfolio-container');
  if (!container) return;

  // 技巧：如果資料裡 ID 是空的，就根據索引自動補上
  const finalData = worksData.map((work, index) => ({
    ...work,
    id: work.id || index + 1, // 如果沒寫 ID，就自動用索引 + 1
  }));

  let htmlContent = '';
  worksData.forEach((work) => {
    htmlContent += `
      <div class="portfolio-item ${work.category}">
        <a href="#work_detail_${work.id}" data-fancybox="work-details" class="card-anchor">
          <div class="work_card">
            <img src="${work.img}" alt="${work.title}" />
            <div class="work_info">
              <span class="${work.tagClass}">● ${work.tagName}</span>
              <h3>${work.title}</h3>
            </div>
          </div>
        </a>
      </div>

      <div id="work_detail_${work.id}" class="work-popup" style="display: none;">
        <h2 class="popup-title">${work.title}</h2>
        <div class="popup-content">
          <div class="popup-img-side">
            <img src="${work.img}" alt="${work.title}" />
          </div>
          <div class="popup-text-side">
            <h4>Project Overview</h4>
            <p>${work.desc}</p>
            <h4>My Role</h4>
            <p>${work.contribution}</p>
          </div>
        </div>
      </div>
    `;
  });
  container.innerHTML = htmlContent;
}

/**
 * [濾鏡函式] 控制作品分類顯示
 */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filterValue = btn.getAttribute('data-filter');
      const items = document.querySelectorAll('.portfolio-item');

      // 切換按鈕 active 狀態
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      items.forEach((item) => {
        item.classList.add('animating');
        setTimeout(() => {
          if (filterValue === 'all' || item.classList.contains(filterValue)) {
            item.classList.remove('hide');
            setTimeout(() => item.classList.remove('animating'), 30);
          } else {
            item.classList.add('hide');
          }
        }, 150);
      });
    });
  });
}

/**
 * [套件函式] 初始化 Fancybox 與 Swiper
 */
function initThirdPartyPlugins() {
  // Fancybox 綁定
  if (typeof Fancybox !== 'undefined') {
    Fancybox.bind('[data-fancybox="work-details"]', {
      autoFocus: false,
      dragToClose: false,
      // 避免手機版工具列遮擋
      Toolbar: { display: { left: [], middle: [], right: ['close'] } },
    });
  }

  // Swiper 品牌輪播
  if (
    typeof Swiper !== 'undefined' &&
    document.querySelector('.brand-swiper')
  ) {
    new Swiper('.brand-swiper', {
      spaceBetween: 30,
      slidesPerView: 2,
      loop: true,
      speed: 3000,
      autoplay: { delay: 0, disableOnInteraction: false },
      breakpoints: { 640: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } },
    });
  }
}

/**
 * [選單函式] 漢堡選單開關
 */
function initMobileMenu() {
  const menu = document.querySelector('#mobile-menu');
  const navList = document.querySelector('#nav-list');
  if (menu && navList) {
    menu.addEventListener('click', () => {
      menu.classList.toggle('active');
      navList.classList.toggle('active');
    });
    // 點擊連結後自動收合
    document.querySelectorAll('.nav_link').forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
        navList.classList.remove('active');
      });
    });
  }
}

/**
 * [動畫函式] 捲動顯現效果
 */
function initScrollReveal() {
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
}
