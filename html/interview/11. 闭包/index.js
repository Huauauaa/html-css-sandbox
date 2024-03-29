/*
 company: shangguigu
 author: yanzhiyong
 content: 闭包
*/

/*
 * 理解：什么是闭包?
 *   1. 密闭的容器，类似于set，map容器，存储数据的
 *   2. 闭包是一个对象，存放数据的格式： key: value
 * 形成的条件：
 *   1. 函数嵌套
 *   2. 内部函数引用外部函数的局部变量
 * 闭包的优点：
 *   延长外部函数局部变量的生命周期
 * 闭包的缺点：
 *   容易造成内存泄漏
 * 注意点：
 *   1. 合理的使用闭包
 *   2. 用完闭包要及时清除(销毁)
 * */

// function fun() {
//   var count = 1;
//   function fun2() {
//     console.log(count);
//   }
//
//   fun2();
// }
//
// fun();

// 闭包的应用场景
// function fun() {
//   var count = 1;
//   return function () {
//     count++;
//     console.log(count);
//   }
// }
//
// var fun2 = fun();
// fun2(); // 2
// fun2(); // 3
//

/*
   说说它们的输出情况
   */

function fun(n, o) {
  // var n = 1, o;
  console.log(o);
  return {
    fun: function (m) {
      // var m = 1;
      return fun(m, n);
    },
  };
}
var a = fun(0);
a.fun(1);
a.fun(2);
a.fun(3); //undefined,0,0,0

var b = fun(0).fun(1).fun(2).fun(3).fun(50).fun(22); //undefined,0,1,2,3,50

var c = fun(0).fun(1);
c.fun(2);
c.fun(3); //undefined,0,1,1
