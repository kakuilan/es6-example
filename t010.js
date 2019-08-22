// 扩展运算符(...),类似rest参数的逆运算,即将一个数组转换为用逗号分隔的参数序列

function push (array, ...items) {
  array.push(...items)
}

function add (x, y) {
  return x + y
}

var nums = [4, 58]
var res1 = add(...nums)

var arr = []
push(arr, ...nums)

console.log(res1, arr)

// es5
res2 = Math.max.apply(null, [14, 3, 77])

// es6
res3 = Math.max(...[14, 3, 77])

// 等同于
res4 = Math.max(14, 3, 77)
console.log(res2, res3, res4)
