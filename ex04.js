/*
    Ecrire une fonction "isEven",
    qui prend un paramètre un nombre,
    et qui retourne un nombre:
        - 1 si le nombre est pair
        - 0 si le nombre est impair

*/

/*      Test 1
    Appel à la fonction "isEven",
    prenant en paramètre le nombre 6,
    et nous attendons comme résultat 1;
*/

//isEven(6);

/*      Test 2
    Appel à la fonction "isEven",
    prenant en paramètre le nombre 5,
    et nous attendons comme résultat 0;
*/

//isEven(5);
/*
//  écrire votre code sous ce commentaire
*/

// Je crée ma fonction, et lui donne deux conditions, avec un calcul sur le modulo si pair ou impair
function isEven (nb){
    if (nb % 2 === 0){
        console.log(nb + " est un chiffre pair")
        return 0;

        }
    else{
        console.log(`${nb} est un chiffre impair`)
        return 1;
        }
}

// Je donne les valeurs à ma fonction
isEven(6);
isEven(5);
