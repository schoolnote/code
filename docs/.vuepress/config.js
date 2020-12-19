module.exports = {
  plugins: [
    ['@vuepress-yard/vuepress-plugin-window',
    {
    title: "致所有开发人员以及贡献者们",  //vuepress公告插件 先安装在配置 yarn add @vuepress-yard/vuepress-plugin-window
    contentInfo: {
      title: "~TarsChiu~",
      //needImg: true,
      //imgUrl: "https://reinness.com/avatar.png",
      content: "目前，我们的网站仍然处于起步阶段，还有很多内容需要补充。在此，我希望大家能够积极向我们提供资料，一起将此网站建设的越来越好！",
      contentStyle: ""
    },
    //windowStyle:{right: '20px',top: '70px',width: '260px',},
      bottomInfo: 
      {
      btnText: '',
      linkTo: ''
      },
    closeOnce: true//设置关闭后不再弹出，直到再次访问！
    }
    ]
],
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
    base: '/', 
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
      ]







    },
    sidebarDepth: 3,
  },
};
    









   /// sidebarDepth: 2,        // 侧边栏显示2级
 
  



