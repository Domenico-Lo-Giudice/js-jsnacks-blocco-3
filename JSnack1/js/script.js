// Ottieni un numero casuale in un range specificato. Chiedi all'utente il valore minimo ed il valore massimo del range in cui generare il numero.

// Chiedo all'utente di inserire un valore minimo per il range scelto
const minNumber = parseInt(prompt('Inserisci un valore minimo per il range scelto'));

// Chiedo all'utente di inserire il valore massimo del range
const maxNumber = parseInt(prompt('Inserisci il valore massimo del range scelto'));


// Fino a quando non ha inserito un valore valido, chiedo di inserire il numero
while (isNaN(minNumber) || isNaN(maxNumber)) {

    alert('Ci hai provato, ma devi inserire dei numeri. Riprova!');

    minNumber = parseInt(prompt('Inserisci un valore minimo per il range scelto'));
    maxNumber = parseInt(prompt('Inserisci il valore massimo del range scelto'));

}

// Genero un numero casuale con i valori che ha inserito l'utente
console.log(Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber);


