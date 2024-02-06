const allUrls1 = [
		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka",
	],
	allUrls2 = [
		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin",
		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Scotch",
		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Triple_sec",
		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Applejack",
		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka",
	],
	allUrls3 = [
		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin",
		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Scotch",
		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Triple_sec",
		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Applejack",
		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Brandy",
		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Lemon_vodka",
		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Champagne",
		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Sherry",
	];

// PAPRASTAS FETCH PAPRASTOJE FUNKCIJOJE
// noras yra ismatuoti, kiek trunka uzklausa i API, todel i cosole irasome "new Date()" arba date.getTime - gauname kiek praejo sekundziu nuuo 1970- sausio 1d. skaicius praejes nuoit os datos vadinasi time stamp
function fetchData()
{
    const startTime = new Date();
    fetch(allUrls2[0])
    // GET (su sio tipo request'u dabar mokomes dirbti), POST, UPDATE(updatinti visa objekta), PATCH(updatinti tik tam tikrus laukus), DELETE (ateityje mokinsimes)
    .then((response) => response.json())
    .then((response) => {
        // console.log(response);
        const endTime = new Date(); 
        const duration = endTime.getTime() - startTime.getTime(); //apskaiciuojamas timeStamp nou 1970, kai buvo sukurta UTC 32 bitu sistema
        console.log(duration +"ms"+" function");
        }); //kadangi bus jau ne be viena israiska todel dedame {}
}
fetchData();

// SINCHRONINE FUNKCIJA
// irgi turimas tiksas ismatuoti, kiek trunka uzklausa i API
async function fetchDataAsync()
    {
        const startTime = new Date();
        const request = await fetch(allUrls2[0]);
        const drinks = await request.json();
        const endTime = new Date();
        const duration = endTime.getTime() - startTime.getTime();
        console.log(duration +"ms"+" async");
    }
fetchDataAsync()

// Kreipimasis i visus URL vienu metu.
// Galima atlikti dviem budais,abi funkcijos asinchronines:
// I Budas - pasinaudojant ciklu (fetchins viena URL, tada kita ir taip per visa masyva) todel sitas budas netaupus laiko atzvilgiu
async function fetchAllDataByIngredient(urls)
    {
        const startTime = new Date();
        const array = [];
        for(const url of urls)
        {
            const promise =  await fetch(url);
            const answer = await promise.json();
            array.push(answer);
            // console.log(answer);
        }
        const endTime = new Date();
        const duration = endTime.getTime() - startTime.getTime();
        console.log(duration +"ms"+" async I budas - one by one");
    }
fetchAllDataByIngredient(allUrls3)//paeiliui sukrenta fetchas ir jo response rezultatai

// II Budas - kaip issiusti requesta visiems vienu metu
async function fetchAllDataIngredient(urls)
{
    const startTime = new Date();
    const promises = urls.map((url) => 
        fetch (url).then(response=>response.json())); //masyvas sudarytas is pazadu, kurie veliau Promise.all(promises) yra islaukiami
    // console.log(promises);
    const dataFromAllSources = await Promise.all(promises) //automatinis visu uzkalusu palaukimas atliekamas taip
    // console.log(dataFromAllSources);
    const endTime = new Date();
    const duration = endTime.getTime() - startTime.getTime();
    console.log(duration +"ms"+" async II budas - all at the same time");
}
fetchAllDataIngredient(allUrls3)

const array = [1, 2, 3, 4];
//masyvo kopijos sukurimas
const array2 = array; //cia paduodamas reference 
console.log(array2);
//norint kad nepasikeistu reiktu naudoti spredinima:
const array3 = [...array] // taip sukuriam masyvo kopija, o  cia paduodamas visas masyvas
console.log(array3);
array.push(5);
console.log(array);
console.log(array2); // pasikeite masyvas ir array2
console.log(array3);

// MASYVO DESTRUKTURAVIMAS
// UZDUOTIS is masyvo array reik pirmuju 3 reiksmiu:
// const [pirmas, antras, trecias] = array;
// console.log(pirmas);
// console.log(antras);
// console.log(trecias);

//jei reikia pirmo ir trecio tada taip atrodo masyvas:
// const [pirmas, , trecias] = array;

const [, antras, ,ketvirtas] = array;
console.log(antras);
console.log(ketvirtas);

// OBJEKTO DESTRUKTURAVIMAS
// UZDUOTIS istraukti is objekto reiksmes:
const obj = {
    id: 9,
    name: "John",
    surname: "Doe",
    age: 27,
    married: false,
}
console.log(obj.id);
console.log(obj["id"]);

const {name, surname, married, id} = obj
console.log(name, surname, married);

// MAP metodas:
const arrayForMap = [1, 2, 3, 4, 5];
const mappedArray = arrayForMap.map((value) => value*2);
console.log(mappedArray);
console.log(arrayForMap); // lieka nepakites

// FILTER metodas:
const arrayForFilter = [1, 2, 3, 4, 5];
const filteredArray = array.filter((value)=> value <= 3);
console.log(filteredArray);

// SOME metodas (sis metodas klausia, ar masyve egzistuouja kazkokia reiksme, jei nors viena reiksme masyve atitinka salyga grazina sis metodas true). Sitas metodas dazna naudojamas su filtru
const isThereAWantedValue = array.some((value) => value === 3); // daznai sitas metodas naudojamas objektuose tokiu budu pvz ieskant id array.some((value) => value.id === 3)
console.log(isThereAWantedValue);