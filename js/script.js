// Esercizio: seguire le 3 milestone dell'esercizio delle Icone visto insieme stamattina. (la traccia è nelle slide della seconda parte di ES6)

$(document).ready(
  function (){
    console.log("hello world");

    // milestone 1:
    // definire un array di oggetti; ogni oggetto
    // rappresenta un'icona, che è caratterizzata da:
    // nome, prefisso, tipo e famiglia.
    const icons = [
      {
        name: "dog",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "fish",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "tractor",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "hippo",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "spider",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "apple-alt",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "carrot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "lemon",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "dragon",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "pepper-hot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "space-shuttle",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "truck-monster",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "wheelchair",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "tram",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "fighter-jet",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "helicopter",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
    ];


    // milestone 2:
    // definire un array di colori
    // type
    // animal = #9A0A00(brown) vehicle = #B8C7C5(grey) vegetable = #00BC1C(green)
    const threeColor = ["#9A0A00","#B8C7C5","#00BC1C"]

    //vedere prima prova funzione
    // const iconColors = newArray(icons, threeColor);
    // console.log(iconColors);
    // eachTemplate(iconColors, $(".icon"))

    const arrayType = pickType(icons);
    // console.log(arrayType);
    console.log(colorArray(icons, threeColor, arrayType));
    const arrayColor = colorArray(icons, threeColor, arrayType)

    eachTemplate(arrayColor, $(".icon"));

    selector($(".selector"), arrayType)
    
    $( ".selector" ).change(
      function (){
        console.log($( ".selector" ).val());
        const arrayFinal = arrayColor.filter(
          element => {
            if (element.type == $( ".selector" ).val()) {
              return element
            } else if ("" == $( ".selector" ).val()) {
              return element
            }
          }
        )
        console.log(arrayFinal);
        eachTemplate(arrayFinal, $(".icon"));
      }
    );

  }
);
// ----------------------function----------------//

// milestone 1:
// Utilizzando la funzione forEach e il template
// literal, visualizzare in pagina tutte le icone con il
// proprio nome.
function eachTemplate(array, domName) {
  domName.html("");
  array.forEach(
    (object) => {
      const {name, prefix, family, color} = object
      domName.append(`
        <div>
          <h1> ${name} </h1>
          <i class="${family} ${prefix}${name}"  style ="color: ${color}"></i>
        <div>
        `);
  });
};

// milestone 2:
// associare ad ogni
// tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al
// tipo.

// prima prova funzione
// function newArray(array1, array2){
//   const newArray1 = array1.map(
//     (element) => {
//       for (var i = 0; i < array1.length; i++) {
//         if (element.type == "animal") {
//           element.color = array2[0]
//         } else if (element.type == "vehicle") {
//           element.color = array2[1]
//         } else if (element.type == "vegetable") {
//           element.color = array2[2]
//         }
//       }
//       return element
//   })
//   return newArray1
// }



function pickType(array) {
  const arrayType =[]
  array.forEach(
      (element) => {
          if (arrayType.includes(element.type) == false) {
            arrayType.push(element.type)
          };
      }
    )
  return arrayType
};

// array1 = icons ----- array2 = color ---- array3 = array1.types
function colorArray(array1, array2, array3) {
  const arraryGenered = array1.map(
    (element) => {
      const index = array3.indexOf(element.type)
      const newObject = {
        ...element,
        color : array2[index]
      }
      return newObject
    }
  )
  return arraryGenered
};

// milestone 3:
// aggiungere una select per filtrare le icone in
// base al tipo.
// Popolare le options della select dinamicamente
function selector(select, type){
  type.forEach(
    (element) => {
      select.append(`
        <option value="${element}">${element}</option>
      `)
    }
  )
};
// e, ogni volta che cambia il valore selezionato,
// visualizzare le icone corrispondenti.
function arrayFilter(array, value){
  const arrayFiltered = array.filter(
  (element) => {
    if (element.type == value) {
      return element;
      console.log((element.type == value));
    }
  })
  return arrayFiltered;

};
