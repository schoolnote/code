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
      { text: '笔记', link: '/guide/index.md' },
      { text: '关于', link: '/article/letter.md' },
    ],
    sidebar: {
      "/Note/": [
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
        {
          title: "语文",
          collapsable: true,
          children: [
            { title: "乌有先生历险记", path: "/Note/Chinese/ancient" },
            { title: "乌有先生历险记-教材勾连", path: "/Note/Chinese/more" },
            { title: "生活", path: "/Note/Chinese/life" },
          ],
        },
        {
          title: "数学",
          collapsable: true,
          children: [
            { title: "同构专题", path: "/Note/math/Tongg" },
            { title: "占位", path: "/Note/math/w" },

          ],
        },
        {
          title: "地理",
          collapsable: true,
          children: [
            { title: "三圈环流", path: "/Note/geography/3q" },
            { title: "地理素养", path: "/Note/geography/data" },

          ],
        },
        {
          title: "关于",
          collapsable: true,
          children: [
            { title: "关于本站", path: "/Note/about.md" },
          ],
        },
      ],
    },
    sidebarDepth: 3,
  },
}








