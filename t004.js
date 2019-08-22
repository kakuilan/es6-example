// 字符串模板,使用反引号`标识

// 多行字符串
str1 = `In JavaScript this is 
not lega.`

// 在字符串中嵌入变量
var name = 'Bob'; var time = 'today'
str2 = `Hello ${name}, how are you ${time}?`

var x = 1; var y = 2

console.log(str1)
console.log(str2)

// 执行表达式
console.log(`${x} + ${y} = ${x + y}`)
