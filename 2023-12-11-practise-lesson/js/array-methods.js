/* 2023-12-11
Darbas su masyvais (2)
1. Sukurti funkciją, kuri generuoja x kiekį atsitiktinių skaičiu nuo min iki max reikšmės (A-65, Z-90)
2. Sukurti masyvą iš 100 elementų, sudarytą iš String'ų, kurių ilgis yra 4 simboliai;
3. Išrūšiuoti String'ų masyvą didėjančia tvarka;
4. Išrūšiuoti tą patį masyvą mažėjančia tvarka;
5. Sukurti masyvą iš 100 elementų, sudarytą iš skaičių nuo -100 iki 200;
6. Patikrinti ar skaičius 68 egzistuoja masyve. Ar egzistuoja skaičius - praneškite pasinaudodami console.log()
7. Išrūšiuoti masyvą didėjančia tvarka;
8. Išrūšiuoti masyvą mažėjančia tvarka;
9. Atrasti didžiausią bei mažiausią reikšmes skaičių masyve.
10. Apskaičiuoti visų skaičių vidurkį;

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

//1. Sukurti funkciją, kuri generuoja x kiekį atsitiktinių skaičiu nuo min iki max reikšmės.
console.log("1 užduotis:");

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateRandomNumberArray = (length, min, max) => {
    const arr = [];
    for(let i = 0; i < length; i++){
        arr.push(rand(min,max))
    }
    return arr;
}

//2. Sukurti masyvą iš 100 elementų, sudarytą iš String'ų, kurių ilgis yra 4 simboliai;
console.log("2 užduotis:");

const generateString = (length) => {
    let str = '';
    for (let i = 0; i < length; i++){
        str += String.fromCharCode(rand(65, 90));
    }
    return str;
}

const stringgArray = [];
for(let i=0; i < 100; i++){
    stringgArray.push(generateString(4))
}
console.log(stringgArray);

//3. Išrūšiuoti String'ų masyvą didėjančia tvarka;
console.log("3 užduotis:");

stringgArray.sort();
console.log(stringgArray);

//4. Išrūšiuoti tą patį masyvą mažėjančia tvarka;
console.log("4 užduotis:");

stringgArray.reverse();
console.log(stringgArray);

//5. Sukurti masyvą iš 100 elementų, sudarytą iš skaičių nuo -100 iki 200;
console.log("5 užduotis:");

const numbersArray = generateRandomNumberArray(100, -100, 200)
console.log(numbersArray);

//6. Patikrinti ar skaičius 68 egzistuoja masyve. Ar egzistuoja skaičius - praneškite pasinaudodami console.log()
console.log("6 užduotis:");
if(numbersArray.includes(68)){
    console.log("68 yra");
}
else{
    console.log("68 nera");
}

//7. Išrūšiuoti masyvą didėjančia tvarka;
console.log("7 užduotis:");
numbersArray.sort((num1, num2)=>{
    return num1 - num2;
});
console.log(numbersArray);

//8. Išrūšiuoti masyvą mažėjančia tvarka;
console.log("8 užduotis:");
numbersArray.reverse();
console.log(numbersArray);

//9. Atrasti didžiausią bei mažiausią reikšmes skaičių masyve.
console.log("9 užduotis:");

// galima isspresti keliais budais:
// Budas I:
/* let max=-1000, min = 1000;
for(let value of numbersArray){
    if(value > max){
        max = value;
    }
    if(value < min)
    {
        min = value;
    }
} 
console.log(`minimali masyvo reiksme: ${min}, maksimali reiksme: ${max}`);
*/

// Budas II:
let min = Math.min(...numbersArray)//negallim paduoti kaipi masyvo, reiksmes reiks isspredinti, kadangi simtas parametru tures buti paduodama tai 3 taskiukai
let max = Math.max(...numbersArray)
console.log(`minimali masyvo reiksme: ${min}, maksimali reiksme: ${max}`);


//10. Apskaičiuoti visų skaičių vidurkį;
console.log("10 užduotis:");
