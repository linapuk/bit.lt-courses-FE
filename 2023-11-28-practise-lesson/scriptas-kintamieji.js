// Kitamojo deklaracimas su let
// Skaicius
// let x = 10;
// console.log(x);

// Tekstas
// let x = "Lorem ipsum dolor sit amet";
// console.log(x);

// Pagrindiniai aritmetiai operatoriai + - * / % (liekanos operatrius)
let x = 10;
// informacijos išvedimas į konsolę
console.log(x);

x = x + 5;
console.log(x);

x = x - 5;
console.log(x);

x = x % 3;
console.log(x);

// trumpesnis budas aprasyti operacijas
x += 5;
console.log(x);

// kintamojo duoumenu tipo nustatymas
console.log(typeof x);
console.error(typeof x);

x += 'tekstas';
console.log(typeof x);
console.log(x);

// kondicine logika
let y = 2;
let loginisPatikrinimas = y > 5;
console.log(loginisPatikrinimas);
console.log(typeof loginisPatikrinimas);
// console.log(y);
if(loginisPatikrinimas) {
    console.log(y);
}
else{
    console.log('y yra mazesnis nei 5 ');
}

// === sulyginimo operatorius,  gireztas tikrinimas, tikrina ir duomenu tipa
let tekstas = "iki";
if (tekstas === 'labas') {
    console.log("tekstas yra labas");
}
else{
    console.log("tekstas nera labas");
}

// !== operatorius nelygu, gireztas tikrinimas, tikrina ir duomenu tipa
if (tekstas !=="labas"){
    console.log("tekstas NERA labas");
}

// duomenu tipai skiriasi,todel salyga ir nesuveike (kai buvo ===, nes sitas operatorius tikrina reiksme ir tipe), o suveikia, nes == tikrina TIK reiksme BE tipo
let skaicius ="5";
if(skaicius == 5){
    console.log('skaicius yra 5');
}

// visi skaiciai iskyrus 0 verciasi i 'true', 0 vercias i i false
// let tiesa = 'gal ir gerai';
if (0) {
    // del sios eilutes randama  klaida, kadangi kintamasis 'tiesa' nebuvo rastas 
    console.log(tiesa);
}

let eilerastis = 'Lorem ipsum dolor sit amet';
console.log(eilerastis);

eilerastis += " consectetur";
console.log(eilerastis);


// visas tekstas ir duomenu rinkiniai javascripte yra sunumeruojami indeksais ir visada prasideda nuo 0
let kintamasis = 'CHICKEN';
console.log(kintamasis[0]);
console.log(kintamasis[1]);
console.log(kintamasis[2]);
console.log(kintamasis[3]);
console.log(kintamasis[4]);
console.log(kintamasis[5]);
console.log(kintamasis[6]);

// jei prie skaiciaus pridedamas  tekstas, kintamjo tipas tampa stringu (tekstas)
skaicius = 5;
skaicius += "a";
console.log(typeof skaicius);

// pridejau tuscia reiksme 
skaicius = 5;
skaicius += "";
console.log(typeof skaicius);

// NaN kintamasis yra gaunamas tada, kai gaunama logine klaida atliekant aritmetini veiksma, siuo atveju tekstas dalintas is skaiciaus
kintamasis /=10; 
console.log(kintamasis);
console.log(typeof kintamasis);

// consoleje matome 'undefined' nes nebuvo kintamajam priskirta reiksme
let z;
console.log(z);

// stringo ilgis pasinaudojant savybe kintamasis.length
kintamasis = 'CHICKEN';
console.log(kintamasis.length);

let vardas = 'Sylvester';
let pavarde = 'Stallone';
// ife klausti vardas.lenght yra daugiau uz pavarde.length
// if (){

// }
// else{

// }
// pavarde.length < vardas.length ivilkti i ifa
console.log(pavarde.length < vardas.length)