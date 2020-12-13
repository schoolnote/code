module.exports = {
  dest: "./dist",
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  markdown: {
    lineNumbers: true
  },
title: '跬步 | Step by step',
 themeConfig: {
    base: '/study/', 
    author: 'TarsChiu',
    smoothScroll: true,
    nav: [
      { text: '主页', link:'/'},
      { text: '笔记', link:'/Note/English/words/common.md'},
    ],
    sidebar: {
      "/Note/": [
        {
          title: "英语",
          collapsable: true,
         children: [
        { title: "常用", path: "/Note/English/words/common" },
        { title: "生活", path: "/Note/English/words/life" },
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
      ]







    },
    sidebarDepth: 3,
  },
};
    









   /// sidebarDepth: 2,        // 侧边栏显示2级
 
  



