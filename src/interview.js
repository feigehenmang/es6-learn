{
    console.log(a); // a(){}
    function a() {};
    a = 50;
}
console.log(a); 
{
    b = 50;

    function b() {}
}
console.log(b);
// 解析如下
// 这段代码如果经过babel转译执行会报错, a is not defined
// 但是直接饮用会输出ƒ a() {} 50
// example1: 
function f() {
    console.log('I am outside!');
}

(function () {
    if (false) {
        // 重复声明一次函数f
        function f() {
            console.log('I am inside!');
        }
    }
    console.log(f);
    f();
}());
// 解析如下
// 这段代码如果经过babel转译执行会报错, a is not defined
// 但是直接饮用会输出ƒ a() {} 50
// 是因为对于块级作用域内的函数声明, 浏览器实现和babel实现有所不同, 请看阮一峰es6入门: https://es6.ruanyifeng.com/#docs/let
/**
 * 首先es6规定 块级作用域内声明函数, 函数声明语句行为类似于let, 在块级作用域外不能引入
 * 如example所写, 若是按照es6规定走, 会报错, f is not defined
 * 但是实际上, 在es5中 会得到 I am inside
 * 在es6的[附录B]中规定, 浏览器实现可以不遵守上面规定, 有自己的行为方式: 
 *[附录B](http: //www.ecma-international.org/ecma-262/6.0/index.html#sec-block-level-function-declarations-web-legacy-compatibility-semantics)
 * 行为方式https: //stackoverflow.com/questions/31419897/what-are-the-precise-semantics-of-block-level-functions-in-es6
 * 1. 允许在块级作用域内声明函数。
 * 2. 函数声明类似于var， 会提升到当前块级作用域的父级作用域, 如果父级作用域是块级, 做一直往上, 知道找到函数作用域或者全局作用域
 * 3. 同时， 函数声明还会提升到所在的块级作用域的头部。
 * 带着这三条再看面试题
 * 
{
    function a() {};
    a = 50;
}
console.log(a); 
===
var a;
{
    function a() {};
    a = 50;
}
console.log(a);
*/