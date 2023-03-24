/*
Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.
*/

const zucchine = [
  {
    varieta: "Abruzzese",
    peso: 2,
    lunghezza: 20
  },
  {
    varieta: "Campana",
    peso: 1.5,
    lunghezza: 18
  },
  {
    varieta: "Laziale",
    peso: 1.9,
    lunghezza: 18
  },
  {
    varieta: "Umbra",
    peso: 2.3,
    lunghezza: 22
  },
  {
    varieta: "Lombarda",
    peso: 1.5,
    lunghezza: 16
  },
  {
    varieta: "Pugliese",
    peso: 2,
    lunghezza: 17
  },
  {
    varieta: "Sarda",
    peso: 1.8,
    lunghezza: 18
  },
  {
    varieta: "Siciliana",
    peso: 2.3,
    lunghezza: 23
  },
  {
    varieta: "Toscana",
    peso: 1.4,
    lunghezza: 15
  },
  {
    varieta: "Piemontese",
    peso: 1.9,
    lunghezza: 19
  }
];

let somma = 0;
zucchine.forEach(zucchina => {
  somma += zucchina.peso;
})
console.log(`Il peso totale delle zucchine è di ${somma.toFixed(2)}kg`);