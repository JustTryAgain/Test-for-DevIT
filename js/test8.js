const get = (obj, path, defaultValue = undefined) => {
  // Функция, которая получает нужное значение из объекта
  const travel = (regexp) =>
    // Мы просто разделяем строку к примеру '[0].value1.value2' на массив значений ['0', 'value1', 'value2']
    String.prototype.split
      .call(path, regexp)
      // Удаляем из массива пустые строки
      .filter(Boolean)
      // Получаем значение
      .reduce((accumulator, key) => {
        // Постепенно обращаемся к объекту с проверкой на null и undefined
        // Что бы лучше понять, в этом месте ставить console.log() и смотреть на процесс
        return accumulator !== null && accumulator !== undefined ? accumulator[key] : accumulator;
      }, obj);

  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  
  return result === undefined || result === obj ? defaultValue : result;
}
// функцию get взял с инета ((
function array_pluck_avg(data,searchVal){
  if(Array.isArray(data)){
    let arr=[];
    for ( let key of data) {
        arr.push(get(key,searchVal));
       }
       if (!arr.some(isNaN)) {
          const result = (arr.reduce((a,b)=>(a+b))/arr.length); 
          return result.toFixed(2);
       }else return console.log(`НЕ могу посчитать среднее арифметическое ${arr}`)
  } else return get(data,searchVal);
}


let testData3 = [
{"name":"Vasya","email":"vasya@example.com","age":20,"skills":{"php":0,"js":-1,"madness":10,"rage":10}},
{"name":"Dima","email":"dima@example.com","age":34,"skills":{"php":5,"js":7,"madness":3,"rage":2}},
{"name":"Colya","email":"colya@example.com","age":46,"skills":{"php":8,"js":-2,"madness":1,"rage":4}},
{"name":"Misha","email":"misha@example.com","age":16,"skills":{"php":6,"js":6,"madness":5,"rage":2}},
{"name":"Ashan","email":"ashan@example.com","age":99,"skills":{"php":0,"js":10,"madness":10,"rage":1}},
{"name":"Rafshan","email":"rafshan@example.com","age":11,"skills":{"php":0,"js":0,"madness":0,"rage":10}}];

console.log(array_pluck_avg(testData3,'skills.rage'));