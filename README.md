# es6-learn
es6-learn
知识导图
![image](https://user-gold-cdn.xitu.io/2019/10/8/16daaaaa5eef3fac?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
1. tips: 
    - [查看浏览器对各个api的支持](https://kangax.github.io/compat-table/es6/)
    - [node如何查看](https://es6.ruanyifeng.com/#docs/intro)
2. es6是什么
    ES6是ECMA为JavaScript制定的第6个标准版本，相关历史可查看此章节《ES6-ECMAScript6简介》。
    标准委员会最终决定，标准在每年6月正式发布并作为当年的正式版本，接下来的时间里就在此版本的基础上进行改动，直到下一年6月草案就自然变成新一年的版本，这样一来就无需以前的版本号，只要用年份标记即可。ECMAscript 2015是在2015年6月发布ES6的第一个版本。以此类推，ECMAscript 2016是ES6的第二个版本、 ECMAscript 2017是ES6的第三个版本。ES6既是一个历史名词也是一个泛指，含义是5.1版本以后的JavaScript下一代标准，目前涵盖了ES2015、ES2016、ES2017、ES2018、ES2019。
    所以有些文章上提到的ES7(实质上是ES2016)、ES8(实质上是ES2017)、ES9(实质上是ES2018)、ES10(实质上是ES2019)，实质上都是一些不规范的概念。从ES1到ES6，每个标准都是花了好几年甚至十多年才制定下来，你一个ES6到ES7，ES7到ES8，才用了一年，按照这样的定义下去，那不是很快就ES20了。用正确的概念来说ES6目前涵盖了ES2015(ES6.0)、ES2016(ES6.1)、ES2017(ES6.2)、ES2018(ES6.3)、ES2019(ES6.4)。
    ![image](https://user-gold-cdn.xitu.io/2019/10/8/16daaaaa5f056a42?imageslim)
3. 更新内容如何查看(分类)
    - 表达式: 声明, 解构赋值
    - 内置对象: 字符串扩展, 数值扩展, 对象扩展, 数组扩展, 函数扩展, 正则扩展, Symbol, Set, Map, Proxy, Reflect
    - 语句与运算: Class, Module, Iterator
    - 异步编程: Promise, Generator, Async
4. ES2015- 刚工作的ES6
![image](https://user-gold-cdn.xitu.io/2019/10/8/16daac022b77c8da?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
5. 声明
    - const声明常量, let声明变量
    - 作用域
        - 全局作用域
        - 函数作用域: function(){}
        - 块级作用域: {}
    - 作用范围: var在所在全局作用域或者函数作用域内生效, const和let在其所在的全局, 函数, 块级作用域内生效
    - 赋值使用
        - const声明常量后必须马上赋值
        - let声明变量后可以马上赋值, 也可以使用时赋值
    - 声明方法: var, const, let, function, class, import
    - 重难点
        - 不允许重复声明
        - 未定义使用就会报错: const 和 let, class不存在变量提升
        - 暂时性死区: 只要块级作用域内存在const 和 let 以及 class, 所声明的常量和变量就绑定此区域, 不再受外部影响
6. 

