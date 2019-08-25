// es6箭头函数

// 使用=> =>箭头定义函数,如
var f1 = v => v

// 等同于
var f2 = function (v) {
  return v
}

// 定义没有参数的函数,如
var f3 = () => 5

// 等同于
var f4 = function () {
  return 5
}

// 定义有多个参数的函数,如
var f5 = (num1, num2) => num1 + num2

// 等同于
var f6 = function (num1, num2) {
  return num1 + num2
}

var res1 = f1(1)
var res2 = f2(1)
console.log(res1, res2)

var res3 = f3()
var res4 = f4()
console.log(res3, res4)

var res5 = f3(1, 2)
var res6 = f4(1, 2)
console.log(res5, res6)
