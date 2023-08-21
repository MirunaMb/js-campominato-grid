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

const button = document.getElementById('pulsante')
const grid = document.getElementById('griglia')

button.addEventListener('click', function () {
    generaGriglia()
    
})
 function generaGriglia(){
    for (let index = 1; index <=100; index++){
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

