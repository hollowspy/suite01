/*
    Ecrire une fonction "boostedAddition",
    qui prend un paramètre un tableau de nombre,
    et qui retourne un nombre étant l'addition de tous les nombre du tableau

*/

/*      Test 1
    Appel à la fonction "boostedAddition",
    prenant en paramètre le tableau [4, 5, 6],
    et nous attendons comme résultat 15;
*/

boostedAddition([4, 5, 6]);

/*      Test 1
    Appel à la fonction "boostedAddition",
    prenant en paramètre le tableau [4, 4, 6, 8, 10, 12],
    et nous attendons comme résultat 44;
*/

boostedAddition([4, 4, 6, 8, 10, 12]);

//  écrire votre code sous ce commentaire
// Je créé une fonction qui prend comme parametre un tableau.
// Je créé une variable somme totale
// Je créé une boucle dans mon tableau qui parcours tous les index du talbeau.
// A chaque boucle, tu ajoutes la valeur de l'index en question à la variable totalSum
function boostedAddition (array){
    let totalSum = 0
    for (var i = 0; i < array.length; i++) {
        totalSum += array[i];

    }
        return totalSum;
}
