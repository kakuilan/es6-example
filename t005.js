// 数组keys,values,entries遍历

// keys对键名遍历
for (const index of ['a', 'b'].keys()) {
  console.log(index)
}

// values对键值遍历
for (const elem of ['a', 'b'].values()) {
  console.log(elem)
}

// entries为 键值对 遍历
for (const [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem)
}
