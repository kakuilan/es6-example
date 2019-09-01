// es6 class类

// 定义类
class Point {
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  toString () {
    return '(' + this.x + ', ' + this.y + ')'
  }
}

// 继承类,使用extends
class ColorPoint extends Point {
  constructor (x, y, color) {
    super(x, y) // 等同于super.constructor(x,y)
    this.color = color
  }

  toString () {
    return this.color + ' ' + super.toString()
  }
}

// 基类
var point = new Point(2, 3)
console.log(point.toString())

// 子类
var child = new ColorPoint(4, 5, 'red')
console.log(child.toString())
