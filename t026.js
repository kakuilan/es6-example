// symobol
const sy = Symbol('kk')
console.log(sy)
// eslint-disable-next-line no-unused-expressions
typeof (sy)

// 相同参数 Symbol()返回的值不相等
const sy1 = Symbol('kk')
console.log(sy === sy1)
