// es6字符串新方法includes(), startsWith(), endsWith()
var s = 'Hello world!'

var res1 = s.startsWith('Hello')
var res2 = s.startsWith('hello')

var res3 = s.endsWith('!')

// 非s.contains
var res4 = s.includes('o')

console.log(res1, res2, res3, res4)
