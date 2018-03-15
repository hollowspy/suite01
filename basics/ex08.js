/*
    Ecrire une fonction "isAllEven",
    qui prend un paramètre un tableau de nombre,
    et qui retourne un nombre:
        - 1 si tous les nombres du tableau sont pair
        - 0 si au moins un nombre du tableau est impair

    CRITERE DE VALIDATION OBLIGATOIRE
    --> Réutiliser la fonction isEven
        que vous aviez codé dans les exercices précédents ;)
        INTERDICTION d'écrire le contenu de isEven dans la même fonction
        Vous devez donc bien avoir 2 fonctions différentes;

*/

//  écrire votre code sous ce commentaire

/*
  Test 1
  Résultat attendu : 0
*/

isAllEven([4, 5, 6]);

/*
  Test 2
  Résultat attendu : 1
*/

isAllEven([4, 4, 6, 8, 10, 12]);

//  écrire votre code sous ce commentaire

function isAllEven (array){
    for (var i = 0; i < array.length; i++) {
        let pair = 0
        let impair = 0
        if (array[i] % 2 == 0){
            console.log("chiffre pair");
            pair += pair
            return 1
        }
        else{
            console.log("chiffre impair");
            return 0
        }
        if pair = (array.length - 1) {
            console.log("Tous les nombres du tableau sont pairs")

        } if impair > 0{
            console.log("Au moins un nombre impair")
        }
    }


//DO NO TOUCH

module.exports = {
  isAllEven: isAllEven
}
