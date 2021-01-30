---
title: 同构专题
categories:
 - 数学
tags:
 - 题目解析
author: 'Nie🎉'
isShowComments: true
---
## 同构专题解析


同构：两个函数可以转换为同一个母函数，如母函数$\mathbf{f}\left( \mathbf{x} \right)\mathbf{=}\mathbf{\ln}\mathbf{x}\mathbf{+ x}\mathbf{-}\mathbf{1}$，那我们可以把$\mathbf{f}\left( \mathbf{x}\mathbf{-}\mathbf{1} \right)\mathbf{=}\mathbf{\ln}\left( \mathbf{x}\mathbf{-}\mathbf{1} \right)\mathbf{+ x,f}\left( \mathbf{e}^{\mathbf{x}} \right)\mathbf{=}\mathbf{e}^{\mathbf{x}}\mathbf{+ x}\mathbf{-}\mathbf{1}$称为同构

为什么学同构：同构本质是一种出题人的思路，2020年高考题国一，国二，新高考一都出现了同构，把握这种出题人思维，更容易看到题目的本质，大大的简化题目，做出一些本来没有能力做出来的题目

## 例题【1】
### a\>b\>1判断$\mathbf{e}^{\mathbf{a}}\mathbf{-}\mathbf{e}^{\mathbf{b}}$与$\mathbf{\ln}\mathbf{a}\mathbf{-}\mathbf{\ln}\mathbf{b}$大小


【解析】
我们要探究$\mathbf{e}^{\mathbf{a}}\mathbf{-}\mathbf{e}^{\mathbf{b}}\mathbf{\sim}\mathbf{\ln}\mathbf{a}\mathbf{-}\mathbf{\ln}\mathbf{b}$的关系，两边通过移项把同参数的放同一边，发现等同于探究$\mathbf{e}^{\mathbf{a}}\mathbf{-}\mathbf{\ln}\mathbf{a}\mathbf{\sim}\mathbf{e}^{\mathbf{b}}\mathbf{-}\mathbf{\ln}\mathbf{b}$，关系式两边构造相同，那我们就可以构造$\mathbf{f}\left( \mathbf{x} \right)\mathbf{=}\mathbf{e}^{\mathbf{x}}\mathbf{-}\mathbf{\ln}\mathbf{x}$，通过函数单调性来判断$\mathbf{e}^{\mathbf{a}}\mathbf{-}\mathbf{\ln}\mathbf{a}\mathbf{\sim}\mathbf{e}^{\mathbf{b}}\mathbf{-}\mathbf{\ln}\mathbf{b}$大小关系。$\mathbf{f}^{\mathbf{’}}\left( \mathbf{x} \right)\mathbf{=}\mathbf{e}^{\mathbf{x}}\mathbf{-}\frac{\mathbf{1}}{\mathbf{x}}$，当$\mathbf{x > 1}$时$\mathbf{f}^{\mathbf{’}}\left( \mathbf{x} \right)\mathbf{> 0}$，那原函数$\mathbf{f}\left( \mathbf{x} \right)\mathbf{\nearrow}$，$\mathbf{a > b > 1}\mathbf{\Rightarrow}\mathbf{f}\left( \mathbf{a} \right)\mathbf{> f}\left( \mathbf{b} \right)\mathbf{\Rightarrow}\mathbf{e}^{\mathbf{a}}\mathbf{-}\mathbf{\ln}\mathbf{a}\mathbf{>}\mathbf{e}^{\mathbf{b}}\mathbf{-}\mathbf{\ln}\mathbf{b}\mathbf{\Rightarrow}\mathbf{e}^{\mathbf{a}}\mathbf{-}\mathbf{e}^{\mathbf{b}}\mathbf{>}\mathbf{\ln}\mathbf{a}\mathbf{-}\mathbf{\ln}\mathbf{b}$

## 例题【2】
### 求证$\mathbf{e}^{\mathbf{x - 1}}\mathbf{\geq}\mathbf{\ln}\mathbf{x}\mathbf{+ 1}$


【解析】
常规思路是通过移项构造函数判断单调性求最小值，基础好的就看出两组放缩。题目难道不大，但是还有下面这个思路化繁为简。$\mathbf{e}^{\mathbf{x - 1}}\mathbf{\geq}\mathbf{\ln}\mathbf{x}\mathbf{+ 1 \Rightarrow}\mathbf{e}^{\mathbf{x - 1}}\mathbf{+}\left( \mathbf{x - 1} \right)\mathbf{\geq}\mathbf{\ln}\mathbf{x}\mathbf{+ x}$，构造函数$\mathbf{f}\left( \mathbf{x} \right)\mathbf{=}\mathbf{\ln}\mathbf{x}\mathbf{+ x}\mathbf{\Rightarrow}\mathbf{f}\left( \mathbf{e}^{\mathbf{x}\mathbf{-}\mathbf{1}} \right)\mathbf{=}\mathbf{e}^{\mathbf{x}\mathbf{-}\mathbf{1}}\mathbf{+}\left( \mathbf{x}\mathbf{-}\mathbf{1} \right)$，单调性$\mathbf{\ln}\mathbf{x}\mathbf{\nearrow}\mathbf{,x}\mathbf{\nearrow}\mathbf{\Rightarrow}\mathbf{f}\left( \mathbf{x} \right)\mathbf{=}\mathbf{\ln}\mathbf{x}\mathbf{+ x}\mathbf{\nearrow}$那么就要求证$\mathbf{f}\left( \mathbf{x} \right)\mathbf{\geq}\mathbf{f}\left( \mathbf{e}^{\mathbf{x}\mathbf{-}\mathbf{1}} \right)\mathbf{\Rightarrow}\mathbf{x}\mathbf{\geq}\mathbf{e}^{\mathbf{x}\mathbf{-}\mathbf{1}}\mathbf{\Rightarrow}\mathbf{\ln}\mathbf{x}\mathbf{\geq}\mathbf{x}\mathbf{-}\mathbf{1}$，这个证明就比原式简便许多

**PS:具体怎么想到母函数的在后讲解**

## 真题【2020全国Ⅰ•12】
### 若$\mathbf{2}^{\mathbf{a}}\mathbf{+}\mathbf{\log}_{\mathbf{2}}\mathbf{a}\mathbf{=}\mathbf{4}^{\mathbf{b}}\mathbf{+ 2}\mathbf{\log}_{\mathbf{4}}\mathbf{b}$，则（  ）


$\mathbf{A}\mathbf{、}\mathbf{a > 2}\mathbf{b}$
$\mathbf{B}\mathbf{、}\mathbf{a < 2}\mathbf{b}$

$\mathbf{C}\mathbf{、}\mathbf{a >}\mathbf{b}^{\mathbf{2}}$
$\mathbf{D}\mathbf{、}\mathbf{a <}\mathbf{b}^{\mathbf{2}}$

【解析】
$\mathbf{2}^{\mathbf{a}}\mathbf{+}\mathbf{\log}_{\mathbf{2}}\mathbf{a}\mathbf{=}\mathbf{4}^{\mathbf{b}}\mathbf{+ 2}\mathbf{\log}_{\mathbf{4}}\mathbf{b}\mathbf{\Rightarrow}\mathbf{=}\mathbf{- 1}$划线部分构造相同，构造$\mathbf{f}\left( \mathbf{x} \right)\mathbf{=}\mathbf{2}^{\mathbf{x}}\mathbf{+}\mathbf{\log}_{\mathbf{2}}\mathbf{x}$，判断函数单调性$\mathbf{2}^{\mathbf{x}}\mathbf{\nearrow ,}\mathbf{\log}_{\mathbf{2}}\mathbf{x}\mathbf{\nearrow \Rightarrow f}\left( \mathbf{x} \right)\mathbf{=}\mathbf{2}^{\mathbf{x}}\mathbf{+}\mathbf{\log}_{\mathbf{2}}\mathbf{x}\mathbf{\nearrow}$，$\mathbf{f}\left( \mathbf{a} \right)\mathbf{-}\mathbf{f}\left( \mathbf{2}\mathbf{b} \right)\mathbf{=}\mathbf{-}\mathbf{1 < 0}\mathbf{\Rightarrow}\mathbf{f}\left( \mathbf{a} \right)\mathbf{< f}\left( \mathbf{2}\mathbf{b} \right)\mathbf{\Rightarrow}\mathbf{a < 2}\mathbf{b}$故选B

## 真题【2020全国Ⅱ•11】
### 若$\mathbf{2}^{\mathbf{x}}\mathbf{-}\mathbf{2}^{\mathbf{y}}\mathbf{<}\mathbf{3}^{\mathbf{-}\mathbf{x}}\mathbf{-}\mathbf{3}^{\mathbf{-}\mathbf{y}}$，则（ ）


（提示：如例题【1】）

$\mathbf{A}\mathbf{、}\mathbf{\ln}\left( \mathbf{y}\mathbf{-}\mathbf{x + 1} \right)\mathbf{> 0}$
$\mathbf{B}\mathbf{、}\mathbf{\ln}\left( \mathbf{y}\mathbf{-}\mathbf{x + 1} \right)\mathbf{< 0}$

$\mathbf{C}\mathbf{、}\mathbf{\ln}\left| \mathbf{x}\mathbf{-}\mathbf{y} \right|\mathbf{> 0}$
$\mathbf{D}\mathbf{、}\mathbf{\ln}\left| \mathbf{x}\mathbf{-}\mathbf{y} \right|\mathbf{< 0}$

【解析】
和例题1解法基本一样$\mathbf{2}^{\mathbf{x}}\mathbf{-}\mathbf{2}^{\mathbf{y}}\mathbf{<}\mathbf{3}^{\mathbf{- x}}\mathbf{-}\mathbf{3}^{\mathbf{- y}}\mathbf{\Rightarrow}\mathbf{2}^{\mathbf{x}}\mathbf{-}\frac{\mathbf{1}}{\mathbf{3}^{\mathbf{x}}}\mathbf{<}\mathbf{2}^{\mathbf{y}}\mathbf{-}\frac{\mathbf{1}}{\mathbf{3}^{\mathbf{y}}}$，构造函数$\mathbf{f}\left( \mathbf{x} \right)\mathbf{=}\mathbf{2}^{\mathbf{x}}\mathbf{-}\frac{\mathbf{1}}{\mathbf{3}^{\mathbf{x}}}$，判断函数单调性$\mathbf{2}^{\mathbf{x}}\mathbf{\nearrow -}\frac{\mathbf{1}}{\mathbf{3}^{\mathbf{x}}}\mathbf{\nearrow \Rightarrow f}\left( \mathbf{x} \right)\mathbf{=}\mathbf{2}^{\mathbf{x}}\mathbf{-}\frac{\mathbf{1}}{\mathbf{3}^{\mathbf{x}}}\mathbf{\nearrow}$，那么$\mathbf{f}\left( \mathbf{x} \right)\mathbf{< f}\left( \mathbf{y} \right)\mathbf{\Rightarrow}\mathbf{x < y}\mathbf{\Rightarrow}\mathbf{y}\mathbf{-}\mathbf{x + 1 > 1}\mathbf{\Rightarrow}\mathbf{\ln}\left( \mathbf{y}\mathbf{-}\mathbf{x + 1} \right)\mathbf{> 0}$，故答案是A

## 真题【2020全国Ⅱ•11】
### 已知函数$\mathbf{f}\left( \mathbf{x} \right)\mathbf{= a}\mathbf{e}^{\mathbf{x}\mathbf{-}\mathbf{1}}\mathbf{-}\mathbf{\ln}\mathbf{x}\mathbf{+}\mathbf{\ln}\mathbf{a}$


略

若$\mathbf{f}\left( \mathbf{x} \right)\mathbf{\geq}\mathbf{1}$，求a的取值范围、

【解析】
标答给出来的时分三类讨论，但出题人的思路却很简单。这样简单的转换：

$$\mathbf{a}\mathbf{e}^{\mathbf{x - 1}}\mathbf{-}\mathbf{\ln}\mathbf{x}\mathbf{+}\mathbf{\ln}\mathbf{a}\mathbf{\geq 1 \Rightarrow a}\mathbf{e}^{\mathbf{x - 1}}\mathbf{+}\mathbf{\ln}\mathbf{a}\mathbf{\geq}\mathbf{\ln}\mathbf{x}\mathbf{+ 1 \Rightarrow}\mathbf{e}^{\mathbf{x - 1 +}\mathbf{\ln}\mathbf{a}}\mathbf{+ x - 1 +}\mathbf{\ln}\mathbf{a}\mathbf{\geq}\mathbf{\ln}\mathbf{x}\mathbf{+ x}$$


然后就发现同构$\mathbf{f}\left( \mathbf{x} \right)\mathbf{=}\mathbf{\ln}\mathbf{x}\mathbf{+ x \Rightarrow f}\left( \mathbf{e}^{\mathbf{x - 1 +}\mathbf{\ln}\mathbf{a}} \right)\mathbf{=}\mathbf{e}^{\mathbf{x - 1 +}\mathbf{\ln}\mathbf{a}}\mathbf{+ x - 1 +}\mathbf{\ln}\mathbf{a}$，函数单调性$\mathbf{\ln}\mathbf{x}\mathbf{\nearrow ,x \nearrow \Rightarrow f}\left( \mathbf{x} \right)\mathbf{=}\mathbf{\ln}\mathbf{x}\mathbf{+ x \nearrow}$，所以$\mathbf{f}\left( \mathbf{e}^{\mathbf{x - 1 +}\mathbf{\ln}\mathbf{a}} \right)\mathbf{\geq f}\left( \mathbf{x} \right)\mathbf{\Rightarrow}\mathbf{e}^{\mathbf{x - 1 + lna}}\mathbf{\geq x}$，求参数a的取值就参量分离$\mathbf{e}^{\mathbf{x - 1 +}\mathbf{\ln}\mathbf{a}}\mathbf{\geq x \Rightarrow a \geq}\frac{\mathbf{x}}{\mathbf{e}^{\mathbf{x - 1}}}$。设函数$\mathbf{g}\left( \mathbf{x} \right)\mathbf{=}\frac{\mathbf{x}}{\mathbf{e}^{\mathbf{x - 1}}}\text{那么}\mathbf{g}^{\mathbf{'}}\left( \mathbf{x} \right)\mathbf{=}\frac{{\left( \mathbf{1 - x} \right)\mathbf{e}}^{\mathbf{x - 1}}}{\mathbf{e}^{\mathbf{2}\mathbf{x - 2}}}\text{当}\mathbf{x > 1}\text{时，}\mathbf{g}\left( \mathbf{x} \right)\mathbf{\swarrow ;}\text{当}\mathbf{0 < x < 1}\text{时，}\mathbf{g}\left( \mathbf{x} \right)\mathbf{\nearrow}$。所以$\mathbf{x = 1}\text{时}\mathbf{g}\left( \mathbf{1} \right)\mathbf{= 1}\text{时最大值。恒成立条件}\mathbf{a \geq}{\mathbf{g}\left( \mathbf{x} \right)}_{\mathbf{\max}}$得出$\mathbf{a \geq 1}$

## 模拟题1
### 已知$\mathbf{\alpha}\mathbf{e}^{\mathbf{\alpha}}\mathbf{=}\mathbf{e}^{\mathbf{3}}$，$\mathbf{\beta}\left( \mathbf{\ln}\mathbf{\beta}\mathbf{- 1} \right)\mathbf{=}\mathbf{e}^{\mathbf{4}}$，求$\mathbf{\alpha\beta =}$


【解析】
这道题其实是很简单的同构发现同构时发现有ln套一个ln导致很多人放弃，我们把两个等式两边取对数

$\mathbf{\alpha}\mathbf{e}^{\mathbf{\alpha}}\mathbf{=}\mathbf{e}^{\mathbf{3}}\mathbf{\Rightarrow}\mathbf{\ln}\mathbf{\alpha}\mathbf{+ \alpha = 3}$

$\mathbf{\beta}\mathbf{\ln}\left( \mathbf{\beta - 1} \right)\mathbf{=}\mathbf{e}^{\mathbf{4}}\mathbf{\Rightarrow}\mathbf{\ln}\left( \right)\mathbf{+}\mathbf{= 3}$

发现同构$\mathbf{f}\left( \mathbf{x} \right)\mathbf{=}\mathbf{\ln}\mathbf{x}\mathbf{+ x}$，函数单调，所以$\mathbf{f}\left( \mathbf{\alpha} \right)\mathbf{= f}\left( \mathbf{\ln}\mathbf{\beta}\mathbf{- 1} \right)\mathbf{\Rightarrow \alpha =}\mathbf{\ln}\mathbf{\beta}\mathbf{- 1}$代入式$\mathbf{\ln}\mathbf{\alpha}\mathbf{+}\mathbf{\ln}\mathbf{\beta}\mathbf{- 1 = 3 \Rightarrow}\mathbf{\ln}\mathbf{\text{αβ}}\mathbf{= 4 \Rightarrow \alpha\beta =}\mathbf{e}^{\mathbf{4}}$。

## 模拟题2 题目：略（1）略

### 求证$\mathbf{x > 0}\text{时，}\left( \mathbf{e}^{\mathbf{x}}\mathbf{-}\mathbf{1} \right)\mathbf{\ln}\left( \mathbf{x + 1} \right)\mathbf{>}\mathbf{x}^{\mathbf{2}}$


【解析】
$\left( \mathbf{e}^{\mathbf{x}}\mathbf{-}\mathbf{1} \right)\mathbf{\ln}\left( \mathbf{x + 1} \right)\mathbf{>}\mathbf{x}^{\mathbf{2}}\mathbf{\Rightarrow}\frac{\mathbf{\ln}\left( \mathbf{x + 1} \right)}{\mathbf{x}}\mathbf{>}\frac{\mathbf{x}}{\left( \mathbf{e}^{\mathbf{x}}\mathbf{- 1} \right)}$，构造$\mathbf{f}\left( \mathbf{x} \right)\mathbf{=}\frac{\mathbf{x}}{\left( \mathbf{e}^{\mathbf{x}}\mathbf{- 1} \right)}\mathbf{\Rightarrow}\mathbf{f}\left( \mathbf{\ln}\left( \mathbf{x + 1} \right) \right)\mathbf{=}\frac{\mathbf{\ln}\left( \mathbf{x + 1} \right)}{\mathbf{x}}$，判断单调性$\mathbf{f}^{\mathbf{'}}\left( \mathbf{x} \right)\mathbf{=}\frac{\left( \mathbf{1 - x} \right)\mathbf{e}^{\mathbf{x}}\mathbf{- 1}}{\left( \mathbf{e}^{\mathbf{x}}\mathbf{- 1} \right)^{\mathbf{2}}}$，当x\>0时$\mathbf{f}^{\mathbf{'}}\left( \mathbf{x} \right)\mathbf{\leq 0}$，$\mathbf{f}\left( \mathbf{x} \right)\mathbf{\searrow}$。所以$\mathbf{f}\left( \mathbf{\ln}\left( \mathbf{x + 1} \right) \right)\mathbf{> f}\left( \mathbf{x} \right)\mathbf{\Rightarrow}\mathbf{\ln}{\left( \mathbf{x + 1} \right)\mathbf{< x}}$。即证明$\mathbf{\ln}{\left( \mathbf{x + 1} \right)\mathbf{< x}}$就证明题目。

构造$g(x)=ln(x+1)-x$,$x>0$时，$g'(x)=\frac{1}{x+1}-1<0$,所以函数在$(0,+∞)$递减，$g(x)<g(0)\Rightarrow ln(x+1)-x<0$ 原式得证

我们发现上面的题目中大多离不开对数和指数的转换，同构的题目中，都离不开下面几种关系。

$$\mathbf{f}\left( \mathbf{x} \right)\mathbf{=}\mathbf{\ln}\mathbf{x}\mathbf{+ x \Rightarrow f}\left( \mathbf{e}^{\mathbf{x}} \right)\mathbf{=}\mathbf{e}^{\mathbf{x}}\mathbf{+ x}\text{，}\mathbf{f}\left( \mathbf{x} \right)\text{在}\left( \text{0,+∞} \right)\mathbf{\nearrow}$$

$$\mathbf{f}\left( \mathbf{x} \right)\mathbf{= x}\mathbf{\ln}\mathbf{x}\mathbf{\Rightarrow f}\left( \mathbf{x} \right)\mathbf{= x}\mathbf{e}^{\mathbf{x}}\text{，}\mathbf{f}\left( \mathbf{x} \right)\text{在}\left( \text{0,+∞} \right)\mathbf{\nearrow}$$

$$\mathbf{f}\left( \mathbf{x} \right)\mathbf{=}\frac{\mathbf{\ln}\mathbf{x}}{\mathbf{x}}\mathbf{\Rightarrow f}\left( \mathbf{e}^{\mathbf{x}} \right)\mathbf{=}\frac{\mathbf{x}}{\mathbf{e}^{\mathbf{x}}}\text{，}\mathbf{f}\left( \mathbf{x} \right)\text{在}\left( \text{0,+∞} \right)\mathbf{\nearrow}$$

$$\mathbf{f}\left( \mathbf{x} \right)\mathbf{= x -}\mathbf{\ln}\mathbf{x}\mathbf{- 1 \Rightarrow f}\left( \mathbf{e}^{\mathbf{x}} \right)\mathbf{=}\mathbf{e}^{\mathbf{x}}\mathbf{- x - 1}\text{，}\mathbf{f}\left( \mathbf{x} \right)\text{在}\left( \text{0,+∞} \right)\mathbf{\nearrow}$$

$$\mathbf{f}\left( \mathbf{x} \right)\mathbf{=}\frac{\mathbf{\ln}\left( \mathbf{x + 1} \right)}{\mathbf{x}}\mathbf{\Rightarrow f}\left( \mathbf{e}^{\mathbf{x}}\mathbf{- 1} \right)\mathbf{=}\frac{\mathbf{x}}{\mathbf{e}^{\mathbf{x}}\mathbf{- 1}}\text{，}\mathbf{f}\left( \mathbf{x} \right)\text{在}\left( \text{0,+∞} \right)\mathbf{\searrow}$$

......

下面的题目有些难度但是用同构的方法来写就简单易懂

## 模拟题【炎德•英才大联考长郡中学2021届高三月考卷（二）•21】
### 已知函数$\mathbf{f}\left( \mathbf{x} \right)\mathbf{=}\mathbf{e}^{\mathbf{x}\mathbf{-}\mathbf{a}}\mathbf{-}\mathbf{x}\mathbf{\ln}\mathbf{x}\mathbf{-}\left( \mathbf{a}\mathbf{-}\mathbf{1} \right)\mathbf{x}\mathbf{-}\mathbf{1}$，$\mathbf{a}\mathbf{\in}\mathbf{R}$，e为自然对数底数


略

讨论$\mathbf{f}\left( \mathbf{x} \right)$的极值点个数

【解析】
要讨论极值点个数，那先把函数进行求导$\mathbf{f}^{\mathbf{'}}\left( \mathbf{x} \right)\mathbf{=}\mathbf{e}^{\mathbf{x - a}}\mathbf{-}\mathbf{\ln}\mathbf{x}\mathbf{- a}$，当$\mathbf{f}^{\mathbf{'}}\left( \mathbf{x} \right)\mathbf{= 0}\text{时就有可能为极值点}$。$\mathbf{e}^{\mathbf{x - a}}\mathbf{-}\mathbf{\ln}\mathbf{x}\mathbf{- a = 0 \Rightarrow}\mathbf{e}^{\mathbf{x - a}}\mathbf{+ x - a =}\mathbf{\ln}\mathbf{x}\mathbf{+ x}$，发现同构$\mathbf{g}\left( \mathbf{x} \right)\mathbf{=}\mathbf{\ln}\mathbf{x}\mathbf{+ x \Rightarrow g}\left( \mathbf{e}^{\mathbf{x - a}} \right)\mathbf{=}\mathbf{e}^{\mathbf{x - a}}\mathbf{+ x - a}$，所以$\mathbf{g}\left( \mathbf{x} \right)\mathbf{= g}\left( \mathbf{e}^{\mathbf{x - a}} \right)\mathbf{\Rightarrow x =}\mathbf{e}^{\mathbf{x - a}}\mathbf{\Rightarrow}\mathbf{\ln}\mathbf{x}\mathbf{= x - a}$，构造函数$\mathbf{h}\left( \mathbf{x} \right)\mathbf{=}\mathbf{\ln}\mathbf{x}\mathbf{- x + a}$，讨论原函数的极值点个数等同于讨论$\mathbf{h}\left( \mathbf{x} \right)$零点个数。易证明出$\mathbf{0 < a \leq 1}$时无极值点，当$\mathbf{a > 1}$时有两个极值点。

模拟题 求证：对一切，有

【解析】这题乍一看不好同构，但是两边两边同乘x就会发现同构，$\mathbf{x}\mathbf{\ln}\mathbf{x}\mathbf{>}\frac{\mathbf{x}}{\mathbf{e}^{\mathbf{x}}}\mathbf{-}\frac{\mathbf{2}}{\mathbf{e}}$，发现同构$\mathbf{f}\left( \mathbf{x} \right)\mathbf{= x}\mathbf{\ln}\mathbf{x}\mathbf{\Rightarrow f}\left( \mathbf{e}^{\mathbf{- x}} \right)\mathbf{= -}\frac{\mathbf{x}}{\mathbf{e}^{\mathbf{x}}}$，发现符号相反那我们就减过去$\mathbf{f}\left( \mathbf{x} \right)\mathbf{+ f}\left( \mathbf{e}^{\mathbf{- x}} \right)\mathbf{> -}\frac{\mathbf{2}}{\mathbf{e}}$。简单求导发现${\mathbf{f}\left( \mathbf{x} \right)}_{\mathbf{\min}}\mathbf{= -}\frac{\mathbf{1}}{\mathbf{e}}$，得出$\mathbf{f}\left( \mathbf{x} \right)\mathbf{\geq -}\frac{\mathbf{1}}{\mathbf{e}}\text{，}\mathbf{f}\left( \mathbf{e}^{\mathbf{- x}} \right)\mathbf{\geq -}\frac{\mathbf{1}}{\mathbf{e}}$，取等条件不同。得证$\mathbf{f}\left( \mathbf{x} \right)\mathbf{+}\mathbf{f}\left( \mathbf{e}^{\mathbf{- x}} \right)\mathbf{> -}\frac{\mathbf{2}}{\mathbf{e}}$。得证原式成立

不得不感叹部分题目用同构是真的强大啊

## 模拟题 若对任意，恒有，求实数a的取值范围


【解析】
这道题也是一眼看不出来同构的，还是进行简单的变换。$\mathbf{a}\left( \mathbf{e}^{\mathbf{\text{ax}}}\mathbf{+ 1} \right)\mathbf{\geq 2}\left( \mathbf{x +}\frac{\mathbf{1}}{\mathbf{x}} \right)\mathbf{\ln}\mathbf{x}\mathbf{\Rightarrow ax}\mathbf{e}^{\mathbf{\text{ax}}}\mathbf{+ ax \geq}\mathbf{x}^{\mathbf{2}}\mathbf{\ln}\mathbf{x}^{\mathbf{2}}\mathbf{+}\mathbf{\ln}\mathbf{x}^{\mathbf{2}}$，发现同构$\mathbf{f}\left( \mathbf{x} \right)\mathbf{=}\left( \mathbf{x + 1} \right)\mathbf{\ln}\mathbf{x}$，$\mathbf{f}\left( \mathbf{x} \right)$明显单调$\mathbf{\nearrow}$。所以$\mathbf{f}\left( \mathbf{e}^{\mathbf{\text{ax}}} \right)\mathbf{\geq f}\left( \mathbf{x}^{\mathbf{2}} \right)\mathbf{\Rightarrow}\mathbf{e}^{\mathbf{\text{ax}}}\mathbf{\geq}\mathbf{x}^{\mathbf{2}}$，参量分离$\mathbf{a \geq 2}\frac{\mathbf{\ln}\mathbf{x}}{\mathbf{x}}$。函数$\frac{\mathbf{\ln}\mathbf{x}}{\mathbf{x}}$最大值是$\frac{\mathbf{1}}{\mathbf{e}}$所以$\mathbf{a \geq}\frac{\mathbf{2}}{\mathbf{e}}
$

## 模拟题【2019武汉二调】已知函数


略

若关于x的不等式恒成立，求实数a的取值范围

【解析】
这题感觉和2020年新高考卷导数题有些类似。把参数放一边$\mathbf{e}^{\mathbf{x + 1}}\mathbf{- a}\mathbf{\ln}\mathbf{\text{ax}}\mathbf{+ a > 0 \Rightarrow}\mathbf{e}^{\mathbf{x + 1}}\mathbf{> a}\mathbf{\ln}\mathbf{\text{ax}}\mathbf{- a \Rightarrow x}\mathbf{e}^{\mathbf{x + 1}}\mathbf{> ax}\left( \mathbf{\ln}\mathbf{\text{ax}}\mathbf{- 1} \right)$，发现同构$\mathbf{g}\left( \mathbf{x} \right)\mathbf{= x}\mathbf{e}^{\mathbf{x + 1}}\mathbf{\Rightarrow g}\left( \mathbf{\ln}\mathbf{\text{ax}}\mathbf{- 1} \right)\mathbf{= ax}\left( \mathbf{\ln}\mathbf{\text{ax}}\mathbf{- 1} \right)$。函数$\mathbf{g}\left( \mathbf{x} \right)$明显单调$\mathbf{\nearrow}$。所以$\mathbf{g}\left( \mathbf{x} \right)\mathbf{> g}\left( \mathbf{\ln}\mathbf{\text{ax}}\mathbf{- 1} \right)\mathbf{\Rightarrow x >}\mathbf{\ln}\mathbf{\text{ax}}\mathbf{- 1}$。参量分离一下$\mathbf{x >}\mathbf{\ln}\mathbf{\text{ax}}\mathbf{- 1 \Rightarrow a <}\frac{\mathbf{e}^{\mathbf{x + 1}}}{\mathbf{x}}$通过简单求导得出，x\>0时，函数$\frac{\mathbf{e}^{\mathbf{x + 1}}}{\mathbf{x}}$最小值为$\mathbf{e}^{\mathbf{2}}$。得出a的范围时$\mathbf{0 < a <}\mathbf{e}^{\mathbf{2}}$

有兴趣的读者可以看看上面大题的标答，都是没有较好基础的同学写出来还是挺难的，同构对比放缩来说，放缩适用范围更大，但是同构更容易。对于那些基础不好，时间也不太多的同学来说能较短时间理解同构，但对考试大题能不能用同构也只能赌一把。。。
