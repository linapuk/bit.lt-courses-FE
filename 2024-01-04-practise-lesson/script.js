//PLANAS:
// 1. Uzsipildyti filtro selektus duomenimis. DONE
// 2. Gauname visus gerimus is API - turi buti atliekamas tik tada kai pries tai yra atlikti fetchai gauti kokteiliu kategorijai, siktlines info, ingridientai, todel reikia pasinaudoti asichronnine funjcija kuri pirma kreipsis i pastaruosius API, o tada tik i  gerimo API - DONE
// 3. Juos atvaizduojame. DONE
// 4. Paieska pagal pavadinima, Atlikti filtracijas kokteiliams. DONE.
// 5. Modalinio lango sukurimas.
// 6. Modaliinio lango uzdarymas.
// 7. Random kokteilio sugeneravimas is API //www.thecocktaildb.com/api/json/v1/1/random.php


// 1.1. isivedam kintamuosius nuskaityti HTML
const coctailNameFilterElement = document.querySelector("#coctail-name-filter"),
    categorySelectElement = document.querySelector("#category-select"),
    glassSelectElement = document.querySelector("#glass-type-select"),
    ingridientSelectElement = document.querySelector("#ingridient-select"),
    searchButtonElement = document.querySelector("#search"),
    iMLuckyButtonElement = document.querySelector("#im-lucky"),
    dynamicDrinksElement = document.querySelector(".drinks"); //3.3

const modal = document.querySelector(".modal-bg"); //5.4

const  selectValues = {}, // R.7 pasalintas categoriesAarray ir vietoj jo sukurtas ojektas
    drinksArray = [];

// API
async function fillSelectElements() 
{
    const allURLs = ["https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list", "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list", "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"]; //R.2
    const allPromises = allURLs.map((url)=> fetch(url).then(response=>response.json())
    );//R.3
    const allValues = await Promise.all(allPromises); //R.4
    // console.log(allValues);//R.5
    
    const [allCategories,allGlasses,allIngredients] = allValues; //R.6 kadangi masyve pirmas elementas yra fetchas gauti kategorijas, todel susikuriam allCategories
    // console.log(selectValues); // R.7 taip sukuriam objekto masyva, o su mapu bandom gauti tik pacias reiksmes
    selectValues.categories = allCategories.drinks.map(categoryObj => categoryObj.strCategory); // turime categories masyva susidedanti is reiksmiu, kurios jau nebera objekte.
    selectValues.glasses = allGlasses.drinks.map(glass => glass.strGlass);
    selectValues.ingredients = allIngredients.drinks.map(ingredient => ingredient.strIngredient1); //ingridientu masyvas irgi yra objekte, todel tam kad is pirminio objekto issiparsinti reiksmes, prirasome.drinks, o su map,, is masyvo istrrukiame objektus, taip turime visus ingridentus viename masyve.
    
    fillCategorySelect(allCategories.drinks, categorySelectElement, "strCategory"); //R.9
    fillCategorySelect(allGlasses.drinks, glassSelectElement, "strGlass"); //R.10
    fillCategorySelect(allIngredients.drinks, ingridientSelectElement, "strIngredient1");

}

// 1.3 Kategorijos select'o uzpildymas
function fillCategorySelect (properties, selectElement, strFieldName)
{   
    let dynamicHTML = '';
    for(const property of properties)
    {
        dynamicHTML += `<option>${property[strFieldName]}</option>` 
    }
    selectElement.innerHTML += dynamicHTML;
}


async function getAllDrinks() // 11 kokteiliu kategoriju, todel bus 11 fetchu gauti visus kokteilius
{
    const categoryDrinksUrls = []; // R.11 sukuriamas masyvas, kuris yra tuscias ir bus uzpildomas ciklo eigoje.
    for(const category of selectValues.categories) // R.8 buvo pakeista is tokios i tai ka dabar matome  for(const category of categoriesAarray)
    {
        let dynamicURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(" ","_")}`;
        categoryDrinksUrls.push(dynamicURL); // R.12 dinamini URL reikia papushinti i masyva categoryDrinksUrls, kad galima butu padaryti promise.all
        
        /* const response = await fetch(dynamicURL); // R.13
        const answerFromServer = await response.json();
        for(const drink of answerFromServer.drinks)
        {
            drinksArray.push(drink);
        } */
        
        // console.log(answerFromServer) // patikrinam koks atsakymas guanamas
        // drinksArray.push(answerFromServer);
    }
    const allPromises = categoryDrinksUrls.map((url)=> 
        fetch(url).then(response=>response.json())
    ); //R.15
    // const allPromises = categoryDrinksUrls.map(function(){  // R. 15 galima taip aprasyti funkcija, bet kadangi tik viena israiska nurodoma, todel galimas be riestiniu skliaustu ir be return funkcijos aprasymas:
    //     return
    // })
    const allValues = await Promise.all(allPromises); // R.17 kai reuestas pasibaigs ir await ispildys visas eilutes, gausime visas reiksmes.
    allValues.forEach((value) => drinksArray.push(...value.drinks));    // R.19 turime allValues masyva, sakome jog sukame per iekviena reiksme cikle, sis metodas stipresnis nei in ar ogf nes galime gauti ne tik reiksme bet ir indeksa
    // console.log(categoryDrinksUrls); //R.14
    // console.log(allPromises); //R.16
    // console.log(allValues); //R.18
}

function generateDrinksHTML(drinks)
{
    let dynamicHTML = '';
    for (let drink of drinks)
    {
        dynamicHTML += `<div class="drink" onclick="openModal(${drink.idDrink})">
        <img src="${drink.strDrinkThumb}" alt="">
        <h2 class="drink-title">${drink.strDrink}</h2>
    </div>`; // 5.9.0
    }
    dynamicDrinksElement.innerHTML = dynamicHTML; 
}

// 4. Filtracija
async  function filter() //4.1
{
    const searchValue = coctailNameFilterElement.value, 
        category = categorySelectElement.value,
        glass = glassSelectElement.value,
        ingridient = ingridientSelectElement.value; // 4.2
    // console.log(searchValue, category, glass, ingridient); //4.4
    let filteredArray = [...drinksArray]; // 4.7.1 pridedam masyvo koija, let gera praktika, nes mes perrasynesime ta apti masyva
    // console.log(filteredArray);
    if (searchValue)
    {
        filteredArray = filteredArray.filter((drinkObj)=>drinkObj.strDrink.toLowerCase().includes(searchValue.toLowerCase())
        );
    }// 4.7.2 jei searchValue egzistuoja, turi atlikti filtracija, ieskosim su filter metodu, turime gauti true arba fase, ieskome objekte tarp lauku strDrink, paverciam mazosiomis raidemis, ir includes - idedame reiksme su kuria norime lyginti. 
    // Filtavimas laukelio "Category"
    if (category !== "Select category")
    {
        // console.log(filteredArray); // 4.8 kiekvienas gerimas turi ID, ir mums reikes ziureti ar tas ID yra musu filteredArray ID egzistuoja nors viename gerimu
        // console.log(category); // 4.10 uzkomentavome filteredArray.filter((drink) => {}); ir tikrinome ar gauname kategorija. Filtracijos funkcija dareme asinchronine, nes pirma siunciamas reuestas i APi, palaukiamas ir tada atliekama filtracija
        const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(" ","_")}`); // 4.11
        const drinksOfCategory = await promise.json(); //4.12 
        console.log(drinksOfCategory); //4.13
        // 4.15
        filteredArray = filteredArray.filter((drink) => 
            drinksOfCategory.drinks.some(
                (drinksOfCategory)=> drink.idDrink === drinksOfCategory.idDrink)); //4.9 4.14 jeigu true - paliekam, jei false pasalinam is masyvo, todel some metodu tikrinam ar egzistuoja toks gerimo ID
    }
    // console.log(filteredArray) //4.7.3

    // Filtavimas laukelio "Glass type"
    //4.16
    if(glass !== "Select glass type")
    {
        // console.log(glass); // 4.19 
        const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass.replaceAll(" ","_")}`); // 4.17
        const drinksOfGlass = await promise.json(); //4.18 daromas parsinimas is promiso. Kadangi inkapsuliuota i riestinius skliaustus, todel galima naudoti ta pati termina.
        // console.log(drinksOfGlass); // 4.19 
        filteredArray = filteredArray.filter((drink) => 
            drinksOfGlass.drinks.some(
                (drinksOfGlass)=> drink.idDrink === drinksOfGlass.idDrink)); //4.20 isfiltruotas masyvas (filteredArray), yra filtruojamas su filter, kadangi masyvo objekte yra laukelis drinks, todel rasome drinksOfGlass.drinks o su some  - isitikinam jog bent vienas gerimo ID egzistuoja, todel po some aprasome dar viena funnkcija. 
    }

    // Filtavimas laukelio "Ingridient"
    //4.21
    if(ingridient !== "Select ingridient")
    {
        // console.log(ingridient);
        const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingridient.replaceAll(" ","_")}`);
        const drinksOfIngridient = await promise.json();
        // console.log(drinksOfIngridient);
        filteredArray = filteredArray.filter((drink) => 
        drinksOfIngridient.drinks.some(
                (drinksOfIngridient)=> drink.idDrink === drinksOfIngridient.idDrink)); 
    }

generateDrinksHTML(filteredArray)  //4.7.4
}

async function initialization() // initialization yra toks laiko tarpas per kuri pirma surenkami tokie duomenys kurie uzpildomo filtro elementus, tai cia toks pirmas etapas, o antras etapas buna gerimu atvaizdavimas ir tada inicializacijos pabaiga, ir aplikacija jau pati nieko nebeatliks ir lauks vartotojjo veiksmu.
{
    // I etapas. Select'u uzpildymas.
    await fillSelectElements(); // 2.4 await - uzdeda parametra, jog turi palaukti, kol bus atlikta
    // console.log(categoriesAarray) //2.6 perziurim ar gerai gauname masyva 2.11 perziureti kokie gaunami pavdinimai, kad zinoti kaip URL suformuoti tarpus jei daugiau nei veinas zodis
    // II etapas. Dinaminis gerimu atvaizdavimas.
    await getAllDrinks() // 2.13 pridetas wait, todel gaunami visi gerimai ir tik tada atvaizduojamas consolelogas
    generateDrinksHTML(drinksArray); //3.5
    // console.log(drinksArray) // 2.12 patikrinti ar visi gerimai sudedami i masyva, matome jog gauname masyva objektu pavidalu masyvus, todel reik sumapinti, kad butu tiesiogiai objektai 
    // console.log(drinksArray) //5.1 matome jog mazai gauname duomenu ir reiks kreiptis i API gauti daugiau duomenu
    searchButtonElement.addEventListener('click', filter); // 4.4 ilgenis uzrasymas butu searchButtonElement.addEventListener('click', () => { filter()});
}
// 5. Modalinio lango atvaizdavimas
// Planas: duomenys bus gaunami per drinks ID, turesim tureti funkcija, kuri priims ID, pagal ta ID kreipsis i API, gaus pilnus kokteilio duomenis ir tada dinamiskai atvaizduos vartotojui.
async function openModal(id) //5.3 // 5.10 // 5.12
{
    modal.style.display = "flex"; // 5.5
    const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`); // 5.13
    const response = await promise.json(); // 5.14
    // console.log(response); // 5.15
    const drink = response.drinks[0]; // 5.16
    console.log(drink); // 5.17
    document.querySelector(".modal-img").src = drink.strDrinkThumb; // 5.18 kadangi klase, tai ., kai id - #
    document.querySelector("#modal-category").innerText = drink.strCategory; 
    document.querySelector("#modal-alcohol").innerText = drink.strAlcoholic;
    document.querySelector("#modal-ingridients").innerText = drink.strGlas;
    document.querySelector("#modal-recipe").innerText = drink.strRecipe;
}
function closeModal() //5.6
{
    modal.style.display = "none"; // 5.7
}
// openModal();
document.querySelector(".modal-close-button").onclick = closeModal; //5.8
initialization(); // 2.5 funkkcijos iskvietimas
