// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

// Chiedo N all'utente
const N = parseInt(prompt("Inserisci un numero"));

// PER 0 a N volte
let i = 0;
while( i < N) {

    // Creo un array
    const generateArray = [];

    //  PER 0 a 10 volte
    let y = 0;
    while (y < 10) {

        // genero un numero casuale da 0 a 100 
        const randomNumber = Math.floor(Math.random() * 100) + 1;

        // inserisco il numero casuale nell`array
        generateArray.push(randomNumber);
    
        // incremento y
        y++
    }

    //stampo l'array
    console.log(generateArray);

    // incremento i
    i++
}

