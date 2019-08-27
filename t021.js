// Promise.resolve可将对象转换为Promise对象
// 若resolve方法的参数不是具有then方法的对象(又称为thenable对象),则返回一个新的Promise对象,且它的状态为resolved

// p的状态为fulfilled,它的回调函数会立即执行
var p = Promise.resolve('Hello')
p.then(function (s) {
  console.log(s)
})
