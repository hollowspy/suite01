/*
  Entraînement Array.prototype.map

  Ecrire une fonction "getAllLastnames"
  qui retourne un tableau contenant la liste des prénoms des utilisateurs
  passés en paramètre.

  Prototype:
      arr getAllLastnames(arr);
*/

//  écrire votre code sous ce commentaire
getAllLastnames = (_array) => {
    let lastNames = []
    _array.map(extractName => {
    if (extractName.name){
        lastNames.push(extractName.name);
    }
    else{
        lastNames.push("")
    }
    })
    console.log(lastNames);
}

/* Ca fonctionne !!!

getAllLastnames = (_array) => {
    let lastNames = [];
    _array.map(x => {lastNames.push(x.name)})
    console.log(lastNames);
}


*/


/*
  Test 1
  Résultat attendu : ["John", "Judith", "Julia"]
*/

getAllLastnames([{name: 'John'}, {name: 'Judith'}, {name: 'Julia'}]);

/*
  Test 2
  Résultat attendu : ["Marc", "", "Robert"]
*/

getAllLastnames ([{name: 'Marc'}, {age: 18}, {name: 'Robert'}]);



/* DO NOT TOUCH */
module.exports = {
  getAllLastnames: getAllLastnames
}


/*  boucle for of

const getAllLastnames = array => {
 let result = []
 for (let i of array) {
   if (i.name) {
     result.push(i.name)
   } else {
     result.push('')
   }
 }
 console.log(result)
} */



/* Solution de Cyril qui est mieux, sans création de nouveau tableau car le .map en créé un automatiquement

const getAllLastnames = array => {
 let result = array.map(i => {
   if (i.name) {
     return i.name
   } else {
     return ''
   }
 })
 console.log(result)
}

*/
