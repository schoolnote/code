//配置yarn任务
/*
{
	"version": "2.0.0",
	"tasks": [
		{
			"type": "yarn",
			"task": "docs:dev",
			"problemMatcher": [],
			"label": "yarn: docs:dev"
		}
	]
}*/
module.exports = {
  plugins: [
         
    //-----------------------vuepress公告插件 先安装在配置 yarn add @vuepress-yard/vuepress-plugin-window--------------------------//
    ['@vuepress-yard/vuepress-plugin-window',
    {
    title: "致所有开发人员以及贡献者们", 
    contentInfo: {
      title: "~TarsChiu~",
      //needImg: true,
      //imgUrl: "https://reinness.com/avatar.png",
      content: "目前，我们的网站仍然处于起步阶段，还有很多内容需要补充。在此，我希望大家能够积极向我们提供资料，一起将此网站建设的越来越好！",
      //contentStyle: "" //自定义文字样式
    },
     
     windowStyle:{right: '20px',top: '70px',width: '270px', padding:'4px'},
      bottomInfo: 
      {
      btnText: '进入',
      linkTo: '/guide/'
      },
    delayMount:1100,
    closeOnce: true//设置关闭后不再弹出，直到再次访问！
    }
    ],


    //[
     // 'vuepress-plugin-comment',
      //{
      //  choosen: 'valine', 
        // options选项中的所有参数，会传给Valine的配置
       // options: {
       //   el: '#valine-vuepress-comment',
       //   appId: 's23MzBdECSsl3Yzk2nMlOnUv-gzGzoHsz',
///appKey: 'ARqD0TLmSCkEkhnD4OyJwF6t'
          
      //  }
     // }
   // ],


     //支持数学公式https://vuepress.github.io/zh/plugins/mathjax/npm install -D vuepress-plugin-mathjax//
      [
          'vuepress-plugin-mathjax',
          {}
      ],

   
],
  dest: "./dist",
  
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
     // 数学公式
   // ...
 
  ],
  theme: 'reco',
  markdown: {
     lineNumbers: true,
},
 
title: '跬步 | Step by step',
 themeConfig: {
  startYear: '2020',
  subSidebar: 'auto',
  type:'blog',
  valineConfig: {
    showComment: false,
    appId: 's23MzBdECSsl3Yzk2nMlOnUv-gzGzoHsz',// your appId
    appKey: 'ARqD0TLmSCkEkhnD4OyJwF6t', // your appKey
  },
    base: '/', 
    //author: 'TarsChiu',
    //smoothScroll: true,
    nav: [
      { text: '主页', link:'/'},
      { text: '笔记', link:'/guide/index.md'},
      { text: '关于', link:'/article/letter.md'},
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
      ]







    },
    sidebarDepth: 3,
  },
};
    









   /// sidebarDepth: 2,        // 侧边栏显示2级
 
  



