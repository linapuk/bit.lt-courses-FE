//Slaptazodzio validavimas
//1. Sukurti kintamajį pavadinimu 'password' ir priskirti jai sugalvotą reikšmę;
//2. Jei password kintamasis yra 8 simbolių ar ilgesnis, į konsolę parašyti "Slaptažodis tinkamas"
//3. Jei slaptažodis yra trumpesnis nei 8 simboliai, į konsolę parašyti "Slaptažodis per trumpas"

let password = 'ledinuk';

if (password.length >= 8) {
    console.log('Slaptažodis tinkamas');
    // block scope'as - kintamojo matymo riba, tai parasytas kintamasis nebus matomas uz rietiniu skliaustu
    // let obuolys = 'obuolys';
    // var yra pasenes metnas ir jis nesivadvauja blokinio skliauto
    // var kriause = 'kriause';
}
else {
    console.log('Slaptažodis per trumpas');
}

// console.log(obuolys);
// console.log(kriause);