//PLANAS:
// 1. Uzsipildyti filtro selektus duomenimis. DONE
// 2. Gauname visus gerimus is API - turi buti atliekamas tik tada kai pries tai yra atlikti fetchai gauti kokteiliu kategorijai, siktlines info, ingridientai, todel reikia pasinaudoti asichronnine funjcija kuri pirma kreipsis i pastaruosius API, o tada tik i  gerimo API - DONE
// 3. Juos atvaizduojame. DONE
// 4. Atlikti filtracijas kokteiliams
// 5. Paieska pagal pavadinima
// 6. Modalinio lango sukurimas.
// 7. Modaliinio lango uzdarymas.
// 8. Random kokteilio sugeneravimas is API //www.thecocktaildb.com/api/json/v1/1/random.php


// 1.1. isivedam kintamuosius nuskaityti HTML
const coctailNameFilterElement = document.querySelector("#coctail-name-filter"),
    categorySelectElement = document.querySelector("#category-select"),
    glassSelectElement = document.querySelector("#glass-type-select"),
    ingridientSelectElement = document.querySelector("#ingridient-select"),
    searchButtonElement = document.querySelector("#search"),
    iMLuckyButtonElement = document.querySelector("#im-lucky"),
    dynamicDrinksElement = document.querySelector(".drinks"); //3.3

const  selectValues = {}, //categoriesAarray = [], // 1.3.1 kintamasis masyvui R.7 pasalintas categoriesAarray ir vietoj jo sukurtas ojektas
    drinksArray = []; // 2.9

// API
async function fillSelectElements() //2.2
{
    const startTime = new Date();
    const allURLs = ["https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list", "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list", "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"]; //R.2
    const allPromises = allURLs.map((url)=> fetch(url).then(response=>response.json())
    );//R.3
    const allValues = await Promise.all(allPromises); //R.4
    console.log(allValues);//R.5
    
    const [allCategories,allGlasses,allIngredients] = allValues; //R.6 kadangi masyve pirmas elementas yra fetchas gauti kategorijas, todel susikuriam allCategories
    console.log(selectValues); // R.7 taip sukuriam objekto masyva, o su mapu bandom gauti tik pacias reiksmes
    selectValues.categories = allCategories.drinks.map(categoryObj => categoryObj.strCategory); // turime categories masyva susidedanti is reiksmiu, kurios jau nebera objekte.
    selectValues.glasses = allGlasses.drinks.map(glass => glass.strGlass);
    selectValues.ingredients = allIngredients.drinks.map(ingredient => ingredient.strIngredient1); //ingridientu masyvas irgi yra objekte, todel tam kad is pirminio objekto issiparsinti reiksmes, prirasome.drinks, o su map,, is masyvo istrrukiame objektus, taip turime visus ingridentus viename masyve.
    
    fillCategorySelect(allCategories.drinks, categorySelectElement, "strCategory")
    
  /*   // 1.2 Kategoriju API
    await fetch ("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
        .then((response ) => response.json())
        .then(response => { fillCategorySelect(response.drinks, categorySelectElement, "strCategory")
        // Map metodas grazina is objetu masyvo objektu laukus strCategory
        categoriesAarray.push(...response.drinks.map((value)=>value.strCategory)); // 2.6 prie masyvo pridedam masyva su spread operatoriumi 2.7. su map keiciame masyvo reiksmes i string
        }) //1.3.2 gauname viena objekta, kuris sudarytas is masyvo,, kuriame yra objektas, kur objektas turi tik viena lauka strCategory
        .catch((error) => console.log(error))
        // .finally((response) => console.log("Uzklausa baigta")); // kai pazadas yra ivykdytas t.y.suveikia abu then arba catch, tik tada paleidziamas finally, realiai cia nelb reikalingas
        // reiks prasukti cikla pro visus situos obbjektus ir steCategory prisideti prie categorySelectElement laukelio */

    // 1.4 Stikliniu tipu API
    await fetch ("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
    .then((response ) => response.json())
    .then(response => fillCategorySelect(response.drinks, glassSelectElement, "strGlass")) //console.log(response))  patikrinam objekto sandara, koks lauko pavadinimas, siuo atveju yra strGlass:
    .catch((error) => console.log(error))

    // 1.6 Ingridientu tipu API
    await fetch ("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
    .then((response ) => response.json())
    .then(response => fillCategorySelect(response.drinks, ingridientSelectElement, "strIngredient1")) //strIngredient1:
    .catch((error) => console.log(error))
    const endDate = new Date();
    const difference = endDate.getTime() - startTime.getTime()
    console.log(difference)
}
// fillSelectElements funkcija pries refaktorinima
/* async function fillSelectElements() //2.2
{
    // 1.2 Kategoriju API
    await fetch ("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
        .then((response ) => response.json())
        .then(response => { fillCategorySelect(response.drinks, categorySelectElement, "strCategory")
        // Map metodas grazina is objetu masyvo objektu laukus strCategory
        categoriesAarray.push(...response.drinks.map((value)=>value.strCategory)); // 2.6 prie masyvo pridedam masyva su spread operatoriumi 2.7. su map keiciame masyvo reiksmes i string
        }) //1.3.2 gauname viena objekta, kuris sudarytas is masyvo,, kuriame yra objektas, kur objektas turi tik viena lauka strCategory
        .catch((error) => console.log(error))
        // .finally((response) => console.log("Uzklausa baigta")); // kai pazadas yra ivykdytas t.y.suveikia abu then arba catch, tik tada paleidziamas finally, realiai cia nelb reikalingas
        // reiks prasukti cikla pro visus situos obbjektus ir steCategory prisideti prie categorySelectElement laukelio

    // 1.4 Stikliniu tipu API
    await fetch ("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
    .then((response ) => response.json())
    .then(response => fillCategorySelect(response.drinks, glassSelectElement, "strGlass")) //console.log(response))  patikrinam objekto sandara, koks lauko pavadinimas, siuo atveju yra strGlass:
    .catch((error) => console.log(error))

    // 1.6 Ingridientu tipu API
    await fetch ("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
    .then((response ) => response.json())
    .then(response => fillCategorySelect(response.drinks, ingridientSelectElement, "strIngredient1")) //strIngredient1:
    .catch((error) => console.log(error))
} */
// 1.3 Kategorijos select'o uzpildymas
function fillCategorySelect (properties, selectElement, strFieldName) // 1.5 papildyta taip kad tiktu ir kitu fieldu fetchams
{   
    let dynamicHTML = ''; //1.3.4 selecto option'ai generuojami automatiskai, todel dinaminiam HTMLui pridedamas kintamasis
    for(const property of properties)
    {
        dynamicHTML += `<option>${property[strFieldName]}</option>` //1.3.5 optionu pridejimas
        // console.log(category.strCategory) //1.3.1
        // categoriesAarray.push(property.strCategory) // kategoriju masyvo pridejimas, uzkomenuotas nes prkelta i kita funkcija
    }
    selectElement.innerHTML = dynamicHTML; //1.3.6 atvaizdavimo HTMLe pridejimas
    // console.log(categoriesAarray); //1.3.3 matome jog gavome kategoriju selekto duomenis
}


async function getAllDrinks() //2.8 kadangi gavome 11 kokteiliu kategoriju, todel bus 11 fetchu gauti visus kokteilius
{
// https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink URL skirtas gauti gerimus pagal kategorija
    for(const category of selectValues.categories) // 2.10    R.8 buvo pakeista is tokios i tai ka dabar matome  for(const category of categoriesAarray)
    {
        //2.11 reikia susigeneruoti dinamini URL tam kad gauti gerima pper kategorija, gerimo kategorija sudaryta is daugiau nei vieno zodzio atskyriama "_"
        // vietoj tarpu iterpimas buksniuku galimas keliais budais:
        // I - pasplitinti pavadinima per tarpus, pasiversti i masyva,, o paskui join su apatiniu bruksniuku
        // II - pasinaudoti replaceAll metodu (sitas metoas pasirinktas)
        let dynamicURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(" ","_")}`;
        // console.log(dynamicURL) // patikrinti ar gerai sugeneruojamas URL (reik butinai, jog butu iskvietimas funkcios kitaip nesiamto consol loge)
        // 2.12
        const response = await fetch(dynamicURL);
        const answerFromServer = await response.json(); // tokiu budu nereikia naudoti then metodo ir galima pasiimti taip atsakyma ir response'o t.y. tai aletrnatyva. then metodui
        for(const drink of answerFromServer.drinks) //2.14
        {
            drinksArray.push(drink);
        }
        
        // console.log(answerFromServer) // patikrinam koks atsakymas guanamas
        // drinksArray.push(answerFromServer);

    }
}

function generateDrinksHTML(drinks) // 3.1 // pridedam parametra, nes norima bus atvaizduoti gerimus ne visada visu is masyvo drinksArray, bet ir atfiltruotus
{
    let dynamicHTML = '';
    for (let drink of drinks)
    {
        dynamicHTML += `<div class="drink">
        <img src="${drink.strDrinkThumb}" alt="">
        <h2 class="drink-title">${drink.strDrink}</h2>
    </div>`;
    }
    dynamicDrinksElement.innerHTML = dynamicHTML; //3.4
}
// 2.
// 2.1.
async function initialization() // initialization yra toks laiko tarpas per kuri pirma surenkami tokie duomenys kurie uzpildomo filtro elementus, tai cia toks pirmas etapas, o antras etapas buna gerimu atvaizdavimas ir tada inicializacijos pabaiga, ir aplikacija jau pati nieko nebeatliks ir lauks vartotojjo veiksmu.
{
    // I etapas. Select'u uzpildymas.
    await fillSelectElements(); // 2.4 await - uzdeda parametra, jog turi palaukti, kol bus atlikta
    // console.log(categoriesAarray) //2.6 perziurim ar gerai gauname masyva 2.11 perziureti kokie gaunami pavdinimai, kad zinoti kaip URL suformuoti tarpus jei daugiau nei veinas zodis
    // II etapas. Dinaminis gerimu atvaizdavimas.
    await getAllDrinks() // 2.13 pridetas wait, todel gaunami visi gerimai ir tik tada atvaizduojamas consolelogas
    generateDrinksHTML(drinksArray); //3.5
    // console.log(drinksArray) // 2.12 patikrinti ar visi gerimai sudedami i masyva, matome jog gauname masyva objektu pavidalu masyvus, todel reik sumapinti, kad butu tiesiogiai objektai 
}
initialization() // 2.5 funkkcijos iskvietimas