console.log("PVZ 1");
// while galiu pasiekti kintamaji i ir uz ciklo ribu.
let i = 0;

while (i < 10){
    console.log(i);
    i++;
}
console.log("Ciklo indeksas" + i);

i = 0;

while (i < 10){
    console.log(i);
    i++;
}

// for nepasiekia kintamojo uz ciklo ribu, todel galiu nukopijuoti kintamaji tuo paciu pavadinimu
console.log("PVZ 2");
for (let indeksas = 0; indeksas < 10; indeksas++)
{
    console.log(indeksas);
}

console.log("PVZ 2");
for (let indeksas = 0; indeksas < 10; indeksas++)
{
    console.log(indeksas);
}

// kaip pakeisti stiliu per javascripta
document.write('<b style="color: red">aaaaaaaaaa</b>');
document.write('<b class="lorem"><br>bbbbbbbbbb</b>');

