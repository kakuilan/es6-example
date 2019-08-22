// es6允许为函数的参数设置默认值

function Point (x = 0, y = 1) {
  this.x = x
  this.y = y
}

var p = new Point()
console.log(p)
