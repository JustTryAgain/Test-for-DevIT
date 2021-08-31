//код: https://stackoverflow.com/questions/6150289/how-can-i-convert-an-image-into-base64-string-using-javascript


const getBase64FromUrl = url => fetch(url)//делаем GET запрос по ссылке 
//после обработки получаем ответ и конвертируем картинку в бинарные данные с типом
  .then(response => response.blob())
//передаём значение следующему обработчику
  .then(blob => new Promise((resolve, reject) => {
    const reader = new FileReader() //readerAPI для чтения blob
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject//ошибка чтения
    reader.readAsDataURL(blob)//преобразования Blob в base64-кодированный URL
  }))


getBase64FromUrl('https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8')
  .then(dataUrl => { 
    console.log(dataUrl)
  })