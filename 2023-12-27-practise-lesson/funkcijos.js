function showMessage1(){
    console.log("Pasisveikinimas")
}
showMessage1();// Tam kad funkcija suveiktu reikia ja iskviesti

// Parametru naudojimas funkcijoje
// tai kas yra funkcijos deklaracijos yra PARAMETRAS
function showMessage2(message){
    console.log(message);
};
// tai kas yra iskvietime tarp skliaustų yra ARGUMENTAS
showMessage2("Labas pasauli"); // pasiima "Labas pasauli" argumentą ir panaudoją jį atlikti funkcijai showMessage2

// --------------------------------BŪDAI APRAŠYTI FUNKCIJAS---------------------------------------

// PIRMAS būdas:
function showMessage3(message){
    console.log(message);
};
showMessage3("PIRMAS būdas"); 

// ANTRAS būdas (funkcijos aprašymas kintamajame, kaip anonimine funkcija):
const showMessage4 = (message) => {
    console.log(message);
}
showMessage4("ANTRAS būdas"); 
// antruoju būdu negalime iškviesti funkcijos prieš deklaracija t.y. taip aprašant bus gaunama klaida:
// showMessage4("ANTRAS būdas (prieš deklaracija)"); 
// const showMessage4 = (message) => {
//     console.log(message);
// }

// TREČIAS būdas
const showMessage5 = function (message){
    console.log(message);
}
showMessage5("TREČIAS būdas");  
// tre2iuoju būdu irgi negalime iškviesti funkcijos prieš deklaraciją

// --------------------------------FUNKCIJOS SKIRTOS INKAPSULIUOTI KODĄ---------------------------------------

// Uzduotis funcijai: Is dvieju skaiciu turi grazinti ta, kuris yra didesnis
function findBiggerValue1(a, b){
    if (a>b) return a;
    else return b;
}
console.log(findBiggerValue1(4, 5));// kai funkcija igauna kazkokia reiksme, galima tai panaudoti REKURSIJOJE ir su CALL BACK'ais

// jei nera nurodoma, kokia reiksme turetu grazinti funkcija, arba kaip siuo atveju arkumentas nebuvo nurodytas, rezultate gaunama reiksme UNDEFINED
console.log(showMessage5())

//funkcijos aprašymas - Funkcija Funkcijoje, galima susigrazinti boolian tipo reiksme ir veliau ja panaudoti vietoj sio palyginimo (a>b) :

function findBiggerValue2(a, b){
    function isABiggerThanB(aValue, bValue){ // aValue, bValue - tokios reiksmes kad nesimaisytu su a,b
        return aValue>bValue;
    }
    // SCOP'ai - negalima issikviesti funkcijos "isABiggerThanB" uz funkcijos "findBiggerValue2" ribu!
    console.log(isABiggerThanB(a, b));  // grazinama boolean reiksme
    if (isABiggerThanB(a, b)) return a;
    else return b;
}
console.log(findBiggerValue2(3, 8));

// Funkcija funkcijoje nera rekomendujama praktika, geriau vengti! Todel geriau iskelti vidine funkcija i isore, kaip pvz:
function isABiggerThanB(aValue, bValue){
    return aValue>bValue;
}
function findBiggerValue2(a, b){
    if (isABiggerThanB(a, b)) return a;
    else return b;
}
console.log(findBiggerValue2(3, 8));

// Funkcijos panaudojimas, kai paduodamas neribojamas kiekis parametru:
// Uzduotis funcijai: surasti maksimalia reiksme is masyvo
function findMaximumValue(...args) { // "args" priima neribota kieki parametru . "...kintamasis" - vadinasi SPREAD operatorius
    console.log(args);
    let max = '';
    for(let index in args){
        if(args[index] > max)max = args[index]; //jei args[index] > max yra tiesa, tada priskiriam max kintamajam ta args reiksme
    }
    console.log(max);
}
findMaximumValue(...[4, 7, 40, 100, 4]); //... jis tieisog isskaido is masyvo reiksmes

// Math. biblioteka - jau anotacijoje max nurodoma, jog reikia pateikti isspreadintas masyvo reiksmes
console.log(Math.max(1, 3, 5, 24, 244, 5, 23));
// gaunama klaida NaN nes iesko skaiciaus, o cia "Number" nera skaicius
console.log(Math.max(1, 3, 5, 24, 244, 5, 23,"Number"));
// taciau ikelus i ankksciau sukurta funnkcija veikia max reiksmes paieska:
findMaximumValue(1, 3, 5, 24, 244, 5, 23,"Number");
// jei lygiamas tekstas su skaiciumi pvz "Number">4 ir nesvarbu kaip(>,<,===,!==)->  js visada grazina "false" reiksme

// --------------------------------FUNKCIJOS kaip parametra priima funkcija---------------------------------------
// pavyzdys, kai prie event pridedame event listener'į, kaip parametras paduodamas anoniminė funkcija. Eiga:
// 1. HTML'e sukurem div su class="pienas"
// 2. pasirenkamas elementas su querySelector, tada šitam elementui pridedam listener. Pirmiausiai paduodamas tipas "click", o tada funkcija
document.querySelector(".pienas").addEventListener("click",()=>{
    console.log("Neliesk!")
});


// --------------------------------CALLBACK---------------------------------------
// sios funkcijos viduje yra iskvieciama funkcija
function callBackFunction(message, callBack){
    console.log(message);
    callBack();
}
// reik pasiduoti antra parametra callBack, IVYKDOMA funkcija, tokia kokia paduodama cia anonimineje funkcijoje:
callBackFunction("Labas pasauli",() => {
    console.log("Funkcijos pabaiga");
});

callBackFunction('',() => {
    console.log("Dar ne pabaiga");
})

// --------------------------------REKURSIJA---------------------------------------
// Tai funkcija, kuri pati save iskviecia.Jos panaudojimas galetu buti duomenu strukturose B-Tree, kai iteruojamas medis per daug skirtingu duomenu.
// rekursija gali veikti taip pat kaip ciklas. paduodama funkcijai reiksme ir kol ji nera pasiekkiama, tol ji iskviecia pati save

function recursion(value){
    console.log("value: "+ value);
    if(value < 10) 
        recursion(value + 1);
        console.log(value);
}

recursion(4);
//rekursijos specialus veikimas yra tas - jog ji yra grizinejanti, kai pasiekia salyga, tada vel griztama i aukstene funnkcija inicijuoja ir taip kol griztama iki "value" parametro.

//Rekursija dar gali buti panaudojama apskaiciuojant faktoriala (n! - visu skaiciu sandauga) 4!=1*2*3*4;
function factorial(n){
    console.log(n)
    if(n===1){
        return 1;
    }
    else {
        return n * factorial(n-1);
    }
}
console.log("Faktorialo rezultatas:")
console.log(factorial(3)); //3!=3*2*1 = 6

// --------------------------------CALLBACK uzduotys---------------------------------------
console.log("Uzduotis nr 1")
// 1. Sukurti funkcija, kuri apskaičiuoja pažymių vidurkį.
function countAverage(...pazymiai){
    let sum = 0;
    for(let pazymis of pazymiai){
        sum+=pazymis;
    }
    console.log(sum)//pasitikrinti ar gavau visa suma teisingai
    let average = sum / pazymiai.length;
    return average;
}
countAverage(1, 8, 7, 6,10);
console.log(countAverage(1, 8, 7, 6,10))


// 2. Sukurti funkciją, kuriai paduodamas skaičių masyvas.
// Jei masyve daugiau nei 6 elementai - kiekvieną elementą padalinti iš 2.
// Kitu atveju padauginti visus elementus iš 2.
// Gražinti visų masyve esančių elementų vidurkį.
// tikrinimą daryti išorėje.

// 1. Tikrinti ar masyve daugiau nei 6 elementai:
// - Jei taip:
// Iskviesti funkcija, kuri apskaiciuoja vidurki padalindama visus skaicius is 2.
// - Jei ne:
// Iskviesti funkcija, kuri apskaiciuoja vidurki padaugindama visus skaicius is 2.
// 2. Funkcijos viduje patikrinti ar paduodamas argumentas yra masyvas.
// 3. Apskaiciuoti rezultatinio masyvo elementu reiksmes.
// 4. Apskaiciuoti rezultatiniomasyvo elementu suma.
// 5. Apslaiciuoti vidurki padalinant visa elementu suma is elementu kiekio.
// 6. Grazinti vidurki.

// IDEJA
// if (Array.length > 6){
// function([1, 4, 7,9]), ()+>{})
// }
// else{
// }

const arr =[4, 7, 8, 9, 10, 11, 12]

if(arr.length > 6 ){
    // funkcija, kuri padalina visus elementus is 2 ir apskaiciuoja vidurki
    countAverageSpecial(arr, dividedAllElementsByTwo)
}
else{
    // funkcija, kuri padalina visus elementus is 2 ir apskaiciuoja vidurki
    countAverageSpecial(arr, multiplyAllElementsByTwo)
}

function dividedAllElementsByTwo(array){ // si funkcija panaudojama kaip parametras
    for(let index in array){
        array[index]/=2
    }
    return array;
}

function multiplyAllElementsByTwo(array){ // si funkcija panaudojama kaip parametras
    for(let index in array){
        array[index]*=2
    }
    return array;
}

// console.log(multiplyAllElementsByTwo([4, 10, 20]));
// console.log(dividedAllElementsByTwo([4, 10, 20]));

function countAverageSpecial(array, callBack){ //callBack funkcijos darbas bus padauginti arba padalinti visus sk. is 2
    if(typeof array !== 'object')return 0;
    const resultArray = callBack(array);
    // console.log(resultArray)
    let sum = 0;
    for (let value of resultArray){
        sum += value;
    }
    let average = sum/ array.length
    // console.log(average)
    return average;
}