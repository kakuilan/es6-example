// symbol作为类的属性名
const sy = Symbol('key1')

// 写法1
const syObj1 = {}
syObj1[sy] = 'kk'

// 写法2
const syObj2 = {
  [sy]: 'vv'
}
console.log(syObj1, syObj2)

// Symbol 作为对象属性名时不能用.运算符，要用方括号
console.log(syObj1[sy]) // ok
console.log(syObj2.sy) // undefined
