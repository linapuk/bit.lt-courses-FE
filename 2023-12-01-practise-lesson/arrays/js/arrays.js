function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 7. Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. 

// buves variantas iki masyvo:
// let kint1 = rand(0,2), 
//     kint2 = rand(0,2),
//     kint3 = rand(0,2),
//     kint4 = rand(0,2);

// I BUDAS -> naujo aray sukurimas su pradiniais 4 kintamaisiais
// let kint = new Array(4);
// kint[0] = rand(0,2);
// kint[1] = rand(0,2);
// kint[2] = rand(0,2);
// kint[3] = rand(0,2);
// kintamojo pridejimas
// kint.push(10)

// kint = new Array(4).fill(1); priskiria 1 reiksme visiems kintamiesiems

// II BUDAS -> naujo aryay sukurimas su pradinemis reiksmemis
// let kint [1, 10, 13, ... 16]

// let kintamais = [2, 4, 5, 6, 10].fill("stringai")
// console.log(kintamais);

// Naujo tuscio array suukurimas
// let kint = [];

let kint = [rand(0,2), rand(0,2), rand(0,2), rand(0,2)];
console.log(kint);
console.log(kint[1]);/* elemento is masyvo reiksmes paemimas pagal index */

// .fill(x) uzpildo visus masyvo elementus x reiksme
let count = new Array(3).fill(0);

if (kint[0] === 0) count[0]++;
else if (kint[0] === 1) count[1]++;
else count[2] ++;

if (kint[1] === 0) count[0]++;
else if (kint[1] === 1) count[1]++;
else count[2] ++;

if (kint[2] === 0) count[0]++;
else if (kint[2] === 1) count[1]++;
else count[2] ++;

if (kint[3] === 0) count[0]++;
else if (kint[3] === 1) count[1]++;
else count[2] ++;


console.log(`Skaiciu 0 - ${count[0]}\t 1 - ${count[1]}\t 2 - ${count[2]}`);