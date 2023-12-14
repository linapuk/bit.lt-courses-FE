function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// let sk = rand(0,99);
let sk = 66;
// Kategorija 1: 0 – 5. skaičius dauginamas iš 3
if(sk <= 5){
    let rez = sk * 3
    console.log(`Skaicius: ${sk}\t Kategorija: 1,  \t Rezultatas: ${rez}`);
}
// Kategorija 2: 6 – 15. iš skaičiaus atsiima 4 ir rezultatas pakeliamas kvadratu
else if(sk >= 6 && sk <= 15)
{
    let rez1 = sk - 4 ;
    let rez2 = rez1 **= 2 ;
    console.log(`Skaicius: ${sk}\t Kategorija: 2,  \t Rezultatas: ${rez2}`);
}
// Kategorija 3: 16 - 30 ir dalijasi iš 5. Prie skaičiaus pridedame 10
else if(sk >= 16 && sk <= 30 && sk % 5 === 0)
{
    let rez = sk + 10;
    console.log(`Skaicius: ${sk}\t Kategorija: 3,  \t Rezultatas: ${rez}`);
}
// Kategorija 4: 31 - 45 ir skaičius nelyginis. Skaičių atimame iš 100
else if(sk >= 31 && sk <= 45 && sk % 2 !== 0)
{
    let rez = 100 - sk;
    console.log(`Skaicius: ${sk}\t Kategorija: 4,  \t Rezultatas: ${rez}`);
}
// Kategorija 5: 46 – 99 ir skaičiai pasibaigiantys 6 arba 7. Skaičių daliname iš 4
else if(sk >= 46 && (sk % 10 === 6 || sk % 10 === 7))
{
    let rez = sk / 4;
    console.log(`Skaicius: ${sk}\t Kategorija: 5,  \t Rezultatas: ${rez}`);
}
else {
    console.log(`Skaicius: ${sk}, nepriklauso neivienai kategorijai`);
}
