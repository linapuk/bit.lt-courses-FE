// Funkcijos -------------------------------

// Funkciju sudarymas
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// pavertimas funkcija sios operacijos:   let rez = sk **=2, "skaiciai" yra parametras ir nera pavadinimas naudojamas uz funkcijos ribu
function categoryOneCalculation(skaicius){
    let rezz = skaicius **2;
    return rezz;
}

function categoryThreeCalculation(skaicius){
    let desimtys = skaicius % 10;
    let rezz = skaicius - desimtys;
    return rezz;
}

function categoryFourCalculation(skaicius){
    let vienetai = Math.floor(skaicius / 10);
    let rezz = (skaicius + vienetai) / 2;
    return rezz;
}

function categoryFiveCalculation(){
    let aa = rand(97,122), 
        bb = rand(97,122), 
        cc = rand(97,122), 
        dd = rand(97,122);
    let stringas = 
        String.fromCharCode(aa) + 
        String.fromCharCode(bb) + 
        String.fromCharCode(cc) + 
        String.fromCharCode(dd);
        return stringas;
}

let skk = rand(0, 99);
// Kategorija 1: 0  - 10 - pakelti skaičių kvadratu ir atspausdinti
if(skk <= 10){
    // operatorius ** - pakelia tam tikru laipsniu sk**=2 panaudojan auksciau aprasyta funkcija
    let rezz = categoryOneCalculation(skk);
    console.log(`Skaiciuss: ${skk}\t Kategorija: 1,  \t Rezultatas: ${rezz}`);
    // gaimas ir dar toks variantas, nes galima i riestinius skliaustus irasyti e tik kintamaji, bet ir visa israiska:
    // let rezz = categoryOneCalculation(skk); <- tada sitos eilutes nebereikia rasyti
    // console.log(`Skaiciuss: ${skk}\t Kategorija: 1,  \t Rezultatas: ${categoryOneCalculation(skk)}`);
}

else if(skk >= 11 && skk <= 19)
{
    console.log(`Skaicius: ${skk}\t Kategorija: 2,  \t Rezultatas: ${skk}`);
}

else if(skk >= 20 && skk < 49 && skk % 2 === 0)
{
    let rezz = categoryThreeCalculation(skk);
    console.log(`Skaicius: ${skk}\t Kategorija: 3,  \t Rezultatas: ${rezz}`);
}

else if(skk >= 20 && skk < 49 && skk % 2 !== 0)
{
    // let rezz = categoryFourCalculation(skk);
    console.log(`Skaicius: ${skk}\t Kategorija: 4,  \t Rezultatas: ${categoryFourCalculation(skk)}`);
}

else if(skk >= 50 && skk % 3 ===  0)
{
    console.log(`Skaicius: ${skk}\t Kategorija: 5,  \t Rezultatas: ${categoryFiveCalculation()}`);
}

else {
    console.log(`Skaiciuss: ${skk}, nepriklauso neivienai kategorijai`);
}