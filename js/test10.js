String.prototype.removeDuplicate = function (){
  //значение записываемое в сет уникально поэтому дубляжей не будет (из инета)
  return result= Array.from(new Set(String(this).split(" ")));//разбиваю строку на массив с разделителем пробел
}

let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double"

console.log(x.removeDuplicate());