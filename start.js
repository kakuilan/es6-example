// 在nodejs使用es6
// 须安装yarn add @babel/core @babel/register @babel/preset-env
require('@babel/register')({
  presets: ['@babel/preset-env']
})
module.exports = require('./index.js')
