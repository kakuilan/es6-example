// Generator异步操作

function * loadUI () {
  showLoadingScreen()
  yield loadDataAsynchronously()
  hideLoadingScreen()
}

function showLoadingScreen () {
  console.log('开始执行...')
}

function loadDataAsynchronously () {
  console.log('这里异步加载数据')
}

function hideLoadingScreen () {
  console.log('加载完成，隐藏')
}

var loader = loadUI()
// 加载UI
loader.next()
// 卸载UI
loader.next()
