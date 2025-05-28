// Creare un ciclo con contatore che va da 1 a 100.
for (let i = 1; i <= 100; i++) {
    // Controlliamo se il numero corrente è divisibile sia per 3 che per 5 con l'operatore modulo.
    if (i % 3 == 0 && i % 5 == 0) {

        // Se la condizione è vera allora stampa il messaggio "FizzBuzz".
        console.log("FizzBuzz");

        // Se la condizione è falsa allora controlliamo che sia divisibile per 3.
    } else if (i % 3 == 0) {

        // Se la condizione è vera stampiamo solo "Fizz".
        console.log("Fizz");

        // Se la condizione è falsa allora controlliamo che sia divisibile per 5.
    } else if (i % 5 == 0) {

        // Se la condizione è vera stampiamo solo "Buzz".
        console.log("Buzz");

        // Se non è divisibile per 5 allora stampiamo semplicemente il numero in console.
    }
    else {
        console.log(i)
    }
}