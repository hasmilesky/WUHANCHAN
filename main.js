/**
 * Helen Design - 最終整合版 (純手寫燈箱 + Swiper)
 * 解決問題：
 * 1. 徹底移除 Fancybox，改用手寫 Modal 避免與 Swiper 打架。
 * 2. 修正 Swiper 初始化時機，解決圖片堆疊問題。
 * 3. 點點（Pagination）樣式與切換功能修正。
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. 執行渲染 (確保 HTML 結構正確生成)
  if (typeof rawData !== 'undefined') {
    renderWorks(rawData);
  } else {
    console.error('找不到作品資料 (rawData)，請檢查 works_data.js。');
  }

  // 2. 初始化功能
  initPortfolioFilter();
  initBrandSwiper(); // 初始化品牌輪播
  initMobileMenu();
  initScrollReveal();
});

/**
 * [全域函式] 打開燈箱
 * 放在 window 下確保 HTML onclick 絕對抓得到
 */
window.openWorkModal = function (id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  // A. 顯示燈箱遮罩
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // 防止背景捲動

  // B. 延遲啟動 Swiper (確保容器寬度計算正確)
  setTimeout(() => {
    const swiperEl = modal.querySelector('.swiper');
    const paginationEl = modal.querySelector('.orange-pagination');

    if (swiperEl && !swiperEl.swiper) {
      // --- 業界標準：先算數量，再給設定 ---
      const slides = swiperEl.querySelectorAll('.swiper-slide');
      const isMulti = slides.length > 1;

      new Swiper(swiperEl, {
        loop: isMulti, // 只有多張圖才循環
        mousewheel: isMulti ? { forceToAxis: true } : false, // 只有多張圖才啟動滾輪
        grabCursor: isMulti, // 只有多張圖滑鼠才會變「小手抓取」狀
        autoHeight: false,
        centeredSlides: true,
        pagination: {
          el: paginationEl,
          clickable: isMulti, // 只有多張圖點點才能點
          bulletClass: 'pill',
          bulletActiveClass: 'active',
        },
      });
    } else if (swiperEl && swiperEl.swiper) {
      // 業界經驗：重新打開時，除了 update，一定要回到第一張 (slideTo)
      swiperEl.swiper.update();
      swiperEl.swiper.slideTo(0, 0);
    }
  }, 150); // 稍微增加到 150ms，確保 CSS 動畫跑完，抓取寬度更精準
};

/**
 * [全域函式] 關閉燈箱
 */
window.closeWorkModal = function (id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // 恢復捲動
  }
};

/**
 * 渲染作品集
 */
function renderWorks(data) {
  const portfolioContainer = document.getElementById('portfolio-container');
  if (!portfolioContainer) return;

  let cardsHtml = '';
  let popupsHtml = '';

  Object.keys(data).forEach((catKey) => {
    const category = data[catKey];
    category.items.forEach((work, index) => {
      const uniqueId = `modal_${catKey}_${index}`;
      const allImages = [work.img, ...(work.moreImgs || [])];

      // 組合輪播圖片
      const swiperSlides = allImages
        .map(
          (imgUrl) => `
          <div class="swiper-slide">
            <img src="${imgUrl}" alt="${work.title}">
          </div>
        `,
        )
        .join('');

      // A. 作品卡片 HTML (對應你的 a.card-anchor CSS)
      cardsHtml += `
        <div class="portfolio-item ${catKey}">
          <a href="javascript:void(0)" class="card-anchor" onclick="openWorkModal('${uniqueId}')">
            <div class="work_card">
              <img src="${work.img}" alt="${work.title}" />
              <div class="work_info">
                <span class="${category.tagClass}">● ${category.tagName}</span>
                <h3>${work.title}</h3>
              </div>
            </div>
          </a>
        </div>
      `;

      // B. 燈箱內容 HTML (對應你提供的最新 SCSS 結構)
      popupsHtml += `
        <div id="${uniqueId}" class="custom-modal-overlay" onclick="if(event.target === this) closeWorkModal('${uniqueId}')" style="display: none;">
          <div class="my-custom-lightbox">
            <button class="close-btn" onclick="closeWorkModal('${uniqueId}')">✕</button>
            <div class="lightbox-main">
              <div class="side-left">
                <div class="swiper">
                  <div class="swiper-wrapper">${swiperSlides}</div>
                  <div class="orange-pagination"></div>
                </div>
              </div>
              <div class="side-right">
                <h2 class="title">${work.title}</h2>
                <p class="cate">${category.tagName}</p>
                <hr>
                <div class="desc"><p>${work.desc || ''}</p></div>
                <div class="contribution-box">
                  <small>Project Contribution</small>
                  <p>${work.contribution || ''}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  });

  // 渲染卡片到網格
  portfolioContainer.innerHTML = cardsHtml;
  // 把燈箱 HTML 直接插進 body
  document.body.insertAdjacentHTML('beforeend', popupsHtml);
}

/**
 * 品牌牆 Swiper
 */
function initBrandSwiper() {
  const brandContainer = document.querySelector('.brand-swiper');
  if (brandContainer && typeof Swiper !== 'undefined') {
    new Swiper('.brand-swiper', {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      autoplay: { delay: 2000, disableOnInteraction: false },
      breakpoints: {
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      },
    });
  }
}

/**
 * 作品集 濾鏡功能
 */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filterValue = btn.getAttribute('data-filter');
      const items = document.querySelectorAll('.portfolio-item');

      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      items.forEach((item) => {
        item.style.display =
          filterValue === 'all' || item.classList.contains(filterValue)
            ? 'block'
            : 'none';
      });
    });
  });
}

/**
 * 選單與動畫 (其餘維持不變)
 */
function initMobileMenu() {
  const menu = document.querySelector('#mobile-menu');
  const navList = document.querySelector('#nav-list');
  if (menu && navList) {
    menu.onclick = () => {
      menu.classList.toggle('active');
      navList.classList.toggle('active');
    };
  }
}

function initScrollReveal() {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('revealed');
      });
    },
    { threshold: 0.1 },
  );
  document
    .querySelectorAll('.reveal')
    .forEach((el) => revealObserver.observe(el));
}
