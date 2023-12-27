function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Namu darbai - Darbas su ciklais
// 4. Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti raudonos spalvos.
 
let number = [];
let biggerThan150 = 0;
for (i = 0; i < 300; i ++)
{
    // number[i] = rand(0,300); irgi veikia tokia salyga
    // number.push(rand(0,300)) -> apsigalvjo nebe sitaip aprasyti
    let randomNumber = rand(0, 300);
    if (randomNumber > 150)biggerThan150++;
    if (randomNumber > 275)
    {
        // raudonas skaicius. 3 budai kaip ikelti spalva
        // document.write(`<red>${randomNumber}</red> `);
        // document.write(`<div style="color: red">${randomNumber}</div> `); sitas nelabai tiko nes div yra blokinis elementas ir gaunasi jog eina i nauja eilute
        document.write(`<span style="color: red">${randomNumber}</span> `);
    }
    else
    {
    // paprastas skaicius
        // document.write("<black>" +randomNumber + "</black> "); tas pats kas apacioje parasyta
        document.write(`<black>${randomNumber}</black> `);

    }
}
console.log(`Didesniu skaiciu nnei 150 masyve yra: ${biggerThan150} `);
// console.log(nurandomNumbermber.join(" "));

//Namu darbai  "Uzduoteles operacijoms su masyvais pasikartojimui"-------------------

function generateArrayOfrandomNumbers(min, max, countOfElement)
{
    let arr = [];//reik isivesti kintamaji nes negali kartotis pavadinimai kintamuju
    for (let i = 0; i < countOfElement; i++)
    {
        arr.push(rand(min ,max))
    }
    return arr
}

/* iš f masyvo ištrinkite elementus kurie:
Yra lyginiai;
Nelyginiai;
Dalinasi iš 3;
Yra lygūs savo indeksui;
Yra mažesni nei 5 arba didesni nei 8;
Yra  nuo 2 iki 5;
kurių suma su sekančiu elementu masyve yra dviženklė (jei reikšmė paskutinė masyve, sekančiu elementu laikykite pirmąjį masyvo elementą)
kurių suma su sekančiu elementu masyve yra lyginė
	
Po kiekvienos filtracijos naujai sugeneruokite masyvą f */

let array = generateArrayOfrandomNumbers(0, 10, 20);
// console.log(generateArrayOfrandomNumbers(0, 10, 20)) galimas ir toks variantas
console.log(array)

// a. Yra lyginiai;
console.log("a uzduotis")
for (let i = 0; i < array.length; i++ ){
    if (array[i] % 2 === 0)
    {
        array.splice(i, 1);
        i--;
    }
}
console.log(array)

// b. Nelyginiai;
console.log("b uzduotis")

array = generateArrayOfrandomNumbers(0, 10, 20);
console.log(array)

for (let i = 0; i < array.length; i++ ){
    if (array[i] % 2 !== 0)
    {
        array.splice(i, 1);
        i--;
    }
}
console.log(array)

// c. Dalinasi iš 3;
console.log("c uzduotis")

array = generateArrayOfrandomNumbers(0, 10, 20);
console.log(array)

for (let i = 0; i < array.length; i++ ){
    if (array[i] % 3 === 0)
    {
        array.splice(i, 1);
        i--;
    }
}
console.log(array)

// d. Yra lygūs savo indeksui;
console.log("d uzduotis")

array = generateArrayOfrandomNumbers(0, 10, 20);
console.log(array)

for (let i = 0; i < array.length; i++ ){
    if (array[i] === i)
    {
        array.splice(i, 1);
        i--;
    }
}
console.log(array)

// e. Yra mažesni nei 5 arba didesni nei 8;
console.log("e uzduotis")

array = generateArrayOfrandomNumbers(0, 10, 20);
console.log(array)

for (let i = 0; i < array.length; i++ ){
    if (array[i] < 5 || array[i] > 8 )
    {
        array.splice(i, 1);
        i--;
    }
}
console.log(array)

// f. Yra  nuo 2 iki 5;
console.log("f uzduotis")

array = generateArrayOfrandomNumbers(0, 10, 20);
console.log(array)

for (let i = 0; i < array.length; i++ ){
    if (array[i] >= 2 && array[i] <= 5 )
    {
        array.splice(i, 1);
        i--;
    }
}
console.log(array)

// g. kurių suma su sekančiu elementu masyve yra dviženklė (jei reikšmė paskutinė masyve, sekančiu elementu laikykite pirmąjį masyvo elementą)
console.log("g uzduotis")

array = generateArrayOfrandomNumbers(0, 10, 20);
console.log(array)

for (let i = 0; i < array.length; i++ ){
    let nextElement;
    // patikrinam ar elementas paskutinis, jei taip sekanti elementa eimame pirmaji masyvo elementa. Jei ne - sekanti elementa imame.
    if (array.length - 1 === i)
    {
        nextElement = array[0];
    }
    else
    {
        nextElement = array[i+1]
    }
    if (array[i]+ nextElement >= 10  )
    {
        array.splice(i, 1);
        i--;
    }
}
console.log(array)

// h. kurių suma su sekančiu elementu masyve yra lyginė
console.log("h uzduotis")

array = generateArrayOfrandomNumbers(0, 10, 20);
console.log(array)

for (let i = 0; i < array.length; i++ ){
    let nextElement;
    // patikrinam ar elementas paskutinis, jei taip sekanti elementa eimame pirmaji masyvo elementa. Jei ne - sekanti elementa imame.
    if (array.length - 1 === i)
    {
        nextElement = array[0];
    }
    else
    {
        nextElement = array[i+1]
    }
    if ((array[i]+ nextElement) % 2 === 0)
    {
        array.splice(i, 1);
        i--;
    }
}
console.log(array)