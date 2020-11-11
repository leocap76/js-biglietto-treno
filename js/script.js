// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km);
// va applicato uno sconto del 20% per i minorenni;
// va applicato uno sconto del 40% per gli over 65.



var km = parseInt (prompt("distanza in km?"));

var età = parseInt(prompt("quanti anni hai?"));

var prezzo = parseInt(km * 0.21);
