// 6 uzduotis
let oldText = "Once upon a time in hollywood";
let newText1 = oldText.replaceAll(/o/gi,'*');
// let newText2 = newText1.replaceAll('O','*');
console.log(newText1);

// 7 uzduotis
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let a = rand(0,2), 
    b = rand(0,2),
    c = rand(0,2),
    d = rand(0,2);
let zeroCount = 0,
    oneCount = 0,
    twoCount = 0;

// let aCountZero = a.indexOf('0'),
//     aCountOne = a.indexOf('1'),
//     aCountTwo = a.indexOf('2'),

//     bCountZero = b.indexOf('0'),
//     bCountOne = b.indexOf('1'),
//     bCountTwo = b.indexOf('2'),

//     cCountZero = c.indexOf('0'),
//     cCountOne = c.indexOf('1'),
//     cCountTwo = c.indexOf('2'),

//     dCountZero = d.indexOf('0'),
//     dCountOne = d.indexOf('1'),
//     dCountTwo = d.indexOf('2');
if (a === 0)
{
     zeroCount++;
}
else if (a === 1)
{
    oneCount++;
}
else if (a === 2)
{
    twoCount++;
}

if (b === 0)
{
     zeroCount++;
}
else if (b === 1)
{
    oneCount++;
}
else if (b === 2)
{
    twoCount++;
}

if (c === 0)
{
     zeroCount++;
}
else if (c === 1)
{
    oneCount++;
}
else if (c === 2)
{
    twoCount++;
}

if (d === 0)
{
     zeroCount++;
}
else if (d === 1)
{
    oneCount++;
}
else if (d === 2)
{
    twoCount++;
}

// switch (a) {
//     case 0:
//         zeroCount++;
//     case 1:
//         oneCount++;
//     case 2:
//         twoCount++;
// }


// switch (b) {
//     case 0:
//         zeroCount++;
//     case 1:
//         oneCount++;
//     case 2:
//         twoCount++;
// }

console.log(a, b, c, d);
console.log(`Nuliu:${zeroCount}\t Vienetu:${oneCount}\t Dvejetu:${twoCount}`);

// 8 uzduotis
let aVariable = rand(0,4), 
    bVariable = rand(0,4);
// let aVariable = 3, 
//     bVariable = 4;

if  (aVariable > bVariable && bVariable === 0)
{
    console.log(`I Pirma kintamojo reiksme:${aVariable}\t Antra kintmaojo reiksme:${bVariable}\t Rezultatas: Dalyba is nulio negalima!`);
}

else if  (aVariable > bVariable && bVariable !== 0)
{
    let newVariable = aVariable / bVariable;
    let roundVariable = (Math.round(newVariable  * 100))/100;
    console.log(`II Pirma kintamojo reiksme:${aVariable}\t Antra kintmaojo reiksme:${bVariable}\t Rezultatas:${roundVariable}`);
} 

else if (aVariable < bVariable && aVariable === 0)
{
    console.log(`III Pirma kintamojo reiksme:${aVariable}\t Antra kintmaojo reiksme:${bVariable}\t Rezultatas: Dalyba is nulio negalima!`);
}

else if (aVariable < bVariable && aVariable !== 0)
{
    let newVariable = bVariable / aVariable;
    let roundVariable = (Math.round(newVariable  * 100))/100;
    console.log(`IV Pirma kintamojo reiksme:${aVariable}\t Antra kintmaojo reiksme:${bVariable}\t Rezultatas:${roundVariable}`);
}

else 
{
    console.log(`V Pirma kintamojo reiksme:${aVariable}\t Antra kintmaojo reiksme:${bVariable}\t Rezultatas: Reiksmes kintamuju yra lygios!`);
}

//  9 uzduotis
let firstVariable = rand(0,25), 
    secondVariable = rand(0,25),
    thirdVariable = rand(0,25);
// let firstVariable = 12, 
//     secondVariable = 34,
//     thirdVariable = 56;
let newVariableOfThree  = firstVariable.toString() + secondVariable.toString() + thirdVariable.toString();
let lenghtOfVariables = newVariableOfThree.length;
let resultVariable = '';

if (lenghtOfVariables === 3)
{
    resultVariable = newVariableOfThree.slice(1, 2);
}
else if (lenghtOfVariables === 4)
{
    resultVariable = newVariableOfThree.slice(1, 3);
}

else if (lenghtOfVariables === 5)
{
    resultVariable = newVariableOfThree.slice(2, 3);
}

else if (lenghtOfVariables === 6)
{
    resultVariable = newVariableOfThree.slice(2, 4);
}

console.log(`Pirma kintamojo reiksme:${firstVariable}\t Antra kintmaojo reiksme:${secondVariable}\t Treciojo kintmaojo reiksme:${thirdVariable}\t Rezultatas:${resultVariable}`);
console.log(newVariableOfThree);
console.log(lenghtOfVariables);



// 10 uzduotis
let firstLetter = rand(97,122), 
    secondLetter = rand(97,122), 
    thirdLetter = rand(97,122); 
let lettersText = String.fromCharCode(firstLetter) + String.fromCharCode(secondLetter) + String.fromCharCode(thirdLetter);
    console.log(lettersText);