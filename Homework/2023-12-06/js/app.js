function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Naršyklėje nupieškite linija iš 400 “*”. 
// a. Naudodami css stilių “suskaldykite” liniją taip, kad visos žvaigždutės matytųsi ekrane;
// b. Programiškai “suskaldykite” žvaigždutes taip, kad vienoje eilutėje nebūtų daugiau nei 50 “*”; 
console.log("Uzduotis a:")

let resultElementA = document.querySelector("#a");
let splat = '';
for (i = 0; i < 400; i++){
    splat += '*';
}
resultElementA.innerText = splat;


// console.log(splat.length);

console.log("Uzduotis b:")

// for (i = 0; i < 400; i++){
//     let star = "* ";
//     if ((i+1) % 50 === 0)
//     star +='<br>';
// document.write(star);
// }

let star = "";//kodel negaliu panaudoti splat?
for (i = 0; i < 400; i++){
    star = "* ";
    if ((i+1) % 50 === 0)
    star +='<br>';
    document.write(star);//kodel reik sita viduje parasyti?
}

// Naudokite funkcija rand(). Sugeneruokite atsitiktinį skaičių nuo 1 iki 6 ir jį atspausdinkite atitinkame h tage. Pvz skaičius 3- rezultatas: <h3>3</h3>
console.log("Uzduotis 1:")

let resultElementH = document.querySelector("#resultH");
let randomNamberH = rand(1,6);
resultElementH.innerHTML=`<h${randomNamberH}>Sveiki prisijunge prie puslapio REZULTATAS H${randomNamberH}</h${randomNamberH}>`;


// Naudokite funkcija rand(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti žali, 0 - raudonas, didesni už 0 mėlyni.
console.log("Uzduotis 2:")

for (i = 0; i < 3; i++){
    let randomNumberSecond = rand(-10, 10)
    if (randomNumberSecond < 0){
        document.write(`<span class="green">${randomNumberSecond}</span> `);
    }
    else if (randomNumberSecond === 0)
    {
        document.write(`<span class="red">${randomNumberSecond}</span> `);
    }
    else {
        document.write(`<span class="blue">${randomNumberSecond}</span> `);
    }
}

// Sukurkite kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”
console.log("Uzduotis 3:")
document.write("<br></br>")

let text = "2001: A Space Odyssey";
let textResult = "";
for (i=0; i < text.length; i++ ){
let textLowerCase = text.toLowerCase()[i]; 
    if (textLowerCase !== 'a' && textLowerCase !==  'e' && textLowerCase !==  'i' && textLowerCase !==  'o' && textLowerCase !==  'u' && textLowerCase !==  'y'){
        textResult += text[i];
    }
}
document.write(textResult)

// Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti. Jeigu reikia, panaudokite css, kad visi rezultatai matytųsi ekrane.
console.log("Uzduotis 5:")
document.write("<br></br>")

let number3000 = 0;
let result3000 = [];
for (let i = 0; i < 3000; i++){
    number3000 ++;
    if (number3000 % 77 === 0){
        result3000.push(number3000);
    }
}

for (let i=0; i < result3000.length ; i++ ){
    if (result3000.length - 1 === i)
    {
        document.write(`${result3000[i]}.`);
    }
    else{
        document.write(`${result3000[i]}, `);  
    }
}
console.log(result3000)

// Duotas vardų masyvas, kuriame visi vardai prasideda mažąja raide. Reikia sukurti algoritmą, kuris visus vardus konvertuoja į iš didžiosios raidės prasidedančius vardus:
console.log("Uzduotis 6:")
document.write("<br></br>")

let namesArray = [
	'alice', 'bob', 'charlie', 'david', 'emily',
	'frank', 'grace', 'harry', 'isabella', 'jack',
	'kate', 'liam', 'molly', 'nathan', 'olivia',
	'peter', 'quinn', 'rachel', 'steve', 'tina'];

    for (i = 0 ; i <namesArray.length; i++){
        console.log(namesArray[i][0].toUpperCase()+namesArray[i].slice(1));
    }
