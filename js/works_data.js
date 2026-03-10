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
        desc: '',
        contribution: '負責從 Wireframe 繪製、視覺設計。',
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
        desc: '這是為了 XX 品牌製作的 RWD 活動頁面，主要目標是提升產品轉單率。',
        contribution: '負責從 Wireframe 繪製、視覺設計到前端切版實作。',
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
        desc: '碧兒泉活動 Banner。',
        contribution: '排版設計',
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
        desc: '碧兒泉活動 Banner。',
        contribution: '排版設計',
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
        desc: '南山人壽 旅平險投保流程優化。',
        contribution: '排版設計',
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
        desc: '妮維雅 美白潤膚乳液 LANDING PAGE 設計。',
        contribution: 'Landing Page 設計',
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
        desc: '妮維雅 男士體香爽身噴霧 LANDING PAGE 設計。',
        contribution: 'Landing Page 設計',
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
        desc: '妮維雅 超能科技止汗 LANDING PAGE 設計。',
        contribution: 'Landing Page 設計',
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
        desc: '妮維雅 專業級身體防曬 LANDING PAGE 設計。',
        contribution: 'Landing Page 設計',
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
        desc: '舒適牌 我的思享沙龍 LANDING PAGE 設計。',
        contribution: 'Landing Page 設計',
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
        moreImgs: [],
        desc: '妮維雅產品廣告 Banner 設計。',
        contribution: '視覺合成',
      },
      {
        title: 'ELEMIS 玫瑰霜',
        img: 'img/work/BANNER/ELEMIS_1080x1080.webp',
        moreImgs: [
          'img/work/BANNER/elemis.webp',
          'img/work/BANNER/elemis_2.webp',
        ],
        desc: 'ELEMIS 產品廣告設計。',
        contribution: '視覺合成',
      },

      {
        title: 'TOYOTA Supra',
        img: 'img/work/BANNER/TOYOTA_1080x1080.webp',
        moreImgs: [
          'img/work/WEB/1.webp',
          'img/work/BANNER/和泰11SP_jolin_web.webp',
        ],
        desc: 'TOYOTA 跑車系列社群圖。',
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
        moreImgs: [
          'img/work/WEB/1.webp',
          'img/work/BANNER/和泰11SP_jolin_web.webp',
        ],
        desc: '產品推廣 Banner。',
        contribution: '排版設計',
      },
      {
        title: 'LeapUp LINE',
        img: 'img/work/BANNER/廣告_1200x1200.webp',
        moreImgs: [
          'img/work/WEB/1.webp',
          'img/work/BANNER/和泰11SP_jolin_web.webp',
        ],
        desc: 'LINE 廣告版位設計。',
        contribution: '廣告排版',
      },

      {
        title: 'TOYOTA 中秋賀卡',
        img: 'img/work/BANNER/toyota_moon.webp',
        moreImgs: [
          'img/work/WEB/1.webp',
          'img/work/BANNER/和泰11SP_jolin_web.webp',
        ],
        desc: '節慶賀卡插畫排版。',
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
        moreImgs: [
          'img/work/WEB/1.webp',
          'img/work/BANNER/和泰11SP_jolin_web.webp',
        ],
        desc: '專案詳細說明文字',
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

        desc: '專案詳細說明文字',
        contribution: '印刷排版',
      },
      //南山人壽 年曆
      {
        title: '南山人壽 年曆',
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

        desc: '專案詳細說明文字',
        contribution: '印刷排版',
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
        desc: '個人創作明信片。',
        contribution: '手繪插畫',
      },
      {
        title: '偶像禮物盒',
        img: 'img/work/ART/偶像禮物盒.webp',
        moreImgs: [
          'img/work/WEB/1.webp',
          'img/work/BANNER/和泰11SP_jolin_web.webp',
        ],
        desc: '手工禮物盒包裝設計。',
        contribution: '結構設計與排版',
      },
      {
        title: '遊戲角色',
        img: 'img/work/ART/遊戲角色.webp',
        moreImgs: [
          'img/work/WEB/1.webp',
          'img/work/BANNER/和泰11SP_jolin_web.webp',
        ],
        desc: '2D 遊戲角色設定。',
        contribution: '角色原畫',
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
