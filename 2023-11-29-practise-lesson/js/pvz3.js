//sudarysime programą, kuri atspausdina savaitės dienos pavadinimą, pagal tai,
//kokia kintamojo diena skaičiaus reikšmė. 1 - pirmadienis, 2 -antradienis ir t.t

// let data = '2023-11-29';
// let menuo = data[5] + data[6];

// if (menuo === '01'){
//     console.log('Sausis')
// }
// if (menuo === '02'){
//     console.log('Vasaris')
// }
// if (menuo === '03'){
//     console.log('Kovas')
// }
// if (menuo === '04'){
//     console.log('Balandis')
// }


let diena = 4;

if (diena === 1)
{
    console.log('pirmadienis');
}
else if (diena === 2) {
    console.log('antradienis');
}
else if (diena === 3) {
    console.log('treciadienis');
}
else if (diena === 4) {
    console.log('ketvirtadienis');
}
else if (diena === 5) {
    console.log('penktaienis');
}
else if (diena === 6) {
    console.log('sestadienis');
}
else if (diena === 7) {
    console.log('sekmadienis');
}
else {
    console.log('nera savaites diena');
}

// && AND

if (diena <= 7 && diena >= 1)
{
    if (diena % 2 === 0) 
    {
        console.log('lygine');
    }
    else {
        console.log('nelygine');
    }
}
