// const局部作用域
var a = []
for (var i = 0; i < 10; i++) {
  // 使用var会发生"变量提升"
  var c = i
  a[i] = function () {
    console.log(c)
  }
}
// 输出9
a[6]()

var b = []
for (var j = 0; j < 10; j++) {
  const d = j
  b[j] = function () {
    console.log(d)
  }
}
// 输出6
b[6]()
