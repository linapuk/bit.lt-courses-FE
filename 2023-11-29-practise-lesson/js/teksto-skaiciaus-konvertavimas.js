// vienos eilutes komentras


/* Čia yra multiline komentaras
https://www.javatpoint.com/javascript-special-characters
atvirkščias pasvirasis brūkšnys: \ nurodo "escape" simbolį javascript sintaksėje. 
juo pasinaudoję string'e galime įterpti kabutes, tokiose pačiose kabutėse  */


// įterpti tabuliacijos simbolį: \t

let imone1 = "UAB\t\"Artaleka\"";
let imone2 = "MB\t\"Softo fabrikas\"";
console.log(imone1);
console.log(imone2);

// \n - new lina symbol

let imoniuSarasas = imone1 + '\n' + imone2;
console.log(imoniuSarasas);

imoniuSarasas = `${imone1}\n${imone2}`;

// -------------------------------------------
// Duomenu tipo pakeitimas

// I budas - Parse Int - ima tekstine reiksme ir ja keicia i skaitine ir integer (i sveikaji skaiciu, gali buti ir neigiamas)
let skaicius = '12.7';

skaicius = parseInt(skaicius);
console.log(skaicius);

// II budas - Unary operator - konvertuoja i skaicius taciau i floata, gali buti ir neigiamas
let skaiciusTekstas = '13.7';

skaiciusNaujas = +skaiciusTekstas;
console.log(skaiciusNaujas);

// III budas - Number - tai pats griezciausias teksto konvertavimas i skaitine reiksme, konvertuoja i float
let skaiciusTekstas2 = '-14.7';

skaiciusNaujas2 = Number(skaiciusTekstas2);
console.log(skaiciusNaujas2);

// Math.round biblioteka skirta suapvalinti skaiciu matematiskai t.y. i didesniaja puse
let skaiciusTekstas3 = 15.6;
let skaiciusTekstas4 = 15.6;
let skaiciusTekstas5 = 15.00000001;
let roundedSkaicius1 = Math.round(skaiciusTekstas3);
console.log('suapvalinta reiksme math.round:' + roundedSkaicius1);

// Math.floor biblioteka skirta suapvalinti skaiciu i mazesniaja puse
roundedSkaicius2 = Math.floor(skaiciusTekstas4);
console.log('suapvalinta reiksme math.floor:' + roundedSkaicius2);

// Math.ceil biblioteka skirta suapvalinti skaiciu i didziaja puse
roundedSkaicius3 = Math.ceil(skaiciusTekstas5);
console.log('suapvalinta reiksme math.ceil:' + roundedSkaicius3);

// I budas - skaiciaus konvertavimas i string duomeu tipa i nuroodant jog butu atvaizduojami du skaiciai po kablelio:
let konvertuojamasSkaicius = 12.7;
let valiuta = konvertuojamasSkaicius.toFixed(2);
console.log(valiuta);
console.log(typeof valiuta);

// konvertuoti atgal i skaiciu
let naujaValiuta = +valiuta;
console.log(naujaValiuta);
console.log(typeof naujaValiuta);

// II budas - skaiciaus konvertavimo i teksta:
let tekstasSkaiciaus = konvertuojamasSkaicius + '';
console.log(tekstasSkaiciaus);
console.log(typeof tekstasSkaiciaus + ', jo reiksme: '+ tekstasSkaiciaus);

// III budas - skaiciaus konvertavimo i teksta: 
tekstasSkaiciaus = konvertuojamasSkaicius.toString();
console.log(tekstasSkaiciaus);

// IV budas - skaiciaus konnvertavimo i teksta:
let konvertuojamasSkaicius2 = 13.5;
let tekstasSkaiciaus2 = String(konvertuojamasSkaicius2);
console.log(tekstasSkaiciaus2);