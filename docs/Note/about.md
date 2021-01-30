---
title: 关于本站
sticky:
 - type: number
 - sort type: 1
categories:
 - 关于
---
::: details 前面的废话
思索良多，我究竟要将这个网站建设成什么样子？在前一段时间里，我自己也没有准确的回答。只是忙着搭建网站，没有管太多。

后来，随着网站建设上的技术问题越来越少，我有了时间思索（尽管少的可怜），便有了略微的轮廓，开始逐渐构思，设立QQ群，拉人参加，等等。

现在，我可以说，这个网站是这样的

1、它是免费的

2、它是向全体老师和学生开放的

3、它记录的知识是每个学科中每章节的关键内容，方便老师学生查阅。并且增加互动内容，方便老师、学生，上传持久性的文档（例如评分标准），以及自己的心得。

总的来说，我们才刚刚开始，希望它可以一直坚持下去吧

加油！
:::
[如何使用本站](/Note/how.md)

## 这是个什么网站？
这一个学习互动性网站，通过线上线下的交流与互动，让内容呈现在老师与学生面前，让人人都有机会参与我们网站的建设。

它负责收录每个学科，每章节中的关键点，方便您查阅。

您也可以上传持久性的文档（例如评分标准），以及自己的心得。

您或许遇到过这样的情况，回去想背下自己不会的单词。不料，自己的单词本没带。</br>
这时，您可以打开我们的网站，进入单词模块，开始背诵。解决了您的燃眉之急，是不是很方便呢？</br>
ps：单词模块是由我负责哦~ </br>
我是TarsChiu~</br>

## 它是怎样运作的？
我们主要通过邮箱来接收您的文件与文章，同时你也可以加入我的QQ群与微信群，将文件发送给我们。不过，我们还是建议您以邮件的方式发送。
这样,我们可以随时看见您的邮件，以便更新内容。

## 我应该怎样参与？
如果您愿意加入我们，我们十分高兴.您的加入可以使网站内容更加丰富，并为我们的团队带来新的活力!

### 联系方式
我们有以下联系方式：

::: tip ヾ(≧▽≦*)o
#### 邮箱：

学校邮箱：<schoolmicrosoft90@163.com> (在学校主要通过此邮箱接收)

工作邮箱：<eve.mail@qq.com>

----
#### 社交媒体:

QQ群：902766503

微信群：

![](https://img.imgdb.cn/item/6014c6e03ffa7d37b3b623f9.jpg)

:::

### 文档规范：

为了减少我们的压力，也为了让您的文章更快的得以发布，您需要掌握一些知识。</br>
不必担心，它们并不难，您在10分钟之内就可以学会！
#### **将您的文章或文档以markdown形式保存:**
****
markdown是什么？

markdown是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。 
它实际上是个非常简单、非常容易学习的排版语法！
****
</br>
</br>
</br>
</br>

### 关于标题：
----
在Markdown中，若一段文字被定义为标题，只要在这段文字前加 # 号即可。
就像这样：
```md
# 一级标题
## 二级标题
### 三级标题
```
它们会以这种形式呈现:
::: tip 示例区：
## 一级标题
### 二级标题
#### 三级标题
:::
</br>
</br>
</br>

另外 如果您想添加文章标题请这样书写
```md
---
title: 文章标题 
---
```

它会这样呈现：
::: tip 示例区：
# 文章标题
:::
***********
</br>
</br>

### 加粗字体：

```md
**加粗**
```

它会这样呈现：
::: tip 示例区：
**加粗**
:::

</br>
</br>

### 分割线：
三个及以上的-或*即是分割线
```md
------
******
```

它会这样呈现：
::: tip 示例区：
****
----
:::

</br>
</br>

好的，到这里，您已经学会了基本的markdown语法，您便可以加入我们并开始写作了！</br>
相信有了您的参与，我们的网站会建设的越来越好！

## 附录：
更多的markdown用法的样本示例

</br>

```md
---
title: 标题
categories:   //分类
 - 语文 
author: '小和尚'  //作者
isShowComments: true   //是否显示评论区， true=是 false=否
---
## 二级标题  //我们不建议您写一级标题。
### 三级标题
**加粗**
[文字标题](文字链接)
![图片标题](图片链接)
<邮箱地址>
~~删除线~~
```


</br>

显示效果如下：

![sXNgHO.png](https://s3.ax1x.com/2021/01/26/sXNgHO.png)

</br>


更多：
::: details 关于本站的故事：
## A letter for U ~
**On a cold night, the moon was hanging on. When I was reciting the words with the warm air-conditioner, a special idea occurred in my head. Why not build a website only for studying?**

**After that, I searched through all the Internet. I found a good solution. Based on vuepress(based on vue) engine to build it. Armed with a powerful vue engine pushed me to make this idea come true.**
**During building the website, I met a number of issues, sometimes I even wanted to give up. But finally, with my full ambition's heart, I did it! A not complex but fancy website was born! So, that's why you can see this letter.** 

**Last but not least, I hope you can join us, so that we can build this website together and make it better and better.** 

<p align="right"><b>TarsChiu,</b></p>
<p align="right"><b>night</b></p>

:::

</br>
</br>
</br>
</br>

::: details 开发者指南：
## 本文只针对已经熟悉vuepress的开发者
>网站服务器托管: Github & Gitee(主要用于国内加速访问)</br>
引擎:vuepress(基于vue)</br>
主题:vuepress-theme-reco</br>
插件:</br>
"vuepress-plugin-meting"</br>
"vuepress-plugin-mathjax"</br>
"valine"(用于浏览量及评论)</br>
使用yarn作为包管理器</br>

源代码是同步到github上的:</br>
地址:[https://github.com/schoolnote/code](https://github.com/schoolnote/code)</br>
ssh:[git@github.com:schoolnote/code.git]()</br>
你可以创建分支,直接在github上为我们提供文章。这样,我们只要拉取就可以了,真开心😁!</br>
开发环境: vscode(yarn + Yarn Task Provider 插件) + Windows10 + git</br>
:::