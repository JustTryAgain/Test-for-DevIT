let test = {
	name: 'developer',
	age: 5,
	skills: {
		html: 4,
		css: 5,
		js: 5
	}
}

function objectToArray(obj) {
  if (!(obj instanceof Object)){ return obj;} 
  //получаем масив ключ,значение через entries и итерируем через map для значения вызываем рекурсию
  return Object.entries(obj).map(([key, value]) => [key, objectToArray(value)]);
}
console.log(objectToArray(test))

//мой вопрос на стаковерфлоу и код https://stackoverflow.com/questions/68973848/how-i-can-make-an-array-from-an-object-if-there-are-nested-objects
