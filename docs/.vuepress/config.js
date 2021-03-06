module.exports = {
  
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  plugins: [
    
    [
      'meting', {
        meting: {
          auto: "https://music.163.com/#/song?id=17706516"
        },          // 不配置该项的话不会出现全局播放器
        aplayer: {
          lrcType: 3
        },
        mobile: {
          cover: false,
          lrc: false,
        },
      }
    ],
    //支持数学公式//
    ['vuepress-plugin-mathjax'],
  ],
  dest: "./dist",
  theme: 'reco',
  markdown: {
    lineNumbers: true,
  },
  title: '跬步 | Step by step',
  themeConfig: {
    lastUpdate: false,
    startYear: '2020',
    subSidebar: 'auto',
    type: 'blog',
    valineConfig: {
      showComment: false,
      appId: 's23MzBdECSsl3Yzk2nMlOnUv-gzGzoHsz',
      appKey: 'ARqD0TLmSCkEkhnD4OyJwF6t',
    },
    base: '/',
    nav: [
      { text: '主页', link: '/' },
      { text: '目录', link: '/Note/index.md' },
      { text: '关于', link: '/Note/about.md' },
    ],

    sidebar: {
      "/Note/": [
        //===========//
        {
          title: "英语",
          collapsable: true,
          children: [
            { title: "常用", path: "/Note/English/words/common" },
            { title: "生活", path: "/Note/English/words/life" },
            { title: "动词不规则动词 ", path: "/Note/English/words/verb" },
            { title: "英语作文", path: "/Note/English/standard.md" },
          ],
        },
        //===========//
        {
          title: "语文",
          collapsable: true,
          children: [
            { title: "乌有先生历险记", path: "/Note/Chinese/ancient" },
            { title: "乌有先生历险记-教材勾连", path: "/Note/Chinese/more" },
            { title: "生活", path: "/Note/Chinese/life" },
            { title: "思维导图", path: "/Note/Chinese/mindmap" },
            { title: "语文差错", path: "/Note/Chinese/mistake" },
          ],
        },
        //===========//
        {
          title: "数学",
          collapsable: true,
          children: [
            { title: "同构专题", path: "/Note/math/Tongg" },
            { title: "八省联考数学试卷解析", path: "/Note/math/8s" },

          ],
        },
        //===========//
        {
          title: "地理",
          collapsable: true,
          children: [
            { title: "三圈环流", path: "/Note/geography/3q" },
            { title: "地理素养", path: "/Note/geography/data" },
            { title: "冰海啸", path: "/Note/geography/ice" },

          ],
        },
      ],
    },
    sidebarDepth: 3,
  },
}








