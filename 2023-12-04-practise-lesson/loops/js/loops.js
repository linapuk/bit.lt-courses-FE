console.log("Ciklals WHILE")
let i = 0;
while(i <= 5)
{
    console.log(i);
    i++;//prideda 1
}

console.log("Ciklas WHILE ir masyvas")
let zmones = ["petras", "Jonas", "Justinas", "Jurate", "Kastytis", "Tomas"];

//Norim Petras atvaizduoti didziosiomis raidemis, tai be ciklo atrodytu taip:
// console.log(zmones[0].toUpperCase());
// console.log(zmones[1].toUpperCase());
// console.log(zmones[2].toUpperCase());
// console.log(zmones[3].toUpperCase());
// console.log(zmones[4].toUpperCase());

// kai nezinom, koks galutinis skaicius duomenu taikome si metoda, zmones.length - paima kiek records yra viename masyve.
while(i < zmones.length)
{
    console.log(zmones[i].toUpperCase());
    i++;
}

// while(i < 5)
// {
//     console.log(zmones[i].toUpperCase());
//     i++;
// }

// begalinis ciklas (kai salygoje yra 'true'), nerekomenduojamas, bet ji galima nutraukti su komanda 'break':
// while (true)
// {
//     console.log(i);
//     if (i === 100) break;
//     i++
// }

// do/while  - pirma atlieka do dallies veiksmus ir tada pradeda while tikrinima. Sitas priesingas while 3 eiluteje aprasytam, nes ten pirma atlieka patikrinima, o tada atlieka veiksmus.
// do{
//  i++
// }
// while (i < 10)

for(let indeksas = 0; indeksas < 10; indeksas++)
{
    console.log(indeksas);
}

// WHILE naudoti kai norimas begalinio ciklo arba skaitomas failas
// FOR naudoti kai turime apibrezta ciklu skaiciu

// galima kaip ir su IF (jei buna tik viean salyga, tai galima generalizuoti i viena eilute)
// for(let indeksas = 0; indeksas < 10; indeksas++) console.log(indeksas);

// Ciklas kuris atspausdina tik lyginius skaicius
console.log("Ciklas lyginiams skaiciui")
for(let lyginis = 0; lyginis < 10; lyginis++)
{
    if(lyginis % 2 === 0)
    {
        console.log(lyginis);
    } 
}

console.log("Ciklas nelyginiams skaiciams")
for(let nelyginis = 0; nelyginis < 10; nelyginis++)
{
    if(nelyginis % 2 !== 0)// galima ir taip uzrasyti-> if(nelyginis % 2 === 1)
    {
        console.log(nelyginis);
    } 
}

console.log("Ciklas kas ketvirtam skaiciui atvaizduoti (mano sprendimas)")
for(let ketvirtas = 100; ketvirtas < 1000; ketvirtas++)
{
    if(ketvirtas % 4 === 0)
    {
        console.log(ketvirtas);
    } 
}

console.log("Ciklas kas ketvirtam skaiciui atvaizduoti (klases sprendimas)")
for(let kketvirtas = 100; kketvirtas < 1000; kketvirtas+=4)
{
    console.log(kketvirtas); 
}

// console.log("10x10 zgaigzduciu kvadratas")
// for(let kvadratas =0; kvadratas < 10; kvadratas++)
// {
//     document.write('* * * * * * * * * * *<br>'); 
// }

// console.log("Homework hint 1 uzduotis")

// let n = 100;
// for(let k =0; k < n; k++)
// {
//     let eilute = "";
//     document.write('* * * * * * * * * * *<br>'); 
//     for()
//     {

//     }
//     eilute +="<br>"
// }

console.log("Homework hint 2 uzduotis")

let n = 100;
let simbolis = `<black>*</black>`, redSimbolis = `<red>*</red>`;
for(let k =0; k < n; k++)
{
    let eilute = "" + redSimbolis + redSimbolis + simbolis;
    eilute +="<br>"
    document.write(eilute)
}