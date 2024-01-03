function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateArrayOfrandomNumbers(min = 10, max, length = 10){
    let arr = [];
    for (let i = 1; i < length; i++){
        arr.push(rand(min,max));
    }
    return arr
}

// kitoks funkcijos aprasymas.
const generateArrayOfrandomNumbers2 = (min = 10, max, length = 10) => {
    let arr = [];
    for (let i = 1; i < length; i++)
        arr.push(rand(min,max));
    return arr
}

// Naudojamas: masyvams, objektams, funkcijoms.
// const - nekintamumas, geroji praktika, optimizavimas tam tikru sistemu.
// SVARBU const aprasyta funkcija turi buti auksciau nei jos panaudojimas, kai tuo tarpu function aprasyta funkcija gali buti bet kur.
const arr = generateArrayOfrandomNumbers2(0, 10);

let arr2 = arr;
console.log("Rezultatas: arr")
console.log(arr);
console.log("Rezultatas: arr2")
console.log(arr2);

arr2.push(1)
console.log("Rezultatas: arr")
console.log(arr);
console.log("Rezultatas: arr2")
console.log(arr2);
// Rezultate prideta reiksme buvo ir prie arr.

// Masyvas su const.
const arr3 = [];

arr3.push(10);
arr3.push(1);
arr3.push(9);
console.log("Rezultatas: arr3")
console.log(arr3);
arr3.splice(-1);
console.log("Rezultatas: arr3")
console.log(arr3);

// Apskaiciuoti visu skaiciu vidurki siame masyve;
const arr4 = generateArrayOfrandomNumbers2(1, 1000, 20);
console.log("Rezultatas: arr4")
console.log(arr4);

// Kitokia FOR ciklo sintakse.

// Senoji darbo su masyvais sintakse
let sum = 0;
for (let i = 0; i < arr4.length; i++ ){
    sum += arr4[i];
    console.log(`${i + 1}. sum: ${sum}`)
}
let average = sum / arr4.length;
console.log(average);

const arr5 = generateArrayOfrandomNumbers2(1, 1000, 23);
console.log("Rezultatas: arr5")
console.log(arr5);

// For of -> ciklas (apraso ta pati kas su senuoju auksciau), skirtas atlikti operacijas su visais objekto ir masyvo elementais
// grazina einamojo masyvo elemento reiksme!
sum = 0;
for (let value of arr5){
    sum += value;
}
average = sum / arr5.length;
console.log("Rezultatas: arr5")
console.log(average);

// For in -> ciklas, skirtas atlikti operacijas su visais objekto ir masyvo elementais
// grazina einamojo masyvo elemento indekso reiksme!
// situo nepavyktu kai reikia ne nuo 0 indekso skaiciuoti ir kai yra apibreztas ilgumas (i<20), kai indeksas atvirkstinis arbba begalinis
const arr6 = generateArrayOfrandomNumbers2(1, 1000, 30);
console.log(arr6); 
sum = 0;
for (let index in arr6)
{
    sum += arr6[index];
}
console.log("Rezultatas: arr6")
average = sum / arr6.length;
console.log(average);

// Pavyzdys

for(let x of arr6)
{
    console.log(x);
}

for(let x in arr6)// in = index, kad isiminti
{
    console.log(x);
}

// atvirkstinis ciklas
for (let i = 70; i >= 0; i--){
    console.log(i)
}

// Pasibandymas is namu darbu: pasalinti cisus lyginius skaicius:
/* const arr7 = generateArrayOfrandomNumbers2(1, 1000, 30);
console.log(arr7);
for (let index in arr7){
    if (arr7[index] % 2 === 0){
        arr7.splice(index, 1);
        index--;//neveikia sita salyga todel negalima isspresti sito uzdavinio su for in budu
    }
}
console.log(arr7); */

// ------------------------------------------------- FILTER metodas ---------------------------------------------------------------
// Pasalinti visus lyginius elementus:
const masyvas = [6, 2, 9, 5, 12];
let filteredValues = masyvas.filter((num) =>{
    return num % 2 !== 0;
});
console.log("Rezultatas: filteredValues");
console.log(filteredValues);

// Sita funkcija galima ikelti i masyyvas.filter() skliaustus
/* const filterFunction = (num) =>{
    // sita funkcija turi grazinti:
    // true
    // false
    return num % 2 !== 0;
} */
let filteredValues2 = masyvas.filter((num) =>{
    return num > 7;
});

//praeje filtra elementai lieka filteredValues masyve
console.log("Rezultatas: filteredValues2");
console.log(filteredValues2);
// Masyvas po filtracijos lieka nepakites
console.log(masyvas)

// kaip ir if'e jei viena salyga galima salinti skliaustus ir return ir palikti tiek:
let filteredValues3 = masyvas.filter((num) => num > 7);
console.log("Rezultatas: filteredValues3");
console.log(filteredValues3);

// kad geriau suprasti cia pateikiamas pradzioje mokintas function aprasymko budas:
let filteredValues4 = masyvas.filter(function(num){
    return num === 2;
})
console.log("Rezultatas: filteredValues4");
console.log(filteredValues4);

// filter privalu nurodyti value kiti neprivalomi, dar gali buti index, array, tai zemiau pavyzdys, kuriame ieskoma paggal value ir index:
let filteredValues5 = masyvas.filter(function (num, index){
    console.log(`indeksas: ${index}, reiksme: ${num}`)
    // return num % 2 === 1;
    return index === 0;
})
console.log("Rezultatas: filteredValues5");
console.log(filteredValues5);

const varduMasyvas = ["Petras", "Ona", "Justinas", "Lina"];
let filteredName = varduMasyvas.filter(function(value){
    return value.length >= 4;
})
console.log("Rezultatas: filteredName more then 4 letters ");
console.log(filteredName);
//  trumpesnis uzrasymo budas:
filteredName = varduMasyvas.filter((value)=>{
    return value.length <=4
})
// dar trumpesnis:
filteredName = varduMasyvas.filter((value) => value.length <=4)
console.log("Rezultatas: filteredName less then 4 letters ");
console.log(filteredName);
// jei papildoma salyga tada reik skliausteliu:
filteredName = varduMasyvas.filter((value) => (value.length <=4 && value[0]==='L' && value[value.length - 1]==='a'))
console.log("Rezultatas: filteredName less then 4 letters ");
console.log(filteredName);

//salyga kai reikia return:
filteredName = varduMasyvas.filter((value) => {
    if (value.length === 4)
    {
        return true;
    }
    else{
        return false;
    }
})
console.log("Rezultatas: filteredName less then 4 letters ");
console.log(filteredName);

// ------------------------------------------------- MAP metodas ---------------------------------------------------------------
// map metodas pakeicia visas masyvo reiksmes

let masyvas2 = [6, 2, 9, 5, 12];
//padaugginti visus masyvo reiksmes is 2:
let modifikuotasMasyvas = masyvas2.map((value) => value*2);
console.log("Rezultatas: modifikuotasMasyvas");
console.log(modifikuotasMasyvas);
// prideti prie masyvo reiksmes paties masyvo indeksa:
modifikuotasMasyvas = masyvas2.map((value, index) => value + index);
console.log("Rezultatas: modifikuotasMasyvas");
console.log(modifikuotasMasyvas);
// tas pats tik su returnu:
modifikuotasMasyvas = masyvas2.map((value, index) => {
    console.log(`indeksas: ${index}, reiksme: ${value}`)
    return value + index;
});
console.log("Rezultatas: modifikuotasMasyvas");
console.log(modifikuotasMasyvas);
//isvesti tuos kurie mazesni uz 5 ir juos padauginti is 0:
modifikuotasMasyvas = masyvas2.map((value, index) => {
    if (value < 5){
        return value * 0;
    }
    else{
        return value;
    }
});
console.log("Rezultatas: modifikuotasMasyvas");
console.log(modifikuotasMasyvas);
// teksto iterpimas
modifikuotasMasyvas = masyvas2.map((value, index) => {
    if (value < 5){
        return value + "tekstas";
    }
    else{
        return value;
    }
});
console.log("Rezultatas: modifikuotasMasyvas");
console.log(modifikuotasMasyvas);
//---------------------------------------------- REDUCE metodas -----------------------------------------------------
//grazina rezultata operacijos su visais elementais

let masyvas3 = [7, 2, 9, 5, 12];
// console.log("Rezultatas: masyvas3");
console.log(masyvas3);
// let suma = masyvas3.reduce((total, value) => total + value);
suma = masyvas3.reduce((total, value) => {
    console.log(`total: ${total}, reiksme: ${value}`);
    return total + value;
});
// vidurkio apskaiciavimas
console.log(suma/masyvas3.length);

// let suma2 = masyvas3.reduce((total2, value2) => {
    // console.log(`total: ${total2}, reiksme: ${value2}`);
    // return total2 - value2;
// });

// console.log(suma2);
//total yra suma ir ji taip atlieka veiksmus:
// pirma iteracija 0 +6 = 6???
// antra iteracija 6 + 2 = 8
// trecia iteracija 8 + 9 = 17
// ketvirta iteracija 17 + 5 = 22
// penkta iteracija 22 + 12 = 32

// atimant:
// pirma iteracija 0 - 6 = -6????
// antra iteracija -6 - 2 = -8
// trecia iteracija -8 - 9 = -17
// ketvirta iteracija -17 - 5 = -22
// penkta iteracija 22 + 12 = 32

//---------------------------------------------- SOME metodas -----------------------------------------------------
// tikrinimas ar bet vienas is masyvo elementu atitinka salyga
let masyvas4 = [6, 2, 9, 5, 12];

//atliekamas tikrinimas ar bent vienas elementas is masyvo yra didesnis nei 10
let isThereNumberLlargerThan10 = masyvas4.some((value)=> value > 10);
console.log("Rezultatas: isThereNumberLlargerThan10");
console.log(isThereNumberLlargerThan10);
// rezultatas: true - bent vienas masyvo elementas atitiko salyga

//---------------------------------------------- EVERY metodas -----------------------------------------------------
// tikrinima ar visi is masyvo elementu atitinka salyga
let isEveryNumberLargerThan1 = masyvas4.every((value)=> value > 1);
console.log("Rezultatas: isEveryNumberLargerThan1");
console.log(isEveryNumberLargerThan1);

//---------------------------------------------- SORT metodas -----------------------------------------------------
// 
masyvas4.sort();
console.log("Rezultatas: sorted masyvas4");
console.log(masyvas4);
// klausimas Gedui kodel nesuveike?

masyvas4.sort((a, b)=> {
    console.log(`a reiksme: ${a}, b reiksme ${b}`);
    return a-b;
    // jei grazinamos reiksmes:
    // > 0 sort a after b, e.g. [b, a];
    // < 0 sort a before e.g. [a, b];
    //=== 0 keep original order of a and b
});

console.log("Rezultatas: sorted masyvas4");
console.log(masyvas4);

let masyvas5 = generateArrayOfrandomNumbers(-100, 100, 100);
console.log(masyvas5);

masyvas5.sort()
console.log(masyvas5);

masyvas5.sort((a, b)=> {
    return a-b;
});
console.log(masyvas5);

// pakeisti sortinimo kita kriptim b-a
masyvas5.sort((a, b)=> {
    return b-a;
});
console.log(masyvas5);

//---------------------------------------------- FIND metodas -----------------------------------------------------
// find - Gražins primą elementą kuris praėjo testą.
masyvas4 = [6, 2, 9, 5, 12];

const findArray = masyvas4.find((num) => num > 8);
console.log("Rezultatas: findArray");
console.log(findArray);

//---------------------------------------------- findIndex metodas -----------------------------------------------------
// findIndex - Gražins pirmo elemento indeksą masyve kuris praeis testą.
const findIndexArray = masyvas4.findIndex((num) => num > 8);
console.log("Rezultatas: findIndexArray");
console.log(findIndexArray);

