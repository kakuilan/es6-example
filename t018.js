// for...of循环执行Generator
// for...of可以自动遍历Generator,此时不再需要手工调用next方法

function * fibonacci () {
  let [prev, curr] = [0, 1]
  for (;;) {
    [prev, curr] = [curr, prev + curr]
    yield curr
  }
}

var n = null
for (n of fibonacci()) {
  if (n > 1000) break
  console.log(n)
}
