// es6增强的对象方法,直接允许写入变量和函数,作为对象的属性和方法

var birth = '2019'

var Person = {
  name: '张三',

  // 等同于 birth:birth
  birth,

  // 等同于hello:function()...
  hello () {
    console.log('我的名字是', this.name)
  }

}
