/* 
1.Sukurti funkciją, kuri generuoja x kiekį atsitiktinių string'ų, sudarytą iš strLength simbolių. Generavimas nuo A iki Z. Sukurti masyvą iš 100 elementų, sudarytą iš String'ų, kurių ilgis yra 4 simboliai;
2. Patikrinti, ar String masyve egzistuoja reikšmių, prasidedančių bei užsibaigiančių raide A. Jei taip - pranešti kokia šio elemento pozicija masyve bei  reikšmė;
3. Išfiltruokite visas masyvo reikšmes, pasidedančias raidėmis: 'X', 'M', 'K'
4. Išfiltruokite visas masyvo reikšmes, kurių viduriniai du simboliai yra vienodi. Sukurkite išfiltruotų reikšmių masyvą;
5. Jei išfiltruotų reikšmių masyve reikšmių mažiau nei 3 - rikiuoti didėjančia, kitu atveju - rikiuoti mažėjančia tvarka.
6. Kiekvienai stringų masyvo reikšmei pridėti po dar vieną atsitiktinę raidę gale;
7. Kiekvieną stringų masyvo elementų reikšmę išrikiuoti pagal abėcėlę didėjančia tvarka
8. Sukurkite naują masyvą atsitiktinėms Sring'ų reikšmėms generuoti. Sugeneruokite atsitiktines String reikšmes iš 4 simbolių tol, kol jame bus žodis XMAS; Išveskite, kiek kartų reikėjo generuoti reikšmes kol buvo gautas toks žodis.
9. Išrikiuokite masyvą priešinga nei abecelės tvarka
10. Atraskite, kurioje masyvo pozicijoje randasi žodis 'XMAS'
 */

// 1.Sukurti funkciją, kuri generuoja x kiekį atsitiktinių string'ų, sudarytą iš strLength simbolių. Generavimas nuo A iki Z. Sukurti masyvą iš 100 elementų, sudarytą iš String'ų, kurių ilgis yra 4 simboliai;
console.log("1 užduotis:");

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateString = (length) => {
    let strLength = '';
    for (let i = 0; i < length; i++){
        strLength += String.fromCharCode(rand(65, 90));
    }
    return strLength;
}

const stringgArray = [];
for(let i=0; i < 1000; i++){
    stringgArray.push(generateString(4))
}
console.log(stringgArray);

// 2. Patikrinti, ar String masyve egzistuoja reikšmių, prasidedančių bei užsibaigiančių raide A. Jei taip - pranešti kokia šio elemento pozicija masyve bei  reikšmė;
console.log("2 užduotis:");
// const stringgArrayStartEndsA = [];
for (let index in stringgArray){
    let string = stringgArray[index]
    if (string[0]==='A'&& string[3]==='A'){
        console.log(`String reiksme: ${string} pozicija: ${index}`)
    }
}

// 3. Išfiltruokite visas masyvo reikšmes, pasidedančias raidėmis: 'X', 'M', 'K'
let filteredStringXMK = stringgArray.filter((num) => {
    return num[0]==='X' || num[0]==='M'|| num[0]==='K';
})
console.log(filteredStringXMK);

