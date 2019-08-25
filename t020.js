// Promise实现异步ajax
// 须安装npm install xmlhttprequest

var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

var getJSON = function (url) {
  var promise = new Promise(function (resolve, reject) {
    var client = new XMLHttpRequest()
    client.open('GET', url)
    client.responseType = 'json'
    client.setRequestHeader('Accept', 'application/json')
    client.onreadystatechange = function () {
      if (this.readyState === this.DONE) {
        if (this.status === 200) {
          // 成功
          var jsonResponse = JSON.parse(this.responseText)
          resolve(jsonResponse)
        } else {
          // 失败
          reject(this)
        }
      }
    }
    console.log('beging send...')
    client.send()
  })

  return promise
}

var url1 = 'https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories'
var url2 = 'https://api.github.com/search/repositories?q=stars:%3E1+language:Javascript&sort=stars&order=desc&type=Repositories'

// 链式调用
getJSON(url1).then((json) => {
  console.log('url1 done', json.total_count)
  return getJSON(url2)
}).then((data) => {
  console.log('url2 done', data.total_count)
}).catch((error) => {
  console.log('has err:', error)
})
