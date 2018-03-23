/*
  Ecrire une fonction "getCharAt"
  qui retourne le caractère à une certaine position.
  Si la position demandée est inexistante, retourner une chaine vide.

  Prototype:
      str getCharAt(str, position);

  Fonctions interdites:
    - String.prototype.charAt()
*/

//  écrire votre code sous ce commentaire
function getCharAt(mot,poz){
    let result = mot.charAt(poz);
    return result
}

/*
  Test 1
  Résultat attendu : "j"
*/

getCharAt("bonjour", 3);

/*
  Test 2
  Résultat attendu : "v"
*/

getCharAt("comment ça va?", 11);

/* DO NOT TOUCH */
module.exports = {
  getCharAt: getCharAt
}
