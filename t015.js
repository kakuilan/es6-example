// Generator生成器/遍历器,function关键字后带*,且内部使用yield语句

function * helloWorldGenerator () {
  yield 'hello'
  yield 'world'
  return 'ending'
}

// 返回一个遍历器,每执行一次next,逐次返回一个yield的值
var hw = helloWorldGenerator()
var res = null

// { value: 'hello', done: false }
res = hw.next()
console.log(res)

// { value: 'world', done: false }
res = hw.next()
console.log(res)
// { value: 'ending', done: true }
res = hw.next()
console.log(res)

// { value: undefined, done: true }
res = hw.next()
console.log(res)
