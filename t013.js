// es6箭头函数返回对象
// 由于大括号被解释为代码块,因而若箭头函数返回一个对象,必须在对象外面加上括号

var getTempItem = id => ({ id: id, name: 'Temp' })

console.log(getTempItem(12))

// 箭头函数还可以简化回调函数,如

// 正常函数写法
var arr = [1, 2, 5, 3, 4]
arr.map(function (x) {
  return x * x
})
// 箭头函数写法
arr.map(x => x * x)

// 正常写法
var res1 = arr.sort(function (a, b) {
  return a - b
})
// 箭头函数写法
var res2 = arr.sort((a, b) => a - b)
console.log(res1, res2)
