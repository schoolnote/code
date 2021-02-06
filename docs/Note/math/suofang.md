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

『证明』构造$f(x) = \frac{x + 1}{e^{x}}$，$f'(x) = - \frac{x}{e^{x}}$.

$x > 0$时$f'(x) < 0 \Rightarrow f(x) \searrow$，$x < 0$时$f'(x) > 0 \Rightarrow f(x) \nearrow$

$f(x) \leq {f(x)}_{\max} = f(0) = 1$即$\frac{x + 1}{e^{x}} \leq 1 \Rightarrow$
$e^{x} \geq x + 1$.取等条件$x = 0$.



b,
$e^{x} \geq \frac{1}{2}x^{2} + x + 1(x \geq 0)$取等条件$x = 0$

『证明』构造$f(x) = \frac{\frac{1}{2}x^{2} + x + 1}{e^{x}}$，$f'(x) = - \frac{\frac{1}{2}x^{2}}{e^{x}}$

$x > 0$时$f'(x) < 0 \Rightarrow f(x) \searrow$，$f(x) \leq {f(x)}_{\max} = f(0) = 1$

即$\frac{\frac{1}{2}x^{2} + x + 1}{e^{x}} \leq 1 \Rightarrow e^{x} \geq \frac{1}{2}x^{2} + x + 1$取等条件$x = 0$.



c, 

$e^{x} \geq x^{2} + 1(x \geq 0)$取等条件$x = 0$

『证明』构造$f(x) = \frac{x^{2} + 1}{e^{x}}$，$f'(x) = \frac{2x - x^{2} - 1}{e^{x}} = - \frac{(x - 1)^{2}}{e^{x}}$

$x > 0$时$f'(x) < 0 \Rightarrow f(x) \searrow$，$f(x) \leq {f(x)}_{\max} = f(0) = 1$

即$\frac{x^{2} + 1}{e^{x}} \leq 1 \Rightarrow e^{x} \geq x^{2} + 1$取等条件$x = 0$.



d,
$e^{x} \geq \text{ex} + (x - 1)^{2}(x \geq 0)$取等条件$x = 0$

『证明』构造$f(x) = \frac{\text{ex} + (x - 1)^{2}}{e^{x}}$，$f'(x) = \frac{- x^{2} + (4 - e)x + e - 3}{e^{x}} = \frac{(x + e - 3)(x - 1)}{e^{x}}$

$0 \leq x \leq 3 - e$和$x \geq 1$时，$f(x) \searrow$，$3 - e \leq x \leq 1$时，$f(x) \nearrow$

${f(x)}_{\max} = f(0) = f(1) = 1$，即$\frac{\text{ex} + (x - 1)^{2}}{e^{x}} \leq 1 \Rightarrow e^{x} \geq \text{ex} + (x - 1)^{2}$

取等条件$x = 0$.



e,
$x - \frac{1}{2}x^{2} \leq \ln(x + 1) \leq x(x \geq 0)$取等条件$x = 0$

『证明』i, $\ln(x + 1) \leq x$

构造$f(x) = \ln{(x + 1) - x}$，$f'(x) = \frac{1}{x + 1} - 1$

$x > 0$时$f(x) \searrow$，$f(x) \leq f(0) = 0$,即$\ln(x + 1) \leq x$.

ii, $x - \frac{1}{2}x^{2} \leq \ln(x + 1)$

构造$f(x) = \ln(x + 1) + \frac{1}{2}x^{2} - x$，$f'(x) = \frac{1}{x + 1} + x - 1$

$f'(x) = \frac{1}{x + 1} + x - 1 \geq 2\sqrt{\frac{1}{x + 1}(x + 1)} - 2 = 0$,$f(x) \nearrow$

即$f(x) \geq f(0) = 0 \Rightarrow x - \frac{1}{2}x^{2} \leq \ln(x + 1)$.

f, 

$\ln x \leq \frac{x}{e}(x > 0)$取等条件$x = e$

『证明』构造$f(x) = \ln x - \frac{x}{e}$，$f'(x)$=$\frac{1}{x} - \frac{1}{e}$

$x > e$时，$f(x) \searrow$，$x < e$时，$f(x) \nearrow$，$f(x) \leq {f(x)}_{\max} = f(e) = 0$

即$\ln x \leq \frac{x}{e}(x > 0)$，取等条件$x = e$.



g,

$\ln x \leq x^{2} - x$，取等条件$x = 1$

『证明』构造$f(x) = \ln x - x^{2} + x$，$f'(x) = \frac{1}{x} - 2x + 1$

$x > 1$时，$f(x) \searrow$，$x < 1$时，$f(x) \nearrow$，$f(x) \leq {f(x)}_{\max} = f(1) = 0$

即$\ln x \leq x^{2} - x$，取等条件$x = 1$.



h, 

$\sin x \leq x(x \geq 0)$取等条件$x = 0$

『证明』构造$f(x) = \sin x - x$，$f'(x) = \cos x - 1$

$f'(x) \leq 0 \Rightarrow f(x) \searrow$，$f(x) \leq {f(x)}_{\max} = f(0) = 0$

即$\sin x \leq x$，取等条件$x = 0$.
