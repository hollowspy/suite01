/*
    Ecrire une fonction "boostedEvenAddition",
    qui prend un paramètre un tableau de nombre,
    et qui retourne un nombre étant l'addition de tous les nombres PAIRS du tableau

*/

//  écrire votre code sous ce commentaire

/*
  Test 1
  Résultat attendu : 10
*/

boostedEvenAddition([4, 5, 6]);

/*
  Test 2
  Résultat attendu : 44
*/

boostedEvenAddition([1, 3, 4, 5, 4, 6, 9, 8, 11, 10, 11, 12]);

//  écrire votre code sous ce commentaire
// Création de la fonction. Ajout d'une variable total pair.
// Boucle sur le tableau. Si la valeur de l'index du tableau est pair (module égal à 0)
// alors tu rajoutes totalPair à lui même.
// Attention, ne pas faire le console log dans la boucle, sinon, c'est moche ^^
 function boostedEvenAddition (array){
     let totalPair = 0
     for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0){
            totalPair += array[i]
        }
     }console.log(totalPair);
 }


 /* DO NOT TOUCH */
 module.exports = {
   boostedEvenAddition: boostedEvenAddition
 }
