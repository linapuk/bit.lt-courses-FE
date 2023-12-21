// 1. Nupieškite kvadratą iš “*”, kurio kraštines sudaro n=10 “*” simbolių. Pasinaudokite ciklais. Panaudokite css stilių, kad kvadratas ekrane atrodytų kvadratinis.
console.log("Kvadratas")

let n = 15;
for(let eilute =0; eilute < n; eilute++)
{
    let zvaigzdute ='';
    for (let stulpelis = 0 ; stulpelis < n; stulpelis++)
    {
        zvaigzdute += '* ';
    }
    document.write(zvaigzdute+'<br>'+'');
}

// 2. Prieš tai nupieštam kvadratui nupieškite raudonas istrižaines.
document.write('<br>');
document.write('<br>');
document.write('<br>');

let g = 20;
let redSimbolis = `<red>*</red>`;
for(let row =0; row < g; row++)
{
    let star ='';
    for (let column = 0 ; column < g; column++)
    {
        if (row === column || row + column == g - 1)
        {
            star += redSimbolis + ' ';
        }
        else
        star += '* ';
    }
    document.write(star+'<br>'+'');
}

// 3. Metam monetą. Monetos kritimo rezultatą imituojam rand() funkcija, kur 0 yra herbas, o 1 - skaičius. Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas. Suprogramuokite tris skirtingus scenarijus kai monetos metimą stabdome:
// a.              Iškritus herbui;
// b.              Tris kartus iškritus herbui;
// c.              Tris kartus iš eilės iškritus herbui;

document.write('<br>');
document.write('<br>');
document.write('<br>');

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let coin = rand(0,1); 
let resultElement = document.querySelector("#result");
resultElement = 0;
