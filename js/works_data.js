// 1. 作品集資料庫
const categoryConfig = {
  website: { label: 'WEBSITE', class: 'tag_A' },
  BANNER: { label: 'BANNER', class: 'tag_B' },
};
const rawData = {
  website: {
    tagClass: 'tag_A',
    tagName: 'WEBSITE',
    items: [
      //肌膚之鑰 24K黃金精華
      {
        title: '肌膚之鑰 24K黃金精華',
        img: 'img/work/WEB/mb_1_KV_2.webp',
        moreImgs: [
          'img/work/WEB/mb_1.webp',
          'img/work/WEB/mb_1_pa.webp',
          'img/work/WEB/mb_1_KV.webp',
        ],
        desc: '肌膚之鑰的新品，24K黃金精華。<br><br>肌膚之鑰在台灣屬於高階品牌，主視覺風格偏向奢華、精緻，因此在設計上需要將國外的主視覺轉化為符合台灣市場的風格，讓消費者能夠接收到產品主打的特色。',
        contribution:
          '接收到國外主視覺後，將其轉化為台灣風格，並且延伸製作出網站、素材',
        link: 'https://www.cledepeau-beaute.com.tw/24K黃金精華-A16202_tw.html',
      },
      //肌膚之鑰 激光瓶
      {
        title: '肌膚之鑰 激光瓶',
        img: 'img/work/WEB/2_KV.webp',
        moreImgs: [
          'img/work/WEB/2_PC.webp',
          'img/work/WEB/2_MB.webp',
          'img/work/WEB/2_pa_1.webp',
          'img/work/WEB/2_pa_2.webp',
        ],
        desc: '肌膚之鑰的新品，24K黃金精華。<br><br>肌膚之鑰在台灣屬於高階品牌，主視覺風格偏向奢華、精緻，因此在設計上需要將國外的主視覺轉化為符合台灣市場的風格，讓消費者能夠接收到產品主打的特色。',
        contribution:
          '接收到國外主視覺後，將其轉化為台灣風格，並且延伸製作出網站、素材',
        link: 'https://www.cledepeau-beaute.com.tw/精萃光采激光晶露%23激光瓶-A15306_tw.html',
      },
      //碧兒泉 怪獸遊戲
      {
        title: '碧兒泉 怪獸遊戲',
        img: 'img/work/WEB/biotherm_game/biotherm_1200x1200.webp',
        moreImgs: [
          'img/work/WEB/biotherm_game/index-kv.webp',
          'img/work/WEB/biotherm_game/index-1-1.webp',
          'img/work/WEB/biotherm_game/index-1-2.webp',
          'img/work/WEB/biotherm_game/index-2-負.webp',
          'img/work/WEB/biotherm_game/index-3-1.webp',
          'img/work/WEB/biotherm_game/index-3-2.webp',
          'img/work/WEB/biotherm_game/index-4.webp',
        ],
        desc: '第二次製作的網頁性質遊戲。<br><br>這次的遊戲是以碧兒泉的產品為主題，設計了一個怪獸遊戲，玩家需要透過操作角色來擊敗怪獸，並且在遊戲中了解產品的特點和功效。',
        contribution: '視覺呈現、UX合理化。',
        link: 'https://www.biotherm.com.tw/bio-campaign/special-event-8',
      },
      //車主指南
      {
        title: '和泰 車主指南網站手冊',
        img: 'img/work/WEB/toyota/1x1_KV.webp',
        moreImgs: [
          'img/work/WEB/toyota/01/1_01.webp',
          'img/work/WEB/toyota/01/1-1_01.webp',
          'img/work/WEB/toyota/02/2_02.webp',
          'img/work/WEB/toyota/02/2-2_02.webp',
          'img/work/WEB/toyota/04/4-1_04.webp',
          'img/work/WEB/toyota/04/4-3_04.webp',
        ],
        desc: '屬於和泰車主專用的，新手汽車駕駛的使用指南。<br><br>這個網站的目的是為了幫助新手駕駛更好地了解汽車的使用方法和注意事項，從而提高他們的駕駛安全性和舒適度。<br><br>網站內容涵蓋了汽車的基本操作、維護保養、安全駕駛等方面，並且提供了豐富的圖文說明和互動功能，讓使用者能夠更輕鬆地學習和掌握相關知識。',
        contribution: 'Wireframe、視覺設計、UX合理化。',
        link: 'https://www.toyota.com.tw/Guidebook/',
      },
      //南山人壽 旅平險投保流程優化
      {
        title: '南山人壽 旅平險投保流程優化',
        img: 'img/work/WEB/NanSan/封面.webp',
        moreImgs: [
          'img/work/WEB/NanSan/正向流程 PC_2023/step1_投保方案.webp',
          'img/work/WEB/NanSan/負向流程 PC_2023/step1_投保方案.webp',
        ],
        desc: '南山人壽的官網屬於較老的設計，因為老舊的網站頁面及不夠直覺的UI介面導致使用體驗不佳，一直是他們家投保率低下的原因之一。<br><br>這次有幸參與了這個專案，主要負責優化旅平險的投保流程，從使用者的角度出發，重新設計了投保流程的UI介面，讓使用者能夠更輕鬆地完成投保流程，再以成本有限情況下，提高了投保率和使用者滿意度。',
        contribution: '視覺設計、UX合理化',
        link: 'https://www.nanshanlife.com.tw/CESIDP/html/SSOIDP/loading.html',
      },
    ],
  },
  landing_page: {
    tagClass: 'tag_E',
    tagName: 'LANDING PAGE',
    items: [
      {
        title: '妮維雅 美白潤膚乳液',
        img: 'img/work/landing_page/05/00.webp',
        moreImgs: [
          'img/work/landing_page/05/nivea_01.webp',
          'img/work/landing_page/05/nivea_02.webp',
          'img/work/landing_page/05/nivea_03.webp',
          'img/work/landing_page/05/nivea_04.webp',
          'img/work/landing_page/05/nivea_05.webp',
          'img/work/landing_page/05/nivea_06.webp',
        ],
      },
      {
        title: '妮維雅 男士體香爽身噴霧',
        img: 'img/work/landing_page/02/00.webp',
        moreImgs: [
          // 'img/work/landing_page/02/1000xh_PDP.webp',
          'img/work/landing_page/02/1000xh_PDP_P1.webp',
          'img/work/landing_page/02/1000xh_PDP_P2.webp',
          'img/work/landing_page/02/1000xh_PDP_P3.webp',
          'img/work/landing_page/02/1000xh_PDP_P4.webp',
          'img/work/landing_page/02/1000xh_PDP_P5.webp',
          'img/work/landing_page/02/1000xh_PDP_P6.webp',
          'img/work/landing_page/02/1000xh_PDP_P7.webp',
        ],
      },
      {
        title: '妮維雅 超能科技止汗',
        img: 'img/work/landing_page/03/00.webp',
        moreImgs: [
          // 'img/work/landing_page/03/1000xh_PDP.webp',
          'img/work/landing_page/03/woman_01.webp',
          'img/work/landing_page/03/woman_02.webp',
          'img/work/landing_page/03/woman_03.webp',
          'img/work/landing_page/03/woman_04.webp',
          'img/work/landing_page/03/woman_05.webp',
          'img/work/landing_page/03/woman_06.webp',
          'img/work/landing_page/03/woman_07.webp',
          'img/work/landing_page/03/woman_08.webp',
        ],
      },
      {
        title: '妮維雅 專業級身體防曬',
        img: 'img/work/landing_page/01/00.webp',
        moreImgs: [
          // 'img/work/landing_page/01/PDP-1000x7000.webp',
          'img/work/landing_page/01/01.webp',
          'img/work/landing_page/01/02.webp',
          'img/work/landing_page/01/03.webp',
          'img/work/landing_page/01/04.webp',
          'img/work/landing_page/01/05.webp',
          'img/work/landing_page/01/06.webp',
          'img/work/landing_page/01/07.webp',
        ],
      },
      {
        title: '舒適牌 我的思享沙龍',
        img: 'img/work/landing_page/04/00.webp',
        moreImgs: [
          // 'img/work/landing_page/04/1000x7000.webp',
          'img/work/landing_page/04/schick_01.webp',
          'img/work/landing_page/04/schick_02.webp',
          'img/work/landing_page/04/schick_03.webp',
          'img/work/landing_page/04/schick_04.webp',
          'img/work/landing_page/04/schick_05.webp',
          'img/work/landing_page/04/schick_06.webp',
          'img/work/landing_page/04/schick_07.webp',
        ],
      },
    ],
  },
  BANNER: {
    tagClass: 'tag_B',
    tagName: 'BANNER',
    items: [
      {
        title: 'NIVEA L630',
        img: 'img/work/BANNER/02/妮維雅_KV優化圖.webp',
        contribution: '視覺排版',
      },
      {
        title: 'ELEMIS 玫瑰霜',
        img: 'img/work/BANNER/ELEMIS_1080x1080.webp',
        moreImgs: [
          'img/work/BANNER/elemis.webp',
          'img/work/BANNER/elemis_2.webp',
        ],
        contribution: '視覺設計',
      },

      {
        title: 'TOYOTA Supra',
        img: 'img/work/BANNER/TOYOTA_1080x1080.webp',
        contribution: '視覺設計',
      },
      // {
      //   title: '肌膚之鑰 黃金眼霜',
      //   img: 'img/work/BANNER/cpb_1080x1080.webp',
      //   desc: '肌膚之鑰高端保養品廣告。',
      //   contribution: '精緻修圖',
      // },
      {
        title: '肌膚之鑰 4D精華',
        img: 'img/work/BANNER/cpb_1040x1040.webp',
        contribution: '排版設計',
      },
      {
        title: 'LeapUp LINE',
        img: 'img/work/BANNER/廣告_1200x1200.webp',

        desc: 'LINE 廣告版位設計。',
        contribution: '廣告排版',
      },

      {
        title: 'TOYOTA 中秋賀卡',
        img: 'img/work/BANNER/toyota_moon.webp',
        contribution: '插畫排版',
      },
      {
        title: 'TOYOTA TOWNACE',
        img: 'img/work/BANNER/townace/1.webp',
        moreImgs: [
          'img/work/BANNER/townace/2.webp',
          'img/work/BANNER/townace/3.webp',
          'img/work/BANNER/townace/4.webp',
          'img/work/BANNER/townace/5.webp',
          'img/work/BANNER/townace/6.webp',
        ],
        desc: '商用車推廣廣告。',
        contribution: '排版設計',
      },
      {
        title: '雀巢 KOL合作款',
        img: 'img/work/BANNER/雀巢資料夾/1.webp',
        moreImgs: [
          'img/work/BANNER/雀巢資料夾/2.webp',
          'img/work/BANNER/雀巢資料夾/3.webp',
        ],
        desc: 'KOL 聯名產品圖設計。',
        contribution: '視覺合成',
      },
    ],
  },
  PRINT: {
    tagClass: 'tag_C',
    tagName: 'PRINT',
    items: [
      //skinceuticals 三折 DM
      {
        title: 'skinceuticals 三折 DM',
        img: 'img/work/PRINT/SKC_三折DM.webp',
        contribution: '印刷排版',
      },
      //妮維雅 防曬外包裝
      {
        title: '妮維雅 防曬外包裝',
        img: 'img/work/PRINT/妮維雅_防曬外包裝.webp',
        moreImgs: [
          'img/work/PRINT/妮維雅_防曬外包裝-3.webp',
          'img/work/PRINT/妮維雅_防曬外包裝-4.webp',
          'img/work/PRINT/妮維雅_防曬外包裝-2.webp',
        ],
        desc: '妮維雅包裝更新設計。',
        contribution: '印刷排版',
      },
      //南山人壽 年曆
      {
        title: '南山人壽 限量年曆',
        img: 'img/work/PRINT/NanSan/日曆.webp',
        moreImgs: [
          'img/work/PRINT/NanSan/1_封面.webp',
          'img/work/PRINT/NanSan/2_年金險.webp',
          'img/work/PRINT/NanSan/3_旅平險+傷害險.webp',
          'img/work/PRINT/NanSan/4_啾是要友你.webp',
          'img/work/PRINT/NanSan/5_旅平險.webp',
          'img/work/PRINT/NanSan/6_長照險.webp',
          'img/work/PRINT/NanSan/7_定期壽險推廣.webp',
          'img/work/PRINT/NanSan/8_重大疾病+住院.webp',
          'img/work/PRINT/NanSan/8_傷害險.webp',
          'img/work/PRINT/NanSan/10_旅平險VS不便險.webp',
          'img/work/PRINT/NanSan/11_生日快樂.webp',
          'img/work/PRINT/NanSan/13_休假中.webp',
          'img/work/PRINT/NanSan/14_開會中.webp',
        ],

        desc: '製作的非常快樂的一個案子。<br><br>這波年曆主打南山人壽的各種保險產品，並且以可愛的插畫風格呈現。<br><br>在設計上，我們需要將每個月的主題和產品特色結合起來，創造出有趣又實用的年曆內容，讓使用者在使用年曆的同時，也能夠對南山人壽的產品有更深入的了解。',
        contribution: '插圖繪製、圖文設計',
      },
    ],
  },
  ART: {
    tagClass: 'tag_D',
    tagName: 'ART',
    items: [
      {
        title: '明信片',
        img: 'img/work/ART/明信片.webp',
        moreImgs: ['img/work/ART/明信片_ai.mp4'],
        contribution: '手繪插畫',
      },
      {
        title: '偶像禮物',
        img: 'img/work/ART/偶像禮物盒.webp',
        contribution: '手繪插畫',
      },
      {
        title: '遊戲角色',
        img: 'img/work/ART/遊戲角色.webp',
        desc: '2D 遊戲角色設定。',
        contribution: '遊戲角色二創',
      },
    ],
  },
};

let globalId = 1;
const worksData = [];

for (const [key, config] of Object.entries(rawData)) {
  config.items.forEach((item) => {
    worksData.push({
      id: globalId++, // 自動產生 1, 2, 3...
      category: key,
      tagClass: config.tagClass,
      tagName: config.tagName,
      ...item,
    });
  });
}
