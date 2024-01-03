
function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//1. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
console.log("Užduotis Nr. 1")

//Random skaiciu ggeneravimas nuou 0 iki 3, 200 kartu
const generateArrayOfrandomNumbers = (min, max, length) => {
    let arr = [];
    for (let i = 0; i < length; i++)
        arr.push(rand(min,max));
    return arr
}
const arr = generateArrayOfrandomNumbers(0, 3, 200);
console.log("Rezultatas: arr")
console.log(arr)

//Raidziu priskyrimas
let arrayOfRandomLettersABCD=arr.map((value)=> {
    if (value === 0) {
        return "A";
    }
    else if (value === 1) {
        return "B";
    } 
    else if (value === 2) {
        return "C";
    } 
    else {
        return "D";
    } 
})
console.log(arrayOfRandomLettersABCD)

//Funkcija raidziu priskyrimui panaudojimui kitose uzduotyse
function assignLettersToRandomNumbers (arr) {
    return arr.map((value)=> {
        if (value === 0) {
            return "A";
        }
        else if (value === 1) {
            return "B";
        } 
        else if (value === 2) {
            return "C";
        } 
        else {
            return "D";
        } 
    });
}


// let letters = arrayOfRandomLettersABCD.forEach(value, index)
let sumA = 0;
let sumB = 0;
let sumC = 0;
let sumD = 0;
for (let value of arrayOfRandomLettersABCD){
   if (value === 'A'){
    sumA++;
   }
   else if (value === 'B'){
    sumB++;
   }
   else if (value === 'C'){
    sumC++;
   }
   else {
    sumD++;
   }
}
console.log(`Suma masyve A: ${sumA}, B: ${sumB}, C: ${sumC}, D: ${sumD}`)

//2. Išrūšiuokite 1 uždavinio masyvą pagal abecėlę.
console.log("Užduotis Nr. 2")
arrayOfRandomLettersABCD.sort();
console.log(arrayOfRandomLettersABCD)

//pabandymas i kita puse:
arrayOfRandomLettersABCD.reverse();
console.log(arrayOfRandomLettersABCD);

//3. Sugeneruokite 3 masyvus pagal 1 uždavinio sąlygą. Sudėkite masyvų reikšmes, sudėdami reikšmes pagal atitinkamus indeksus. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
console.log("Užduotis Nr. 3")

let arr1=generateArrayOfrandomNumbers(0, 3, 200);
let arr2=generateArrayOfrandomNumbers(0, 3, 200);
let arr3=generateArrayOfrandomNumbers(0, 3, 200);
let randomLetters1 = assignLettersToRandomNumbers(arr1);
let randomLetters2 = assignLettersToRandomNumbers(arr2);
let randomLetters3 = assignLettersToRandomNumbers(arr3);
console.log(`Array 1: ${randomLetters1}`);
console.log(`Array 2: ${randomLetters2}`);
console.log(`Array 3: ${randomLetters3}`);

let arr4=[];
for (let index in randomLetters1)
{
    arr4.push(randomLetters1[index] + randomLetters2[index] + randomLetters3[index])
}
console.log(arr4)
const uniqueValues = [...new Set(arr4)];
console.log(uniqueValues)

// ????????????
let totalUniqueValues = 0;
for (i=0; i<uniqueValues.length; i++)
{
    totalUniqueValues=i++
}
console.log(totalUniqueValues)

//4. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
console.log("Užduotis Nr. 4")



let masyvas = [];
let index=0;
while (index<100){
    let number=rand(100, 999);
    if (masyvas.includes(number) === false){
        masyvas.push(number);
        index++;
    }
}
console.log(`Unikalus masyvas 1: ${masyvas}`);

let masyvas2 = [];
let index2=0;
while (index2<100){
    let number2=rand(100, 999);
    if (masyvas2.includes(number2) === false){
        masyvas2.push(number2);
        index2++;
    }
}
console.log(`Unikalus masyvas uzduotis 4: ${masyvas2}`);

// ????????????
// 5. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 3 uždavinio masyve, bet nėra antrame 3 uždavinio masyve.
console.log(`Array 1: ${randomLetters1}`);
console.log(`Array 2: ${randomLetters2}`);

let newArrayThird = [];

// 6. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 4 uždavinio masyvuose.

let newArrayFourth = [];
let index3 = 0;
while (index3 < masyvas.length){
    let valueMasyvas2 = masyvas2[index3];
    if (masyvas.includes(valueMasyvas2)=== true){
        newArrayFourth.push(valueMasyvas2);
    }
    index3++;
}
console.log(`Unikalus masyvas uzduotis 6: ${newArrayFourth}`);