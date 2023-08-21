/*
L'utente clicca su un bottone che genera una griglia quadrata.
1.definire in HTML un pulsante a cui assegniamo un ID.
2.all'evento click associamo un codice che genera una griglia.

GENERAZIONE GRIGLIA
Ogni cella ha un numero progressivo,da 1 a 100.
Ci saranno 10 caselle per ognuna delle 10 righe.
1) definiamo un contenitore con dimenssioni fisse.
2) contiamo da 1 a 100 per ogni ciclo.
a)creiamo una cella con dimenssioni fisse.
I) la larghezza la valutiamo con il calc (100% / 10)
II) la lunghezza con aspect-ratio : 1;
b) associamo l'indice ad una singola cella

QUANDO L'UTENTE CLICCA SU OGNI CELLA,LA CELLA CLICCATA SI COLORA DI AZZURO
 ED EMETTE UN MESSAGGIO CON IL N. DELLA CELLA IN CONSOLE.

 1)associamo all'evento click sulla cella un codice
 a)usiamo una classe per cambiare il colore alla cella
 b)usiamo il console.log sull'indice associato alla cella

*/
// DICHIARAZIONI
const button = document.getElementById('pulsante')
const grid = document.getElementById('griglia')
let choise = document.getElementById('select') // variabile legata al menu a tendina della difficolta

button.addEventListener('click', function () {
    const mode = choise.value; // modalita scelta dal menu a tendina
    const numberOfSquare = regulationGrid(mode) //richiamo la funzione per dare il numero di elementi della grid
    generaGriglia(numberOfSquare);
    
})
 function generaGriglia(totalSquares){
    grid.innerHTML = '';
    for (let index = 1; index <= totalSquares; index++){
        // creamo una cella
        const cell = document.createElement('div')
        cell.classList.add('cell')
        

        cell.addEventListener('click',function (){
            this.innerHTML=index;
            this.classList.add('azuro');
            console.log(index);
        })


        grid.append(cell)
    }

 }

 // Creo funzione che in base alla scelta dell'utente mi cambia anche il numero degli elementi della grid
 function regulationGrid(modeUser){
     numberOfSquare = 0;
     if (modeUser === 'easy'){
        numberOfSquare = 100;
     } else if (modeUser === 'medium'){
        numberOfSquare = 81;
     } else if (modeUser === 'hard'){
        numberOfSquare = 49;
     }
     return numberOfSquare;
 }
