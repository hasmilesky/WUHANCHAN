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
      {
        title: 'TOYOTA Jolin Web',
        img: 'img/work/WEB/和泰11SP_jolin_web.jpg',
        moreImgs: [
          'img/work/WEB/1.jpg',
          'img/work/BANNER/和泰11SP_jolin_web.jpg',
        ],
        desc: '這是為了 XX 品牌製作的 RWD 活動頁面，主要目標是提升產品轉單率。',
        contribution: '負責從 Wireframe 繪製、視覺設計到前端切版實作。',
      },
      {
        title: 'TOYOTA Jolin Web',
        img: 'img/work/WEB/和泰11SP_jolin_web.jpg',
        moreImgs: [
          'img/work/WEB/1.jpg',
          'img/work/BANNER/和泰11SP_jolin_web.jpg',
        ],
        desc: '這是為了 XX 品牌製作的 RWD 活動頁面，主要目標是提升產品轉單率。',
        contribution: '負責從 Wireframe 繪製、視覺設計到前端切版實作。',
      },
    ],
  },
  BANNER: {
    tagClass: 'tag_B',
    tagName: 'BANNER',
    items: [
      {
        title: 'NIVEA L630',
        img: 'img/work/BANNER/妮維雅_KV優化圖.jpg',
        moreImgs: [
          'img/work/WEB/1.jpg',
          'img/work/BANNER/和泰11SP_jolin_web.jpg',
        ],
        desc: '妮維雅產品廣告 Banner 設計。',
        contribution: '視覺合成',
      },
      {
        title: 'ELEMIS 玫瑰霜',
        img: 'img/work/BANNER/ELEMIS_1080x1080.jpg',
        moreImgs: [
          'img/work/WEB/1.jpg',
          'img/work/BANNER/和泰11SP_jolin_web.jpg',
        ],
        desc: 'ELEMIS 產品廣告設計。',
        contribution: '視覺合成',
      },
      {
        title: 'BIOTHERM GAME',
        img: 'img/work/BANNER/biotherm_1200x1200.jpg',
        moreImgs: [
          'img/work/WEB/1.jpg',
          'img/work/BANNER/和泰11SP_jolin_web.jpg',
        ],
        desc: '碧兒泉活動 Banner。',
        contribution: '排版設計',
      },
      {
        title: 'TOYOTA Supra',
        img: 'img/work/BANNER/TOYOTA_1080x1080.jpg',
        moreImgs: [
          'img/work/WEB/1.jpg',
          'img/work/BANNER/和泰11SP_jolin_web.jpg',
        ],
        desc: 'TOYOTA 跑車系列社群圖。',
        contribution: '視覺設計',
      },
      // {
      //   title: '肌膚之鑰 黃金眼霜',
      //   img: 'img/work/BANNER/cpb_1080x1080.jpg',
      //   desc: '肌膚之鑰高端保養品廣告。',
      //   contribution: '精緻修圖',
      // },
      {
        title: '肌膚之鑰 4D精華',
        img: 'img/work/BANNER/cpb_1040x1040.jpg',
        moreImgs: [
          'img/work/WEB/1.jpg',
          'img/work/BANNER/和泰11SP_jolin_web.jpg',
        ],
        desc: '產品推廣 Banner。',
        contribution: '排版設計',
      },
      {
        title: 'LeapUp LINE',
        img: 'img/work/BANNER/廣告_1200x1200.jpg',
        moreImgs: [
          'img/work/WEB/1.jpg',
          'img/work/BANNER/和泰11SP_jolin_web.jpg',
        ],
        desc: 'LINE 廣告版位設計。',
        contribution: '廣告排版',
      },

      {
        title: 'TOYOTA 中秋賀卡',
        img: 'img/work/BANNER/toyota_moon.jpg',
        moreImgs: [
          'img/work/WEB/1.jpg',
          'img/work/BANNER/和泰11SP_jolin_web.jpg',
        ],
        desc: '節慶賀卡插畫排版。',
        contribution: '插畫排版',
      },
      {
        title: 'TOYOTA TOWNACE',
        img: 'img/work/BANNER/TOYOTA_TA.jpg',
        moreImgs: [
          'img/work/WEB/1.jpg',
          'img/work/BANNER/和泰11SP_jolin_web.jpg',
        ],
        desc: '商用車推廣廣告。',
        contribution: '排版設計',
      },
      {
        title: '雀巢 KOL合作款',
        img: 'img/work/BANNER/NESCAFE_1080x1080.jpg',
        moreImgs: [
          'img/work/WEB/1.jpg',
          'img/work/BANNER/和泰11SP_jolin_web.jpg',
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
      {
        title: 'skinceuticals 三折 DM',
        img: 'img/work/PRINT/SKC_三折DM.jpg',
        moreImgs: [
          'img/work/WEB/1.jpg',
          'img/work/BANNER/和泰11SP_jolin_web.jpg',
        ],
        desc: '專案詳細說明文字',
        contribution: '印刷排版',
      },
      {
        title: '妮維雅 防曬外包裝',
        img: 'img/work/PRINT/妮維雅_防曬外包裝.jpg',
        moreImgs: [
          'img/work/WEB/1.jpg',
          'img/work/BANNER/和泰11SP_jolin_web.jpg',
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
        img: 'img/work/ART/明信片.jpg',
        moreImgs: [
          'img/work/WEB/1.jpg',
          'img/work/BANNER/和泰11SP_jolin_web.jpg',
        ],
        desc: '個人創作明信片。',
        contribution: '手繪插畫',
      },
      {
        title: '偶像禮物盒',
        img: 'img/work/ART/偶像禮物盒.jpg',
        moreImgs: [
          'img/work/WEB/1.jpg',
          'img/work/BANNER/和泰11SP_jolin_web.jpg',
        ],
        desc: '手工禮物盒包裝設計。',
        contribution: '結構設計與排版',
      },
      {
        title: '遊戲角色',
        img: 'img/work/ART/遊戲角色.jpg',
        moreImgs: [
          'img/work/WEB/1.jpg',
          'img/work/BANNER/和泰11SP_jolin_web.jpg',
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
