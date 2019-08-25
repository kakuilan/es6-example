// 简单Promise例子

function timeout (ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

// then指定resolve方法的回调函数
timeout(250).then(() => {
  console.log('done')
})
