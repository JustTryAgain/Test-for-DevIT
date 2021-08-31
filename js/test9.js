  String.prototype.toTitleCase = () => {
     return str.replace( //возвращает строку замененную по шаблону
       /\w\S*/g, //поиск по шаблону символ слова и не пробелы (все слова)
        function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
              }
          );
      }

      let str = "some Again test this"
      console.log(str.toTitleCase());