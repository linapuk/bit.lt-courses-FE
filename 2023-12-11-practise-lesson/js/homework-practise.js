/* 2023-12-07
Darbas su masyvais
 */

// 1. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
// naudos unicode, kur A=65, B=66, C=67 ir D=68.
function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateArrayOfStrings = (length) =>{
    const arr = [];
    for (let i=0; i < length; i++){
        let atsitiktineRaide = String.fromCharCode(rand(65,68))
        arr.push(atsitiktineRaide)
    }
    return arr;
}


const charactersArray = generateArrayOfStrings(200);
console.log("1 užduotis:");
console.log(charactersArray);

//2. Išrūšiuokite 1 uždavinio masyvą pagal abecėlę.
console.log("2 užduotis:");
charactersArray.sort();
console.log(charactersArray);

//3. Sugeneruokite 3 masyvus pagal 1 uždavinio sąlygą. Sudėkite masyvų reikšmes, sudėdami reikšmes pagal atitinkamus indeksus. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
console.log("3 užduotis:");
const arr1 = generateArrayOfStrings(200), 
    arr2 = generateArrayOfStrings(200), 
    arr3 = generateArrayOfStrings(200),
    sumArray =[],
    uniqueValues =[],
    superUniqueValues =[];

for (let index in arr1){
    sumArray[index] = arr1[index] + arr2[index] + arr3[index]
    // gali pritaikyti concat metodaa skirta prideti stringus:
    // sumArray[index] = arr1[index].concat(arr2[index] + arr3[index]);
}
console.log(sumArray);

//pirma nustatysim unikalius
//ciklas cikle taikysime

for (const value of sumArray){ //'value' galetu tiksliau vadintis 'currentValue'
    if (!uniqueValues.includes(value)) //invertina salyga, realiai tai yra 'uniqueValues.includes(value === false)'
    {
        uniqueValues.push(value)
    }
}
console.log(uniqueValues);

let superUniueCombinations = 0;
for (let value of sumArray)
{
    let countOfThisCombination = 0;
    for (let value2 of sumArray)
    {
        if(value === value2){
            countOfThisCombination++;
        }
    }
    if(countOfThisCombination === 1){
        superUniueCombinations++;
        superUniqueValues.push(value);//length() - grazina kiek masyve yra elementu
    }
}
console.log(superUniqueValues.join(", "));

//4. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
console.log("4 užduotis:");

function generateUniqueArray (length, min, max){
let arr = [];
    while(arr.length< length){
        let randomNumbers = rand(min,max);
        if(!arr.includes(randomNumbers)) arr.push(randomNumbers);
    }
    return arr;
}

const array1 = generateUniqueArray(100, 100, 999),
    array2 = generateUniqueArray(100, 100, 999);

console.log("Masyvas 1 " + array1);
console.log("Masyvas 2 " + array2);

//Kadangi kartojasi perkeliam i funkcija 'generateUniqueArray'
/* while(array1.length < 100){
    let randomNumbers = rand(100,999);
    if(!array1.includes(randomNumbers)) array1.push(randomNumbers)
}
console.log(array1);

while(array2.length < 100){
    let randomNumbers = rand(100,999);
    if(!array2.includes(randomNumbers)) array2.push(randomNumbers)
}
console.log(array2); */

//5. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 3 uždavinio masyve, bet nėra antrame 3 uždavinio masyve.
console.log("5 užduotis:");

const fifthArray = [];

for (let index in arr1 )
{
    if(arr1[index]!==arr2[index])
    {
        fifthArray.push(arr1[index])
    }
}
console.log(fifthArray);

//6. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 4 uždavinio masyvuose.
console.log("6 užduotis:");

//budas #1
const newArray = [];
for(let value of array1){
    if(array2.includes(value)){
        newArray.push(value);
    }
}
console.log(newArray);

//budas #2
const matchingNumbers1 = array1.filter(value => array2.includes(value));
console.log(matchingNumbers1);


//7. Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 4 uždavinio masyvo reikšmės, o jo reikšmės būtų iš antrojo masyvo.
console.log("7 užduotis:");

const newArray2 = [];
let i = 0;

for (let index of array1){
    newArray2[index] = array2[i];
    i++;
}
console.log(newArray2)


// array1[841]
// array2[316]
// iir gavome jog naujame masyve newArray2  841 pozicijoje yra 316 reiksme.