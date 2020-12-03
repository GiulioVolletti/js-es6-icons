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

    eachTemplate(icons, $(".icon"))

    // milestone 2:
    // definire un array di colori
    // type
    // animal = #9A0A00(lightblack) vehicle = #B8C7C5(grey) vegetable = #00650A(green)
    const threeColor = ["#9A0A00","#B8C7C5","#00650A"]
    console.log(pickType(icons));

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
      const {name, prefix, family} = object
      domName.append(`
        <div>
          <h1> ${name} </h1>
          <i class="${family} ${prefix}${name} "></i>
        <div>
        `);
  });
};

// milestone 2:
// associare ad ogni
// tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al
// tipo.
function pickType(array) {
  const arrayType =[]
  array.forEach(
    (element) => arrayType.push(element.type)
  )
  return arrayType
};
// style ="color : ${color}"
// function newArray(array1, array2){
//   const newArray1 = array1.map(
//     (element) => {
//     ...element
//
//   })
//   return newArray
// }
