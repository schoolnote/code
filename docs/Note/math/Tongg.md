---
title: 同构专题
categories:
 - math
tags:
 - 函数
author: 'Nie🎉'
---
## 同构专题解析

同构：两个函数可以转换为同一个母函数，如母函数$f(x)=ln⁡x+x-1$，那我们可以把$f(x-1)=ln⁡(x-1)+x$,$f(e^x )=e^x+x-1$称为同构

为什么学同构：同构本质是一种出题人的思路，2020年高考题国一，国二，新高考一都出现了同构，把握这种出题人思维，更容易看到题目的本质，大大的简化题目，做出一些本来没有能力做出来的题目

## 例题【1】$a>b>1$判断$e^a-e^b$与$ln⁡a-ln⁡b$大小
【解析】我们要探究$e^a-e^b$与$ln⁡a-ln⁡b$的关系，两边通过移项把同参数的放同一边，发现等同于探究$e^a-ln⁡a$与$e^b-ln⁡b$ ，关系式两边构造相同，那我们就可以构造$f(x)=e^x-ln⁡x$，通过函数单调性来判断$e^a-ln⁡a$与$e^b-ln⁡b$大小关系。$f'(x)=e^x-\frac{1}{x}$，当$x>1$时$f'(x)>0$，那原函数$f(x)↗$，$a>b>1⇒f(a)>f(b)⇒e^a-ln⁡a>e^b-ln⁡b⇒e^a-e^b>ln⁡a-ln⁡b$

## 例题【2】求证$e^{x-1}≥ln⁡x+1$
【解析】常规思路是通过移项构造函数判断单调性求最小值，基础好的就看出两组放缩。题目难道不大，但是还有下面这个思路化繁为简。$e^{x-1}≥ln⁡x+1⇒e^{x-1}+(x-1)≥ln⁡x+x$，构造函数$f(x)=ln⁡x+x⇒f(e^{x-1} )=e^{x-1}+(x-1)$，单调性$ln⁡x↗,x↗⇒f(x)=ln⁡x+x↗$那么就要求证$f(x)≥f(e^{x-1} )⇒x≥e^{x-1}⇒ln⁡x≥x-1$，这个证明就比原式简便许多

PS:具体怎么想到母函数的在后讲解

## 真题【2020全国Ⅰ•12】若$2^a+log_2⁡a=4^b+2log_4⁡b$，则（  ）
A、$a>2b$                        B、$a<2b$
C、$a>b^2$                      D、$a<b^2$
【解析】$2^a+log_2⁡a=4^b+2 log_4⁡b⇒▁(2^a+log_2⁡a )=▁(2^{2b}+log_2⁡2 b)-1$划线部分构造相同，构造$f(x)=2^x+log_2⁡x$，判断函数单调性$2^x↗$,$log_2⁡x↗⇒f(x)=2^x+log_2⁡x↗$，$f(a)-f(2b)=-1<0⇒f(a)<f(2b)⇒a<2b$故选B

## 真题【2020 全国Ⅱ•11】若$2^x-2^y<3^{-x}-3^{-y}$，则（  ）（提示：如例题【1】）
A、 $ln⁡(y-x+1)>0$                B、$ ln⁡(y-x+1)<0$
C、$ ln⁡|x-y|>0$                    D、$ ln⁡|x-y|<0$
【解析】和例题1解法基本一样$2^x-2^y<3^{-x}-3^{-y}⇒2^x-\frac{1}{3^x} <2^y-\frac{1}{3^y} $，构造函数$f(x)=2^x-\frac{1}{3^x}$ ，判断函数单调性$2^x↗-\frac{1}{3^x} ↗⇒f(x)=2^x-\frac{1}{3^x} ↗$，那么$f(x)<f(y)⇒x<y⇒y-x+1>1⇒ln⁡(y-x+1)>0$，故答案是A 
