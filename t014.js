// es6的this绑定定义时所在的对象,而不是使用时所在的对象

var handler = {
  id: '1234',
  init: function () {
    document.addEventListener('click', event => this.doSomething(event.type), false)
  },
  doSomething: function (type) {
    console.log('Handling ' + type + ' for ' + this.id)
  }
}
handler.init()
