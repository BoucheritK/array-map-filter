/* Array.prototype.filter - Exercice 2

Ecrire une fonction getMultiplesOf qui reçoit deux arguments:
1. un tableau de nombres.
2. un nombre.
En utilisant filter, elle doit renvoyer un tableau ne contenant que les
nombres du 1er argument qui sont multiples du nombre passé en 2ème.

Exemple d'entrée:
  1er argument:  [-12, -10, -7, -1, 5, 8, 11, 15, 20, 27]
  2ème argument: 5

  Sortie attendue:
  [-10, 5, 15, 20]

 */
const numbersArray = [-12, -10, -7, -1, 5, 8, 11, 15, 20, 27];
const multiple = 5;

const result = numbersArray.filter(function getMultiplesOf(num) {
  if (num % multiple === 0)
    return num
});
console.log(result);


// Ne pas modifier l'export
module.exports = getMultiplesOf;
