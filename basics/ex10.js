/*
    Ecrire une fonction "shoppingList",
    qui prend un paramètre un tableau de paniers;

    Un panier est un tableau de mots;

    La fonction retourne un objet contenant:
        - comme clef le nom du produit rencontré
        - comme valeur le nombre de fois qu'il à été rencontré

    Important -> l'ordre n'a aucune importance
*/

//  écrire votre code sous ce commentaire

/*
  Test 1
  Résultat attendu : {
    "orange": 8,
    "kiwi": 4,
    "ananas": 3,
    "prune": 2,
    "banane": 2,
    "pamplemousse": 1
  }
*/



//  écrire votre code sous ce commentaire
/*
function shoppingList(array){
    let totalOrange = 0;
    let totalKiwi = 0;
    let totalAnanas = 0;
    let totalPrune = 0;
    let totalPamplemousse = 0;
    let totalBanane = 0;
    for (var i = 0; i < array.length; i++) {
        array[i]

        for (var j = 0; j < array.length; j++) {
            if (array[i][j] === 'orange' ){
                totalOrange += 1;
            }
            else if (array[i][j] === 'kiwi'){
                totalKiwi += 1;
            }
            else if (array[i][j] === "ananas"){
                totalAnanas += 1;
            }
            else if (array[i][j] === "prune"){
                totalPrune +=1;
            }
            else if (array[i][j] === "banane"){
                totalBanane +=1;
            }
            else if (array[i][j] === "pamplemousse"){
                totalPamplemousse += 1;
            }
        }
    }

    console.log(`orange ${totalOrange}`)
    console.log(`Kiwi ${totalKiwi}`)
    console.log(`Ananas ${totalAnanas}`)
    console.log(`Prune ${totalPrune}`)
    console.log(`Pamplemousse ${totalPamplemousse}`)
    console.log(`banane ${totalBanane}`)

}

*/
/* DO NOT TOUCH
module.exports = {
  shoppingList: shoppingList */



// Solution de stephane et credric bien meilleure et plus générique

let objet = {};

function shoppingList (tableau){
    for (let x = 0; x < tableau.length; x++) {
        for (let y = 0; y < tableau[x].length; y++) {

            const fruit = tableau[x][y];
            objet[fruit] = objet[fruit] ? objet[fruit] + 1:1;
        }
    }
    console.log(objet);
}



shoppingList([
    ["orange", "orange", "kiwi", "ananas"],
    ["kiwi", "ananas", "banane", "prune"],
    ["orange", "orange", "orange", "orange"],
    ["orange", "orange", "kiwi", "kiwi"],
    ["prune", "banane", "pamplemousse", "ananas"]
]);
