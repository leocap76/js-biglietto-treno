// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km);
// va applicato uno sconto del 20% per i minorenni;
// va applicato uno sconto del 40% per gli over 65.



var km = parseInt(prompt("distanza in km?"));

var età = parseInt(prompt("quanti anni hai?"));

var prezzo = (km * 0.21);

var sconto20 = (prezzo * 20) / 100;

var sconto40 = (prezzo * 40) / 100;

var calcolaPrezzo;


if (età < 18) {
  calcolaPrezzo = prezzo - sconto20;
  document.getElementById('prezzo-biglietto').innerHTML = calcolaPrezzo;
}
else if (età > 65) {
  calcolaPrezzo = prezzo - sconto40;
  document.getElementById('prezzo-biglietto').innerHTML = calcolaPrezzo;
}

else {
  calcolaPrezzo = prezzo;
  document.getElementById('prezzo-biglietto').innerHTML = calcolaPrezzo;
}
