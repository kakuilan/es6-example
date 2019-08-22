// es6函数的rest(剩余)参数,如(...变量名),将多余的函数参数放入数组中

function add (...values) {
  let sum = 0
  for (var val of values) {
    sum += val
  }
  return sum
}

console.log(add(2, 3, 4))
