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
    - 用var function声明的全局变量会挂载在顶层对象(windows)上, let const class 声明的全局变量不属于顶层对象的属性
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
            - 暂时性死去的出现标志着typeof不再是一个百分比安全的操作: /src/typeof.js
            - 暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。
        - 在for循环中使用let时, 有两个作用域, 父作用域为设置循环变量的那个部分, 而循环体内部是一个单独的子作用域, example: /src/for-let.js
        - 函数是否可以在块级作用域声明
            - ES5规定, 函数只能在顶层作用域和函数作用域内声明, 不可以在块级作用域声明, 但是浏览器为了兼容旧代码并没有遵守该规定
            - ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。(从这儿引出面试题  src/interview.js)
    - const 和 let 的不同点
        - const 声明后必须立马赋值
        - const 声明之后不可修改, const所保证的是变量指向的内存地址所保存的数据不得更改, 对于简单类型的数据(数值, 字符串, 布尔值), 值就保存在变量指向的内存地址, 因此等同于常量, 但对于复杂类型的数据(主要是对象和数组), 变量指向的内存地址实际上只是一个指向实际数据的指针, const只能保证这个指针是固定的, 至于它的数据结构是不是可变的就完全不能控制了, 因此讲一个对象声明为常量是要异常小心
        - 如果真的想将对象冻结, 应该使用 Object.freeze方法 如下
        ```js
        const foo = Object.freeze({});
        // 常规模式下 下一行不起作用
        // 严格模式下, 下一行报错
        foo.prop = 123;
        ```
        - 除了将对象本身冻结, 还应该将对象的属性也冻结, 如下:
        ```js
        var constantize = (obj) => {
        Object.freeze(obj);
        Object.keys(obj).forEach( (key, i) => {
            if ( typeof obj[key] === 'object' ) {
            constantize( obj[key] );
            }
        });
        };
        ```
    - 获取顶层对象
    ```js
    // 方法一
    (typeof window !== 'undefined'
    ? window
    : (typeof process === 'object' &&
        typeof require === 'function' &&
        typeof global === 'object')
        ? global
        : this);

    // 方法二
    var getGlobal = function () {
    if (typeof self !== 'undefined') { return self; }
    if (typeof window !== 'undefined') { return window; }
    if (typeof global !== 'undefined') { return global; }
    throw new Error('unable to locate global object');
    };
    ```
6. 解构赋值: ES6允许按照一定格式从数组和对象中提取值, 对变量进行赋值, 这被称为解构赋值
    - 数组(可便利解构)的解构赋值
        - 只要左右两边结构相同, 左边的变量就会被赋予对应的值
        - 如果结构不成功, 变量的值 等于 undefined
        - 不完全解构, 即等号左边的模式只匹配一部分等号右边的模式, 这种情况下, 解构依然成功
        - 如果等号右边的不是可便利的结构(Iterator), 那么将会报错, 只要等号右边的执行结果为具有 `Iterator` 接口, 就可以使用解构赋值, 比如 `generator`函数
        - 解构赋值允许赋予默认值, 只有当前的对象严格等于`undefined`才会赋予默认值
    - 对象的解构赋值
        - 左边的属性对应右边的属性, 左边的属性值为新声明的变量名称, 对应右边的属性值
        - 如果解构失败, 变量的值等于 undefined
        - 解构赋值可以找到原型链上的属性
        - 如果解构模式是嵌套的对象，而且子对象所在的父属性不存在，那么将会报错。
        - 注意
            - 如要要将一个已经声明的对象用于解构赋值, 必须非常小心
            ```js
            let x;
            {x} = {x:1} //报错  因为 {x} 被理解为一个代码块
            // 正确的写法
            ({x} = {x:1}); // 只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题。
            ```
            - 可以对数组进行对象属性的解构赋值
    - 字符串也可以解构赋值, 按照数组方式取出下标对应的值, 按照对象方式取出length
    - 对数值和布尔值进行结构赋值, 会先进行装箱操作, 将数值和布尔值转换为包装类型, 声明的变量需要时包装类型的属性, 由于 undefined和null无法转换为对象, 所以无法进行解构赋值, 会报错
    ```js
    let {toString: s} = 123;
    s === Number.prototype.toString; // true
    ```
    - 函数参数也可以解构赋值
- 字符串的扩展
    - [字符串的unicode表示法](https://es6.ruanyifeng.com/#docs/string), 需要的时候拿来用
        1. 允许用`\uxxxx`形式表示一个字符, 其中`xxxx`表示字符的unicode编码
        ```js
        // 编译前
        const stra = `\u0061`;
        console.log(stra);
        // 编译后
        "use strict";
        var stra = "a";
        console.log(stra);
        ```
        2. 上述方式只能用来描述`\u0000-\uFFFF`之间的字符, 超出这个范围的字符必须用双字节表示
        3. 超出长度的字符可以用花括号将码点包起来, 也可以正常展示
        4. js总共有几种方式表示一个字符
        ```js
        '\z' === 'z'  // true
        '\172' === 'z' // true
        '\x7A' === 'z' // true
        '\u007A' === 'z' // true
        '\u{7A}' === 'z' // true
        ```
    - 字符串的遍历器接口
    ```js
    for (let codePoint of 'foo') {
        console.log(codePoint)
    }
    // "f"
    // "o"
    // "o"
    ```
        - 除了便利字符串, 这个遍历器最大的优点是可以 `识别0xFFFF`的码点, 传统for无法循环识别这样的码点
    - 直接输入 `U+2028` 和 `U+2029`, ES6字符串允许直接输入字符, 以及字符的转移形式, 举例来说, '中'的Unicode码点是 `U+4e2d`, 你可以直接在字符串里输入这个汉子也可以输入他的转移形式`\u4e2d`, 两者是等价的: `'中' === '\u4e2d`
        - 规定不能在字符串中直接使用的五个字符, 只能使用转义形式: 
            - U+005C: 反斜杠
            - U+000D: 回车
            - U+2028: **行分隔符**
            - U+2029: **段分隔符**
            - U+000A: 换行符
        - 这个规定本身没有问题, 但是麻烦在于 JSON格式允许字符串里面直接使用 `U+2028` 和 `U+2029`, 并且标准已经冻结无法修改了, 所以 `ES2019` 允许JavaScript允许字符串直接输入`U+2028`和`U+2029`
        ```js
        // 假设服务器返回的数据中含有 '\u2028' 或者 '\u2029'
        const res = '\u2029';
        JSON.parse(res); // 会直接报错
        ```
        - 所以 `ES2019` 允许JavaScript允许字符串直接输入`U+2028`和`U+2029`
        - tips: 模板字符串现在支持直接输入这两个字符, 另外, **正则依然不允许直接输入这两个字符**, 这是没有问题的, 因为JSON本来就不允许直接包含正则表达式
    - JSON.stringify的改造
         - 根据标准, JSON数据必须是UTF-8标准, 但是现在的JSON.stringify方法可能返回不符合UTF-8标准的字符串
         - 解析: 具体来说, UTF-8规定, 0xD800 到 0xDFFFF之间的码点不能单独使用, 必须配对使用, 比如，\uD834\uDF06是两个码点，但是必须放在一起配对使用，代表字符𝌆。这是为了表示码点大于0xFFFF的字符的一种变通方法。单独使用\uD834和\uDFO6这两个码点是不合法的，或者颠倒顺序也不行，因为\uDF06\uD834并没有对应的字符。`JSON.stringify的问题在于他有可能返回0xD800到0xDFFFF之间的单个码点`
         ```js
            JSON.stringify('\u{D834}'); // "\u{D834}"
         ```
         - 为了解决这个问题, ES2019改变了JSON.stringify的行为, 如果遇到0
         xD800 到 0XDFFFF之间的单个码点, 或者存在不匹配的配对形式, 他会返回转义字符串, 留给应用自己决定下一步处理
    - 模板字符串: 用反引号标识, 可以定义多行字符串, 也可以嵌入变量, 表达式, 对象属性, 调用函数, 如果内容出现反引号, 需要转义符
        - 如果通过 `${}` 嵌入的表达式或变量函数最终的执行结果不是字符串, 那会调用最终执行结果身上的`toString`方法
    - 标签模板, 如果模板字符串紧跟在一个函数名称后面, 该函数将被调用来处理这个模板字符串alert\`123\` === alert(123)
        - 如果模板字符串中含有变量, 就不仅仅是简单调用了, 如下: 
        ```js
        let a = 5;
        let b = 10;

        tag`Hello ${ a + b } world ${ a * b }`;
        // 等同于
        tag(['Hello ', ' world ', ''], 15, 50);
        // ----
        function tag(stringArr, value1, value2){
        // ...
        }

        // 等同于`

        function tag(stringArr, ...values){
        // ...
        }
        ```
        - 可以用于过来HTML字符串, 多语言转换
---
```sh
git publish -- -m 'commit content' # 提交代码
```

[npm scripts的技巧](https://baijiahao.baidu.com/s?id=1621434786186441040&wfr=spider&for=pc)
---
#### [babel基本使用](https://www.babeljs.cn/docs/usage)
1. 下载依赖
```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```
2. 在不进行任何插件和预设的操作前使用命令 `npx babel src --out-dir lib` 输出之后, lib文件夹下的文件和源文件完全一致
3. 相关配置
```
// 单个插件的配置
npm install --save-dev @babel/plugin-transform-arrow-functions
npx babel src -- --plugins=@babel/plugin-transform-arrow-functions
// 使用一组预先设定的插件  preset
yarn add -D @babel/preset-env
yarn babel -- --presets=@babel/env
// 通过配置文件
// 新建 babel.config.js 内容如下
const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
    },
  ],
];

module.exports = { presets };
```
4. 配置详情  [babel官网推荐配置](https://github.com/babel/babel/blob/master/babel.config.js)
    - 读取环境变量配置
    ```
        yarn add -D cross-env // 安装依赖
        npx cross-env env=prod yarn babel // 运行
        // 读取
        console.log(process.env.env)
    ```
    - [多种配置方式](https://www.babeljs.cn/docs/configuration)
    - [babel自定义plugins](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/README.md)
    - plugins 是从前往后执行
    - 自定义preset, preset的执行顺序从后往前, 为了确保向后兼容
