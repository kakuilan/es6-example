// es6箭头函数

// 使用=>箭头定义函数,如
var f1 = v => v

// 等同于
var f2 = function (v) {
  return v
}

var res1 = f1(1)
var res2 = f2(1)
console.log(res1, res2)
