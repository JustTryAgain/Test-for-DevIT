const obj4test1 = {
  person: {
    name: 'Oleg',
    age: 34,
    email: 'olegich@google.com'
  },
  arrtest: [0, 2.4, 5, 6, 'hi', ['lol', 'real?']]
}

const obj4test2 = {
  person: {
    name: 'Oleg',
    age: 34,
    email: 'olegic5345h@google.com'
  },
  arrtest: [0, 25.4, 5, 6, 'hi', ['lol', 'real?']]
}

const simpleObj1 = {
  a: 2,
  b: 'Hi',
  arr: [1,2,3]
}

const simpleObj2 = {
  a: 2,
  b: 'Hi',
  arr: [1,2,3]
}

        //function deepEqual
        function deepEqual(obj1, obj2) {
          //проверка на тип передаваемых параметров и на NULL
          const thisObject = typeof(obj1) === 'object' && typeof(obj2)=== 'object'
          const checkNotNull = obj1 !== null && obj2 !== null

          if (thisObject && checkNotNull) {
              //запись ключей обьекта
              let obj1Prop = Object.getOwnPropertyNames(obj1)
              let obj2Prop = Object.getOwnPropertyNames(obj2)
              //проверка на равенство числа свойств в объектах
              if (obj1Prop.length !== obj2Prop.length) {
                  return false;
              } else {
                  //запись значений обьекта
                  let obj1Val = Object.values(obj1)
                  let obj2Val = Object.values(obj2)
                  for (let i = 0; i < obj1Prop.length; i++) {
                      if (typeof obj1Val[i] === 'object' && typeof obj2Val[i] === 'object') {
                          const recursion = deepEqual(obj1Val[i],obj2Val[i])
                          if(!recursion) {
                              return false
                          }
                      } else {
                          console.log(40);//тесты
                          if(obj1Prop[i] !== obj2Prop[i]){
                              console.log(42);
                              return false;
                          }else if(obj1Val[i] !== obj2Val[i]){
                              return false
                          }
                      }
                  }
              }
              return true
          }else {

              return false; //не объект, NaN и тд...
          }
      }
//Это не функция на проверку идентичности объектов, потому что они идентичны только если связаны одной ссылкой
      console.log(deepEqual(obj4test1,obj4test2));