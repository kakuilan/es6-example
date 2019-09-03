// 引入-单独导出的变量
// import { firstName, lastName, year } from './t023'

// 导入-批量导出的变量
import { firstName, lastName, year } from './t024'

// 别名
import { firstName as N1, lastName as N2, year as N3 } from './t023'

console.log(firstName, lastName, year)
console.log(N1, N2, N3)
