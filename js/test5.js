let arr = [
  ['name', 'developer'],
  ['age', 5],
  ['skills', 
    [
      ['html', 4],
      ['css', 5],
      ['js', 5]
    ]
  ]
];

function arrayToObject(arr) {
  if (Array.isArray(arr)) {
       const obj = {}
       for ( let [key, val] of arr) {
          obj [key] = arrayToObject(val)
       }
       return obj;
  }
  return arr;
}

console.log(arrayToObject(arr));
