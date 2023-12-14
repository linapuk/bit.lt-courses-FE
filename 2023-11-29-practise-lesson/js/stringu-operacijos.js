let eilerastis = 'Ruošėsi ožys ganytis, žolę žlemžti, miške vartytis ožys';
//                01234567....
console.log(eilerastis);

//Teksto paieška pasinaudojant indexOf() metodu. Jei tekstas nerandamas, gražinama reikšmė: -1.

//  šis metodas ieško nuo kairės pusės(nuo pradžios).
let ozysPosition = eilerastis.indexOf('ožys');
console.log(ozysPosition);

// šis metodas ieško nuo dešinės pusės (pabaigos).
let lastOzysPosition = eilerastis.lastIndexOf('ožys');
console.log(lastOzysPosition);

//Pasinaudojant gauta teksto pozicija, galime gauti žodį ožys su substring() metodu -> eilerastis.substring(pradziosPozicija, galutinePozicija):
// let ozysText = eilerastis.substring(ozysPosition, ozysPosition  + 6);
let ozysText = eilerastis.substring(ozysPosition, eilerastis.length + 1);
console.log(ozysText);

// Teksto keitimas, replaceAll metodas pakeicia visus tekste zodzius:
let kitasGyvunas = 'avinas';

// eilerastis.replaceAll(kuri zodi pakeisti noriu,  kokiu parametru keiciu):
let kitasEilerastis = eilerastis.replaceAll('ožys', kitasGyvunas);
console.log(kitasEilerastis);

// Teksto keitimas tik pirmo atitikmens:
kitasEilerastis =  eilerastis.replace('ožys', 'šuo');
console.log(kitasEilerastis);

// Teksto konvertavimas didžiosiomis raidėmis:
let eilerastisDidziosiomis = eilerastis.toUpperCase();
console.log(eilerastisDidziosiomis);

// Teksto konvertavimas mažosiomis raidėmis:
let eilerastisMazosiomis = eilerastis.toLowerCase();
console.log(eilerastisMazosiomis);

//teksto dalies gavimas su slice metodu:
//pirmasis parametras - pradžios indeksas, antrasis parametras - galinis subteksto indeksas
let text = "Apple, Banana, Kiwi";
//          01234567890123
let part = text.slice(7, 13); //nuo pozicijos iki pozicijos
console.log(part);

// gali gauti neigiama parammetro, ko negali atlikti substring metodas, siuo atveju jis atkerta 6 simbolius nuo galo:
part = text.slice(0, -6);
// part = text.slice(0, 4); jei nurodau teigiama, tai tiesiog nurodoma pozicija nuo pradzios skaiciuojama.
console.log(part);

// slice su vienu parametru, nurodau, ka atkirst, taip lieka tik " Banana, Kiwi":
part = text.slice(7);
console.log(part);

// kai neigiamas tai gaunu tai ka atkanda nuo galo:
part = text.slice(-4);
console.log(part);

// let eilerastis = 'Ruošėsi ožys ganytis, žolę žlemžti, miške vartytis ožys';
if(eilerastis.includes('ganytis'))
{
    console.log('kintamajame eilerastyje yra zodis: ganytis');
}
else{
    console.log('kintamajame eilerastis tokio zodzio nneturi');
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//random skaiciaus sugeneravimas... (2 parametrai: nuo, iki  [inclusive])
let skaiciukas = rand(97, 122);
console.log(skaiciukas);

//sugeneruojama raidė pagal unikodą
console.log(String.fromCharCode(skaiciukas));

// SVARBU reik funnkcija pasitalpinti kode norint random pasinaudoti!