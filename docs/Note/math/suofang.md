---
title: 常用的放缩和证明
categories:
 - 数学
tags:
 - 解题方法
author: 'Nie'
isShowComments: true
---


a, 

$e^{x} \geq x + 1$取等条件$x = 0$

『证明』构造$f\left( x \right) = \frac{x + 1}{e^{x}}$，$f'\left( x \right) = - \frac{x}{e^{x}}$.

$x > 0$时$f'\left( x \right) < 0 \Rightarrow f\left( x \right) \searrow$，$x < 0$时$f'\left( x \right) > 0 \Rightarrow f\left( x \right) \nearrow$

$f\left( x \right) \leq {f\left( x \right)}_{\max} = f\left( 0 \right) = 1$即$\frac{x + 1}{e^{x}} \leq 1 \Rightarrow$
$e^{x} \geq x + 1$.取等条件$x = 0$.



b,
$e^{x} \geq \frac{1}{2}x^{2} + x + 1\left( x \geq 0 \right)$取等条件$x = 0$

『证明』构造$f\left( x \right) = \frac{\frac{1}{2}x^{2} + x + 1}{e^{x}}$，$f'\left( x \right) = - \frac{\frac{1}{2}x^{2}}{e^{x}}$

$x > 0$时$f'\left( x \right) < 0 \Rightarrow f\left( x \right) \searrow$，$f\left( x \right) \leq {f\left( x \right)}_{\max} = f\left( 0 \right) = 1$

即$\frac{\frac{1}{2}x^{2} + x + 1}{e^{x}} \leq 1 \Rightarrow e^{x} \geq \frac{1}{2}x^{2} + x + 1$取等条件$x = 0$.



c, 

$e^{x} \geq x^{2} + 1\left( x \geq 0 \right)$取等条件$x = 0$

『证明』构造$f\left( x \right) = \frac{x^{2} + 1}{e^{x}}$，$f'\left( x \right) = \frac{2x - x^{2} - 1}{e^{x}} = - \frac{\left( x - 1 \right)^{2}}{e^{x}}$

$x > 0$时$f'\left( x \right) < 0 \Rightarrow f\left( x \right) \searrow$，$f\left( x \right) \leq {f\left( x \right)}_{\max} = f\left( 0 \right) = 1$

即$\frac{x^{2} + 1}{e^{x}} \leq 1 \Rightarrow e^{x} \geq x^{2} + 1$取等条件$x = 0$.



d,
$e^{x} \geq \text{ex} + \left( x - 1 \right)^{2}\left( x \geq 0 \right)$取等条件$x = 0$

『证明』构造$f\left( x \right) = \frac{\text{ex} + \left( x - 1 \right)^{2}}{e^{x}}$，$f'\left( x \right) = \frac{- x^{2} + \left( 4 - e \right)x + e - 3}{e^{x}} = \frac{\left( x + e - 3 \right)\left( x - 1 \right)}{e^{x}}$

$0 \leq x \leq 3 - e$和$x \geq 1$时，$f\left( x \right) \searrow$，$3 - e \leq x \leq 1$时，$f\left( x \right) \nearrow$

${f\left( x \right)}_{\max} = f\left( 0 \right) = f\left( 1 \right) = 1$，即$\frac{\text{ex} + \left( x - 1 \right)^{2}}{e^{x}} \leq 1 \Rightarrow e^{x} \geq \text{ex} + \left( x - 1 \right)^{2}$

取等条件$x = 0$.



e,
$x - \frac{1}{2}x^{2} \leq \ln\left( x + 1 \right) \leq x\left( x \geq 0 \right)$取等条件$x = 0$

『证明』i, $\ln\left( x + 1 \right) \leq x$

构造$f\left( x \right) = \ln{\left( x + 1 \right) - x}$，$f'\left( x \right) = \frac{1}{x + 1} - 1$

$x > 0$时$f\left( x \right) \searrow$，$f\left( x \right) \leq f\left( 0 \right) = 0$,即$\ln\left( x + 1 \right) \leq x$.

ii, $x - \frac{1}{2}x^{2} \leq \ln\left( x + 1 \right)$

构造$f\left( x \right) = \ln\left( x + 1 \right) + \frac{1}{2}x^{2} - x$，$f'\left( x \right) = \frac{1}{x + 1} + x - 1$

$f'\left( x \right) = \frac{1}{x + 1} + x - 1 \geq 2\sqrt{\frac{1}{x + 1}\left( x + 1 \right)} - 2 = 0$,$f\left( x \right) \nearrow$

即$f\left( x \right) \geq f\left( 0 \right) = 0 \Rightarrow x - \frac{1}{2}x^{2} \leq \ln\left( x + 1 \right)$.

f, 

$\ln x \leq \frac{x}{e}\left( x > 0 \right)$取等条件$x = e$

『证明』构造$f\left( x \right) = \ln x - \frac{x}{e}$，$f'\left( x \right)$=$\frac{1}{x} - \frac{1}{e}$

$x > e$时，$f\left( x \right) \searrow$，$x < e$时，$f\left( x \right) \nearrow$，$f\left( x \right) \leq {f\left( x \right)}_{\max} = f\left( e \right) = 0$

即$\ln x \leq \frac{x}{e}\left( x > 0 \right)$，取等条件$x = e$.



g,

$\ln x \leq x^{2} - x$，取等条件$x = 1$

『证明』构造$f\left( x \right) = \ln x - x^{2} + x$，$f'\left( x \right) = \frac{1}{x} - 2x + 1$

$x > 1$时，$f\left( x \right) \searrow$，$x < 1$时，$f\left( x \right) \nearrow$，$f\left( x \right) \leq {f\left( x \right)}_{\max} = f\left( 1 \right) = 0$

即$\ln x \leq x^{2} - x$，取等条件$x = 1$.



h, 

$\sin x \leq x\left( x \geq 0 \right)$取等条件$x = 0$

『证明』构造$f\left( x \right) = \sin x - x$，$f'\left( x \right) = \cos x - 1$

$f'\left( x \right) \leq 0 \Rightarrow f\left( x \right) \searrow$，$f\left( x \right) \leq {f\left( x \right)}_{\max} = f\left( 0 \right) = 0$

即$\sin x \leq x$，取等条件$x = 0$.
