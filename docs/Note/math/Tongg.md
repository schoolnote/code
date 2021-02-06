## 同构专题解析版

同构：两个函数可以转换为同一个母函数，如母函数$f(x) = \ln x + x - 1$，那我们可以把$f(x - 1) = \ln(x - 1) + x,f(e^{x}) = e^{x} + x - 1$称为同构

为什么学同构：同构本质是一种出题人的思路，2020年高考题国一，国二，新高考一都出现了同构，把握这种出题人思维，更容易看到题目的本质，大大的简化题目，做出一些本来没有能力做出来的题目

## 例题【1】a\>b\>1判断$e^{a} - e^{b}$与$\ln a - \ln b$大小

【解析】我们要探究$e^{a} - e^{b}\sim\ln a - \ln b$的关系，两边通过移项把同参数的放同一边，发现等同于探究$e^{a} - \ln a\sim e^{b} - \ln b$，关系式两边构造相同，那我们就可以构造$f(x) = e^{x} - \ln x$，通过函数单调性来判断$e^{a} - \ln a\sim e^{b} - \ln b$大小关系。$f^{’}(x) = e^{x} - \frac{1}{x}$，当$x > 1$时$f^{’}(x) > 0$，那原函数$f(x) \nearrow$，$a > b > 1 \Rightarrow f(a) > f(b) \Rightarrow e^{a} - \ln a > e^{b} - \ln b \Rightarrow e^{a} - e^{b} > \ln a - \ln b$

## 例题【2】求证$e^{x - 1} \geq \ln x + 1$

【解析】常规思路是通过移项构造函数判断单调性求最小值，基础好的就看出两组放缩。题目难道不大，但是还有下面这个思路化繁为简。$e^{x - 1} \geq \ln x + 1 \Rightarrow e^{x - 1} + (x - 1) \geq \ln x + x$，构造函数$f(x) = \ln x + x \Rightarrow f(e^{x - 1}) = e^{x - 1} + (x - 1)$，单调性$\ln x \nearrow ,x \nearrow \Rightarrow f(x) = \ln x + x \nearrow$那么就要求证$f(x) \geq f(e^{x - 1}) \Rightarrow x \geq e^{x - 1} \Rightarrow \ln x \geq x - 1$，这个证明就比原式简便许多

PS:具体怎么想到母函数的在后讲解

## 真题【2020全国Ⅰ•12】若$2^{a} + \log_{2}a = 4^{b} + 2\log_{4}b$，则（ ）

$A、a > 2b$ $B、a < 2b$

$C、a > b^{2}$ $D、a < b^{2}$

【解析】$2^{a} + \log_{2}a = 4^{b} + 2\log_{4}b \Rightarrow = - 1$划线部分构造相同，构造$f(x) = 2^{x} + \log_{2}x$，判断函数单调性$2^{x} \nearrow ,\log_{2}x \nearrow \Rightarrow f(x) = 2^{x} + \log_{2}x \nearrow$，$f(a) - f(2b) = - 1 < 0 \Rightarrow f(a) < f(2b) \Rightarrow a < 2b$故选B

## 真题【2020 全国Ⅱ•11】若$2^{x} - 2^{y} < 3^{- x} - 3^{- y}$，则（
）（提示：如例题【1】）

$A、\ln(y - x + 1) > 0$
$B、\ln(y - x + 1) < 0$

$C、\ln\left| x - y \right| > 0$ $D、\ln\left| x - y \right| < 0$

【解析】和例题1解法基本一样$2^{x} - 2^{y} < 3^{- x} - 3^{- y} \Rightarrow 2^{x} - \frac{1}{3^{x}} < 2^{y} - \frac{1}{3^{y}}$，构造函数$f(x) = 2^{x} - \frac{1}{3^{x}}$，判断函数单调性$2^{x} \nearrow - \frac{1}{3^{x}} \nearrow \Rightarrow f(x) = 2^{x} - \frac{1}{3^{x}} \nearrow$，那么$f(x) < f(y) \Rightarrow x < y \Rightarrow y - x + 1 > 1 \Rightarrow \ln(y - x + 1) > 0$，故答案是A

## 真题【2020全国Ⅱ•11】已知函数$f(x) = ae^{x - 1} - \ln x + \ln a$
（1）略

（2）若$f(x) \geq 1$，求a的取值范围、

【解析】标答给出来的时分三类讨论，但出题人的思路却很简单。这样简单的转换：

$$ae^{x - 1} - \ln x + \ln a \geq 1 \Rightarrow ae^{x - 1} + \ln a \geq \ln x + 1 \Rightarrow e^{x - 1 + \ln a} + x - 1 + \ln a \geq \ln x + x$$

然后就发现同构$f(x) = \ln x + x \Rightarrow f(e^{x - 1 + \ln a}) = e^{x - 1 + \ln a} + x - 1 + \ln a$，函数单调性$\ln x \nearrow ,x \nearrow \Rightarrow f(x) = \ln x + x \nearrow$，所以$f(e^{x - 1 + \ln a}) \geq f(x) \Rightarrow e^{x - 1 + lna} \geq x$，求参数a的取值就参量分离$e^{x - 1 + \ln a} \geq x \Rightarrow a \geq \frac{x}{e^{x - 1}}$。设函数$g(x) = \frac{x}{e^{x - 1}}\text{那么}g^{'}(x) = \frac{{(1 - x)e}^{x - 1}}{e^{2x - 2}}\text{当}x > 1\text{时，}g(x) \swarrow ;\text{当}0 < x < 1\text{时，}g(x) \nearrow$。所以$x = 1\text{时}g(1) = 1\text{时最大值。恒成立条件}a \geq {g(x)}_{\max}$得出$a \geq 1$

### 模拟题1
已知$\alpha e^{\alpha} = e^{3}$，$\beta(\ln\beta - 1) = e^{4}$，求$\alpha\beta =$

【解析】这道题其实是很简单的同构发现同构时发现有ln套一个ln导致很多人放弃，我们把两个等式两边取对数

$\alpha e^{\alpha} = e^{3} \Rightarrow \ln\alpha + \alpha = 3$

$\beta\ln(\beta - 1) = e^{4} \Rightarrow \ln(ln\beta-1) +\ln\beta-1 = 3$

发现同构$f(x) = \ln x + x$，函数单调，所以$f(\alpha) = f(\ln\beta - 1) \Rightarrow \alpha = \ln\beta - 1$代入式$\ln\alpha + \ln\beta - 1 = 3 \Rightarrow \ln\text{αβ} = 4 \Rightarrow \alpha\beta = e^{4}$。

### 模拟题2 题目：略（1）略

2.  求证$x > 0\text{时，}(e^{x} - 1)\ln(x + 1) > x^{2}$

【解析】$(e^{x} - 1)\ln(x + 1) > x^{2} \Rightarrow \frac{\ln(x + 1)}{x} > \frac{x}{(e^{x} - 1)}$，构造$f(x) = \frac{x}{(e^{x} - 1)} \Rightarrow f(\ln(x + 1)) = \frac{\ln(x + 1)}{x}$，判断单调性$f^{'}(x) = \frac{(1 - x)e^{x} - 1}{(e^{x} - 1)^{2}}$，当x\>0时$f^{'}(x) \leq 0$，$f(x) \searrow$。所以$f(\ln(x + 1)) > f(x) \Rightarrow \ln{(x + 1) < x}$。即证明$\ln{(x + 1) < x}$就证明题目。构造$g(x) = \ln{(x + 1) - x}\text{，}{x > 0\text{时}g}^{'}(x) = \frac{1}{x + 1} - 1 < 0\text{，所以函数在}(\text{0,+∞})\text{递减，}g(x) < g(0) \Rightarrow \ln{(x + 1) - x < 0}$。原式得证

我们发现上面的题目中大多离不开对数和指数的转换，同构的题目中，都离不开下面几种关系。

$$f(x) = \ln x + x \Rightarrow f(e^{x}) = e^{x} + x\text{，}f(x)\text{在}(\text{0,+∞}) \nearrow$$

$$f(x) = x\ln x \Rightarrow f(x) = xe^{x}\text{，}f(x)\text{在}(\text{0,+∞}) \nearrow$$

$$f(x) = \frac{\ln x}{x} \Rightarrow f(e^{x}) = \frac{x}{e^{x}}\text{，}f(x)\text{在}(\text{0,+∞}) \nearrow$$

$$f(x) = x - \ln x - 1 \Rightarrow f(e^{x}) = e^{x} - x - 1\text{，}f(x)\text{在}(\text{0,+∞}) \nearrow$$

$$f(x) = \frac{\ln(x + 1)}{x} \Rightarrow f(e^{x} - 1) = \frac{x}{e^{x} - 1}\text{，}f(x)\text{在}(\text{0,+∞}) \searrow$$

......

下面的题目有些难度但是用同构的方法来写就简单易懂

### 模拟题【炎德•英才大联考长郡中学2021届高三月考卷（二）•21】已知函数$f(x) = e^{x - a} - x\ln x - (a - 1)x - 1$，$a \in R$，e为自然对数底数

1.  略

2.  讨论$f(x)$的极值点个数

【解析】要讨论极值点个数，那先把函数进行求导$f^{'}(x) = e^{x - a} - \ln x - a$，当$f^{'}(x) = 0\text{时就有可能为极值点}$。$e^{x - a} - \ln x - a = 0 \Rightarrow e^{x - a} + x - a = \ln x + x$，发现同构$g(x) = \ln x + x \Rightarrow g(e^{x - a}) = e^{x - a} + x - a$，所以$g(x) = g(e^{x - a}) \Rightarrow x = e^{x - a} \Rightarrow \ln x = x - a$，构造函数$h(x) = \ln x - x + a$，讨论原函数的极值点个数等同于讨论$h(x)$零点个数。易证明出$0 < a \leq 1$时无极值点，当$a > 1$时有两个极值点。

### 模拟题 求证：对一切，有

【解析】这题乍一看不好同构，但是两边两边同乘x就会发现同构，$x\ln x > \frac{x}{e^{x}} - \frac{2}{e}$，发现同构$f(x) = x\ln x \Rightarrow f(e^{- x}) = - \frac{x}{e^{x}}$，发现符号相反那我们就减过去$f(x) + f(e^{- x}) > - \frac{2}{e}$。简单求导发现${f(x)}_{\min} = - \frac{1}{e}$，得出$f(x) \geq - \frac{1}{e}\text{，}f(e^{- x}) \geq - \frac{1}{e}$，取等条件不同。得证$f(x) + f(e^{- x}) > - \frac{2}{e}$。得证原式成立

不得不感叹部分题目用同构是真的强大啊

### 模拟题 若对任意，恒有，求实数a的取值范围

【解析】这道题也是一眼看不出来同构的，还是进行简单的变换。$a(e^{\text{ax}} + 1) \geq 2(x + \frac{1}{x})\ln x \Rightarrow axe^{\text{ax}} + ax \geq x^{2}\ln x^{2} + \ln x^{2}$，发现同构$f(x) = (x + 1)\ln x$，$f(x)$明显单调$\nearrow$。所以$f(e^{\text{ax}}) \geq f(x^{2}) \Rightarrow e^{\text{ax}} \geq x^{2}$，参量分离$a \geq 2\frac{\ln x}{x}$。函数$\frac{\ln x}{x}$最大值是$\frac{1}{e}$所以$a \geq \frac{2}{e}
$

### 模拟题【2019武汉二调】已知函数

1.  略

2.  若关于x的不等式恒成立，求实数a的取值范围

【解析】这题感觉和2020年新高考卷导数题有些类似。把参数放一边$e^{x + 1} - a\ln\text{ax} + a > 0 \Rightarrow e^{x + 1} > a\ln\text{ax} - a \Rightarrow xe^{x + 1} > ax(\ln\text{ax} - 1)$，发现同构$g(x) = xe^{x + 1} \Rightarrow g(\ln\text{ax} - 1) = ax(\ln\text{ax} - 1)$。函数$g(x)$明显单调$\nearrow$。所以$g(x) > g(\ln\text{ax} - 1) \Rightarrow x > \ln\text{ax} - 1$。参量分离一下$x > \ln\text{ax} - 1 \Rightarrow a < \frac{e^{x + 1}}{x}$通过简单求导得出，x\>0时，函数$\frac{e^{x + 1}}{x}$最小值为$e^{2}$。得出a的范围时$0 < a < e^{2}$

有兴趣的读者可以看看上面大题的标答，都是没有较好基础的同学写出来还是挺难的，同构对比放缩来说，放缩适用范围更大，但是同构更容易。对于那些基础不好，时间也不太多的同学来说能较短时间理解同构，但对考试大题能不能用同构也只能赌一把。。。
