// Generator若不用yield语句,就成了一个暂缓执行函数,必须手工调用next方法

function * f () {
  console.log('执行了')
}

var generator = f()

setTimeout(function () {
  generator.next()
}, 1500)
