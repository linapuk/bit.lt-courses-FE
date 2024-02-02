// //--------------ERROR HANDLING----------------
// // Blokas skirtas patikrinti.
// // a) kaip susidorojama fetch su klaida:
// try{
//     fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink")
// } catch (error){
//     console.log(error)
// ;}

// //galimas priskyrimas prie vieno ar kito kintamojo:
// const skaicius = 5; // kadangi cia const (konstanta) skaicius negali keistis

// try{
//     skaicius++;
// } catch (error){
//     console.log(error);
// }
// //gaunama klaida, bet kodas del to nesuluzta, nes yra tikimasi klaidos, tuo tarpu zemiau aprasytu budu ivyksta klaida ir kodas toliau nera tesiamas:
// // skaicius++
// console.log("tesiamas darbas...")

// //--------------PROMISES----------------
// //kai atliekamas fetchas, atgal gaunamas kinamasis ir tai yra pazadas. Pazadas yra js objektas skirtas nusakyti kas atsitiks kai po tam tikro laiko gris atsakymas is serverio.
// // jei gaunama klaida, tai suveikia reject funkcija
// // jei uzkausa buvo sekminga - resolve funcija
// // funkcijos iskcvieciamos then blokuose
// // visad URL reik nurodyti protokola siuo atveju https://
// fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink")
// .then((response) => response.json()) //siuo atveju yra dvi resolve funkcijos, pirmoji nusakanti, kas atsitiks jei rezultatas grazinamas sekmingai
// .then ((response) => console.log(response)) // antroji, nusakanti kokius veiksmus atlikti, kai bus isparsinti duomenys (nes pirmame buvo: response.json())
// .catch((error)=> console.log(error)); // siuo atveju ivyksta reject funkcija ir nusakoma, kas turi atsitikti, jei gaunamas error'as
// // jei pirmieji du sekmingi, treciojo bloko reject neatlieka, bet yra visad tikimasi gauti ir toki rezultata
// // jei serveris apkrautas vykdomas loud balancinimas ir catch bloke galima nurodyti, kreiptis i kita serveri. 

// //Promises sudarinejimo logika:
// // sis promisas bus priskirtas kintamajam, fetchas irgi gali buti taip pat priskiriamas kintamajam, tik jis jau grazintu promise objekta.
// /* const pazadas = new Promise((resolve, reject) => {
//     setTimeout(() => console.log("Zinute is serverio"), 1000);//funkcija - kuri uztrunka laiko, kol buna iskvieciama, atsitiks po 1000 mili sek.
// }) */

// const pazadas = new Promise((resolve, reject) => {
//     console.log("Prasidejo uzklausa i serveri")
//     setTimeout(() => {
//         resolve("Zinute is serverio")// si zinute ateina veliausiai nes uztrunka, "tesiamas darbas...." irgi ivyksta anksciau nei si peracija.
//     }, 1000);
//     console.log("Pasibaige uzklausa i serveri");
// }).then((atsakymas) =>  console.log(atsakymas));

// //asichroniskas js, gerai tuom, jog greiciau gaunami respose
// // blogai - prisdeda kompleksiskumas, 

// console.log("Tesiamas darbas....")
// console.log("Tesiamas darbas....")
// console.log("Tesiamas darbas....")
// console.log("Tesiamas darbas....")
// console.log("Tesiamas darbas....")
// console.log("Tesiamas darbas....")
// console.log("Tesiamas darbas....")
// console.log("Tesiamas darbas....")
// console.log("Tesiamas darbas....")

// // pavyzdys kaip atrodytu nesekming auzklausa i serveri:
// const pazadas2 = new Promise((resolve, reject) => {
//     let isValidURL = false;//pakeitus cia i true klaidos negaunama
//     console.log("Prasidejo uzklausa i serveri 2")
//     if (isValidURL)
//         setTimeout(() => {
//         resolve("Zinute is serverio 2")// si zinute ateina veliausiai nes uztrunka, "tesiamas darbas...." irgi ivyksta anksciau nei si peracija.
//         }, 1000);
//     else
//         reject (new Error("Neteisingai nurodytas URL"));// grazina erroro ojekta su kuriuo veliau galima dirbti
//     console.log("Pasibaige uzklausa i serveri 2");
// })
// .then((atsakymas) =>  console.log(atsakymas))
// .catch((klaida)=> console.log(klaida)); // jei nebutu rejecto tai kodo klaida butu ir neveiktu kodas

// taip matoma sugauta klaida:
/* Error: Neteisingai nurodytas URL
    at script.js:71:17
    at new Promise (<anonymous>)
    at script.js:63:18 */

console.log("Sinchronines funkcijos pavyzdys")   
// {console.log("Gauname atsakyma is serverio"); atsitinka veliau,  cia esminis skirtumas, nera zinutes viena po kitos ivykdomos

function callServerSync()
{
    console.log("Uzklausa i serveri prasidejo");
    setTimeout(() => {console.log("Gauname atsakyma is serverio");
    }, 1000);
    console.log("Uzklausa baigta")
}
// callServerSync();

console.log("Asinchronines funkcijos pavyzdys")   
//vykdoma eilute po eilutes
async function callServerSyncAsync() //async keywordas - nurodo jog tai asinchronine funkcija ir gali ilgiau trukti 
{
    console.log("A Uzklausa i serveri prasidejo");
    await new Promise((resolve, reject) =>
        setTimeout(() => {
            console.log("A Gauname atsakyma is serverio");
            resolve()//sita pridejome kad gautume zinute "A Uzklausa baigta"
        }, 1000)
    ).then()  //nurodome kas nutinka, kai promises baigiasi
    console.log("A Uzklausa baigta");//si nnepasirodo zinute, nes nenustoja veikti await new Promise funkcija, kai atlika bus viena is resolve arba reject tad turetu buti ir zinute
    return "atsakymas";
}
// console.log(callServerSyncAsync());//pending promise statusas reiskias jog dar apzadas neivykdytas
fetch()
callServerSyncAsync().then((atsakymas) => console.log(atsakymas));

