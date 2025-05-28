// Creare un ciclo con contatore che va da 1 a 100.
for (let i = 1; i <= 100; i++) {
    // Controlliamo se il numero corrente è divisibile per 3 con l'operatore modulo.
    if (i % 3 == 0) {
        // Se la condizione è vera allora controlliamo anche che il numero sia divisibile per 5.
        if (i % 5 == 0) {
            // Se la condizione è vera allora stampa il messaggio "FizzBuzz".
            console.log("FizzBuzz");
        } else {
            // Altrimenti stampa solo "Fizz".
            console.log("Fizz");
        }
        // Se non è divisibile per 3 allora controlliamo che sia divisibile per 5.
    } else if (i % 5 == 0) {
        // Se la condizione è vera stampiamo solo "Buzz".
        console.log("Buzz");
        // Se non è divisibile nè per 3 nè per 5 allora stampiamo semplicemente il numero in console.
    } else {
        console.log(i)
    }
}