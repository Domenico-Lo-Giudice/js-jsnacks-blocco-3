// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

// Creo array vuoto
const numberList = [];

let somma = 0;

// finchè la somma è minore di 50
while (somma < 50) {
    // chiedo all'utente un numero
    let userNumber = parseInt(prompt('Inserisci un numero'));
    somma += userNumber;
    numberList.push(userNumber);

    // se la somma è maggiore o uguale a 50
    if (somma >= 50) {
        console.log('La somma è maggiore o uguale di 50')
    }
}

console.log(somma);
console.log(numberList);