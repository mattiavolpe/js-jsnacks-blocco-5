/*
Snack 5:
Scrivi una funzione che accetti tre argomenti:
un array e due numeri ("a" più piccolo di "b" e "b" grande al massimo quanto il numero di elementi dell'array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra "a" e "b"
*/

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
extractFromTo(originalArray, 6, 18);

function extractFromTo(arrayOfElements, min, max) {
  const extractedArray = arrayOfElements.filter((element, index) => {
    if (index >= min && index <= max) {
      return true;
    }
  });
  console.log(extractedArray);
}