function firstUnique(arr) {
  if (Array.isArray(arr)) {
    let result = (arr.find((value,i,arr) =>arr.indexOf(value) === arr.lastIndexOf(value)))
    if (typeof result === 'undefined') {
      alert('В масиве нету уникальных значений')
    }else return result;
  } else return console.log(`Это не массив!!! ${typeof(arr)}`);
}
console.log(firstUnique([2,3,2,'fff',3,5,5,6]))
// let newArray = arr.filter(callback(element[, index, [array]])[, thisArg])
