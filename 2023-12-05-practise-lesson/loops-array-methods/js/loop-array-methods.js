//1. Užduotis: sukurkite fibonacci skaičių seką susidarančią iš 50 skaičių.
console.log("1. Užduotis");

let fibonacci = [0,1];

// Galimi du budai apskaiciuoti:
// I budas - elementoo idejimas i masyvo vieta pagal indeksa.
// fibonacci[2] = fibonacci[1] + fibonacci[0];

// II budas - elementoo pridejimas prie masyvo galo
// fibonacci.push(fibonacci[1] + fibonacci[0]);//push - pasako, jog pridedam prie masyvo galo, nenurodome tikslios pozicijos.
// console.log(fibonacci);

// Sprendimas I budu:
// for (let i = 2; i < 50; i++)
// {
//     fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
// }
// console.log(fibonacci);//jei sitas ciklo viduje tai gaunu rezultata kiekvieno ciklo!!!

// Sprendimas II budu:
for (let i = 2; i < 50; i++)
{
    fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
}
console.log(fibonacci);

// 2. Užduotis: Masyvo su atsitiksiemis reiksmemis generavimas (1000):
console.log("2. Užduotis");

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let atsitiksiniaiSkaiciai = [];//tuscias masyvas i kuri galim veliau prideti reiksmiu.

// i - realiai yra iteracijos skaicius (apsisukimai), tai nurodau pradini.
for (let i = 0; i < 10; i++)
{
    let randomSkaicius = rand(0,10);
    atsitiksiniaiSkaiciai.push(randomSkaicius);
    // atsitiksiniaiSkaiciai[i] = randomSkaicius; Antras budas taip pat isspresti.
}
console.log(atsitiksiniaiSkaiciai);

// 3. Užduotis: pasinaudodami atsitiktiniu skaiciu masyvu, atspausdinkite tik nelygine reiksme turincius elementus:
console.log("3. Užduotis");

// naudosim ta pati masyva let atsitiksiniaiSkaiciai = [];

for (let i = 0; i < atsitiksiniaiSkaiciai.length; i++)
{   console.log(i+1 + " apsisukimas: atsitiksiniaiSkaiciai[i] =" + atsitiksiniaiSkaiciai[i])
    if (atsitiksiniaiSkaiciai[i] % 2 !== 0)// cikle einamasis elementas 'atsitiksiniaiSkaiciai[i]' yra tikrinamas
    {
    console.log(atsitiksiniaiSkaiciai[i]);
    }
}

// 4. Užduotis: atspausdinkite visas masyvo 'atsitiksiniaiSkaiciai'reiksmes:
console.log("4. Užduotis");

console.log("Atsitiktiniu skaiciu masyvas: " + atsitiksiniaiSkaiciai.length)
for (let i = 0; i<atsitiksiniaiSkaiciai.length; i++ )
{
    console.log(atsitiksiniaiSkaiciai[i]);
}


// 5. Užduotis: suskaiciuokite, kiek masyve yra elementu su reiksme: 2
console.log("5. Užduotis");

let countOfTwo = 0;
console.log(atsitiksiniaiSkaiciai);

for (let i = 0; i<atsitiksiniaiSkaiciai.length; i++ )
{
    if (atsitiksiniaiSkaiciai[i] === 2)countOfTwo ++;
}
console.log("Skaiciu, su reiksme 2 masyve yra:" + countOfTwo);


// 6. Užduotis: suskaiciuokite, kiek masyve yra elementu su reiksme, mazesne nei 5:
console.log("6. Užduotis");

let lessThenFive = 0;
for (let i = 0; i < atsitiksiniaiSkaiciai.length; i++ )
{
    if (atsitiksiniaiSkaiciai[i] < 5)lessThenFive ++;
}
console.log("Skaiciu, mazesniu nei 5 masyve yra: " + lessThenFive);

// 7. Užduotis: suskaiciuokite, kiek masyve yra elementu mazesniu nei 3 arba didesniu nei 7:
console.log("7. Užduotis");

let lessThenThreeMoreThenSeven = 0;
for (let i = 0; i < atsitiksiniaiSkaiciai.length; i++ )
{
    if (atsitiksiniaiSkaiciai[i] < 3 || atsitiksiniaiSkaiciai[i] > 7)lessThenThreeMoreThenSeven ++;
}
console.log("Skaiciu, mazesniu nei 3 arba didesniu nei 7 masyve yra: " + lessThenThreeMoreThenSeven);

// NAUJA TEMA "Array Method"
console.log("------------------------------------");
console.log("Masyvo Operacijos");
console.log("Elemento pridejimas");

let naujasMasyvas = [0, 8, 7, 3, 49, 9, 7];
// Kai norime prideti elementus prie masyvo is GALO:
console.log(naujasMasyvas); // [0, 8, 7, 3, 49, 9, 7]
naujasMasyvas.push(1);//push prideda elementa prie masyvo galo
console.log(naujasMasyvas); // [0, 8, 7, 3, 49, 9, 7, 1]
naujasMasyvas.push(4)
console.log(naujasMasyvas); // [0, 8, 7, 3, 49, 9, 7, 1, 4]

// // Kai norime prideti elementus prie masyvo is PRIEKIO:
naujasMasyvas.unshift(5);
console.log("unshift " + naujasMasyvas)

console.log("Elemento atemimas");
// pvz masyvas [5, 0, 8, 7, 3, 49, 9, 7, 1]
// I budas - istrynimas is pabaigos, atima paskutinius masyvo elemntus [4]
naujasMasyvas.pop()//skliaustuose nenusirodo elemento indeksas, cia visad lieka tusti skliaustai
console.log(naujasMasyvas)


// II budas - istrynimas is pradzios, atima pirmus masyvo elemntus [0]
// pvz masyvas [0, 8, 7, 3, 49, 9, 7, 1]
naujasMasyvas.shift()//skliaustuose nenusirodo elemento indeksas, cia visad lieka tusti skliaustai
console.log(naujasMasyvas)

// III budas - istrynimas is vidurio (gali salinti nne viena) atima vidurio masyvo elemntus [3, 7]
// masyvoPavadinimas.splice(nuoKurioIndekso, SkaiciusKiekSalinaElementu)
// pvz masyvas [0, 8, 49, 9, 7, 1]
naujasMasyvas.splice(2, 2)
console.log(naujasMasyvas)

// is galo atimti su splice metodu sakau, jog nuo galo antros pozicijos atimti 2 reiksmes
// pvz masyvas [0, 8, 49, 9]
naujasMasyvas.splice(naujasMasyvas.length - 2, 2)
console.log(naujasMasyvas)

// is galo atimti su splice metodu paskutine reiksme
// pvz masyvas [0, 8, 49]
naujasMasyvas.splice(-1)
console.log(naujasMasyvas)

// Masyvo elemenntu atspausdinimas pasinaudojant delimiteriu, atvaizduojama stringu
console.log(naujasMasyvas.join());
console.log(naujasMasyvas.join(" - "));
// console.log("<li>" + naujasMasyvas.join("</li><li>") + "</li>");

// Masyvo apsukimas antraip (retai pritaikomas metodas)
// pvz masyvas [49, 8, 0]
naujasMasyvas.reverse();//nereikia priskirti kintamojo t.y. nereikia taip daryti naujasMasyvas = naujasMasyvas.reverse()
console.log(naujasMasyvas)
// galima ir su ciklu tai isspresti
// for (let i = naujasMasyvas.length - 1; i >= 0; i--);

// Algoritmas yra bet kas kas kartojima daug kartu (veiksmu kartojimas). 

// 8. Užduotis: isfiltruokite is masyvo visus skaicius, kurie dalinasi is 2;
console.log("8. Užduotis");
// pridesiu elementa
naujasMasyvas.push(4);//push prideda elementa prie masyvo galo
console.log(naujasMasyvas);
console.log(atsitiksiniaiSkaiciai);
// pvz masyvas [49]

for (let i = 0; i < naujasMasyvas.length; i++ )
{
    if(naujasMasyvas[i] % 2 === 0)
    {
        naujasMasyvas.splice(i,1);
        i--;
    }
    
}
console.log(naujasMasyvas);

for (let i = 0; i < atsitiksiniaiSkaiciai.length; i++ )
{
    if(atsitiksiniaiSkaiciai[i] % 2 === 0)
    {
        atsitiksiniaiSkaiciai.splice(i,1);
        i--;
    }
    
}
console.log(atsitiksiniaiSkaiciai);