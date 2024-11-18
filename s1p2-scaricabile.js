



ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.

SCRIVI QUI LA TUA RISPOSTA
 I principali datatype in JavaScript sono i seguenti: number,string,boolean,undefinied & null,biglnt,symbol.

 I tipi primitivi sono pienamente rappresentsati dal loro valore associato, sono immutabili e vi rientrano quessti 6 in elenco.

 Numeri: possono includere qualsiasi numero ed esistono dei valori speciali per questi: +infinity / -infinity e NaN (not a number)
 String: questi sono una sequenza di caratteri delimitati da " o '.
 Boolean: questi sono dati di entità logica, una variabile il cui valore è vero o falso.
 Undefinied: questo rappresenta una voce che ancora non è stata definita.
 Null: null rappresenta un valore vuoto.

 I structural types invece sono questi:
 Oggetti: sono una coppia di chiave e valore.
 Funzioni: questi rappresentano un blocco di codice che puo essere eseguito.
 Array: sono liste di dati.


ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.


SCRIVI QUI LA TUA RISPOSTA
Potremmo definire un oggetto come un gruppo di variabili che descrivono la stessa entità, una coppia di valori.
Esempi:
name:"Giovanni"
age:"28"
blonde:"true"


ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.


SCRIVI QUI LA TUA RISPOSTA 
let num1 = 12
let num2 = 20
let somma = num1 + num2
console.log ("la somma è" + differenza)


ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.


SCRIVI QUI LA TUA RISPOSTA
let x = 12
 

ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.


SCRIVI QUI LA TUA RISPOSTA 
let"name" = "Giovanni"


ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).


 SCRIVI QUI LA TUA RISPOSTA 
let num3 = 4
let differenza = num3 - x
console.log ("la differenza è" + differenza)



ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().


SCRIVI QUI LA TUA RISPOSTA
let "name1" = "john"
let "name2" = "John"
let diverso = name1 !== name2
let minuscolo1 = name1.toLowerCase ()
let minuscolo2 = name2.toLowerCase ()
console.log (minuscolo1====minuscolo2)


