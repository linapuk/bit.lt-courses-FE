// && -> AND operatorius || -> OR operatorius

// let x = 5;
// if (x < 10 && x > 2)/* abi salygos turi buti tiesa */
// if (x < 10 || x > 2 || y < 8 )/* nors viena salygos turi buti tiesa */

// sugeneruoja skaiciu nuo min iki max reiksmes

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* console.log(Math.random());

let sk = rand(10,100);
console.log(sk);
// 1 kategorija - nuo 20 iki 50
if(sk >= 20 && sk <= 50 && sk % 2 === 0 )
{
    console.log("Skaicius" + " " + sk + " papuola i 1 kategorija")
} */

// -----------------------------------------------------------------------------

/* Sąlyga: Generuojamas skaičius tarp 0 ir 99;

Žemiau pateiktos kategorijos. Sugeneruotas skaičius papuola į
Vieną iš šių kategorijų. Kiekviena kategorija turi savo operaciją
Tą operaciją reikia atlikti. Operacijos rezultatas turi būti išspausdintas su console.log();

Kategorija 1: 0  - 10 - pakelti skaičių kvadratu ir atspausdinti
Kategorija 2: 11 - 19  - atspausdinti skaičių tokį koks jis yra;
Kategorija 3: 20 - 49  ir skaičius yra lyginis: Skaičiaus dešimtis atimti iš paties skaičiaus ir atspausdinti
Kategorija 4: 20 - 49  ir skaičius yra nelyginis: Skaičiaus vienetus pridėti prie paties skaičiaus ir padalinti iš 2. Galiausiai atspausdinti;
Kategorija 5: >= 50 ir skaičius dalinasi iš 3 be liekanos: Sudarykite atsitiktinį stringą iš 4 raidžių ir jį atspausdinkite
Visais kitais, nepaminėtais atvejais išvesti: skaičius netinkamas nei vienai kategorijai;

Rezultatas:
Iškritus bet kuriai sąlygai atspausdinti, kokią sąlygą skaičius atitiko
PVZ. sugeneruotas skaičius 28:
Skaičius - 28, Kategorija 3, operacijos rezultatas: 26 */

let sk = rand(0,99);
// Kategorija 1: 0  - 10 - pakelti skaičių kvadratu ir atspausdinti
if(sk <= 10){
    // operatorius ** - pakelia tamtikru laipsniu sk**=2
    let rez = sk **=2
    console.log(`Skaicius: ${sk}\t Kategorija: 1,  \t Rezultatas: ${rez}`);
}

else if(sk >= 11 && sk <= 19)
{
    console.log(`Skaicius: ${sk}\t Kategorija: 2,  \t Rezultatas: ${sk}`);
}

else if(sk >= 20 && sk < 49 && sk % 2 === 0)
{
    // let desimtys = +sk.toString()[0];/* tam kad galeciau paimti pirma skaiciaus reiksme turiu paversti i stringa, o veliau kad galeciau  atlikti matematinius veiksmus, turiu konvertuoti atgal i skaitine reiksme t.y. todel prirasomas + */
    let desimtys = sk % 10;
    let rez = sk - desimtys;
    console.log(`Skaicius: ${sk}\t Kategorija: 3,  \t Rezultatas: ${rez}`);
}

else if(sk >= 20 && sk < 49 && sk % 2 !== 0)
{
    // let vienetai = +sk.toString()[1];
    let vienetai = Math.floor(sk / 10);
    let rez = (sk + vienetai) / 2;
    console.log(`Skaicius: ${sk}\t Kategorija: 4,  \t Rezultatas: ${rez}`);
}

else if(sk >= 50 && sk % 3 ===  0)
{
    let a = rand(97,122), 
        b = rand(97,122), 
        c = rand(97,122), 
        d = rand(97,122);
    let stringas = 
        String.fromCharCode(a) + 
        String.fromCharCode(b) + 
        String.fromCharCode(c) + 
        String.fromCharCode(d);
    console.log(`Skaicius: ${sk}\t Kategorija: 5,  \t Rezultatas: ${stringas}`);
}

else {
    console.log(`Skaicius: ${sk}, nepriklauso neivienai kategorijai`);
}
