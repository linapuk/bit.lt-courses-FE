function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* 1. Sukurkite masyvą iš 20 elementų:
Kurių reikšmės: 0, 1, 2 …, 18 ,19;
Kurių reikšmės: 1,2 3, … ,19, 20
Kurių reikšmės: 19, 18 … 2, 1, 0
Kurių reikšmės: 20, 21, 22…. 38, 39..
Kurių reikšmės: 49, 48, 47…. 31, 30
Su atsitiktinėmis reikšmėmis nuo 0 iki 10 */

console.log("1. Užduotis");

let arrayA = [];
for(let i = 0; i < 20; i++)
{
    // arrayA[i] = i; 
    arrayA.push(i);
}
console.log("a. rezultatas: " + arrayA);

let arrayB = [];
for(let i = 1; i <= 20; i++)
{
    arrayB.push(i);
}
console.log("b. rezultatas: " + arrayB);

let arrayC = [];
for(let i = 19; i >= 0; i--)
{
    arrayC.push(i);
}
console.log("c. rezultatas: " + arrayC);

let arrayD = [];
for(let i = 20; i < 40; i++)
{
    arrayD.push(i);
}
console.log("d. rezultatas: " + arrayD);
console.log(arrayD.length);

let arrayE = [];
for(let i = 49; i >= 30; i--)
{
    arrayE.push(i);
}
console.log("e. rezultatas: " + arrayE);
console.log(arrayE.length);

let arrayF = [];
for(let i = 0; i < 20; i++)
{
    let randomNumber = rand(0,10);
    arrayF.push(randomNumber);
}
console.log("f. rezultatas: " + arrayF);
console.log(arrayF.length);

// 2. Pasinaudokite join funkcija ir atspausdinkite vieno iš ankščiau sukurtų masyvų reikšmes tokia tvarka (pvz masyvas a) 0 -> 1 -> 2…. -> 18 -> 19;
console.log("2. Užduotis");

console.log(arrayA.join("->")+";");

/* 3. iš f masyvo ištrinkite elementus kurie:
Yra lyginiai;
Nelyginiai;
Dalinasi iš 3;
Yra lygūs savo indeksui;
Yra mažesni nei 5 arba didesni nei 8;
Yra  nuo 2 iki 5;
kurių suma su sekančiu elementu masyve yra dviženklė (jei reikšmė paskutinė masyve, sekančiu elementu laikykite pirmąjį masyvo elementą)
kurių suma su sekančiu elementu masyve yra lyginė */


let evenNumbers = [];
for (i = 0; i < arrayF.length; i++ ){
    if(arrayF[i] % 2 === 0)
    {
        evenNumbers.push(arrayF[i]);
    }
}
console.log("a. rezultatas: " + evenNumbers);

let oddNumbers = [];
for (i = 0; i < arrayF.length; i++ ){
    if(arrayF[i] % 2 !== 0)
    {
        oddNumbers.push(arrayF[i]);
    }
}
console.log("b. rezultatas: " + oddNumbers);


let devidedThree = [];
for (i = 0; i < arrayF.length; i++ ){
    if(arrayF[i] % 3 === 0)
    {
        devidedThree.push(arrayF[i]);
    }
}
console.log("c. rezultatas: " + devidedThree);

let equalToIndex = [];
for (i=0; i < arrayF.length; i++){
    if(arrayF[i] === i )
    {
        equalToIndex.push(arrayF[i]);
    }
}
console.log("d. rezultatas: " + equalToIndex);

let lessThenFiveMoreThenEight = [];
for (i = 0; i < arrayF.length; i++){
    if (arrayF[i] < 5 || arrayF[i] > 8){
        lessThenFiveMoreThenEight.push(arrayF[i]);
    }
}
console.log("e. rezultatas: " + lessThenFiveMoreThenEight);

let betweenTwoFive = [];
for (i = 0; i < arrayF.length; i++){
    if (arrayF[i] >= 2 && arrayF[i] <= 5){
        betweenTwoFive.push(arrayF[i]);
    }
}
console.log("f. rezultatas: " + betweenTwoFive);

// let sumTwoDigitsNumbers = [];
// let next = 0;
// for (i = 0; i < arrayF.length; i++){
//     if (i === arrayF.length-1){
//         next = arrayF[0];
//     } else {
//         next = arrayF[i+1];
//     }
//     if ((arrayF[i] + next) > 9){
//         sumTwoDigitsNumbers.push(arrayF[i]);
//     }
// }
// console.log("g. rezultatas: " + sumTwoDigitsNumbers);

let sumTwoDigitsNumbers = [];
let suma = 0;
for (i = 0; i < arrayF.length; i++){
    if (i === arrayF.length-1)
    {
        suma = arrayF[i] + arrayF[0];
    }
    else
    {
        suma = arrayF[i] + arrayF[i+1];
    }
    if (suma > 9){
        sumTwoDigitsNumbers.push(arrayF[i]);
    }
}
console.log("g. rezultatas: " + sumTwoDigitsNumbers);

let sumTwoDigit = [];
let sum = 0;
for (i = 0; i < arrayF.length; i++){
    if (i === arrayF.length-1)
    {
        sum = arrayF[i] + arrayF[0];
    }
    else
    {
        sum = arrayF[i] + arrayF[i+1];
    }
    if (sum % 2 === 0){
        sumTwoDigit.push(arrayF[i]);
    }
}
console.log("h. rezultatas: " + sumTwoDigit);