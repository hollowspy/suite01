/*
  Ecrire une fonction "concatArrays"
  qui prend deux tableaux et qui renvoie un tableau constitué du contenu des deux tableaux.
  Prototype:
      arr concatArrays(arr1, arr2);

  Fonctions interdites:
      - Array.concat

  La fonction ne doit pas modifier les tableaux sources.
*/

const concatArrays = (_arr, _arr1) => {
    let new_array = [];
    let value_array = [];
    for (var i = 0; i < _arr.length; i++) {
        value_array == _arr[i];
        new_array.push(_arr[i]);
    }
    for (var i = 0; i < _arr1.length; i++) {
        value_array == _arr1[i];
        new_array.push(_arr1[i]);
    }

    console.log(new_array);
}

//  écrire votre code sous ce commentaire

/*
  Test 1
  Résultat attendu : ["bonjour", "ça", "va?", 3, 4]
*/
concatArrays(["bonjour"], ["ça", "va?", 3, 4]);

/*
  Test 2
  Résultat attendu : ["enchanté", "je", "m'appelle", "comment?"]
*/
concatArrays(["enchanté", "je"], ["m'appelle", "comment?"]);

/* DO NOT TOUCH */
module.exports = {
  concatArrays: concatArrays
}
