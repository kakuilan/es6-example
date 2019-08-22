// Object.is(),它相当于===
// 不同有2点： +0 != -0 , NaN===NaN

res1 = (+0 === -0)
res2 = (NaN === NaN)
res3 = Object.is(+0, -0)
res4 = Object.is(NaN, NaN)

// 将输出 true false false true
console.log(res1, res2, res3, res4)
