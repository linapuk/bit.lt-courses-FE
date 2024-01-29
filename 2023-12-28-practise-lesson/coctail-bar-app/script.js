// 1. Uzsipildyti filtro selektus duomenimis:
// 1.1. isivedam kintamuosius nuskaityti HTML
const coctailNameFilterElement = document.querySelector("#coctail-name-filter"),
    categorySelectElement = document.querySelector("#category-select"),
    glassTypeSelectElement = document.querySelector("#glass-type-select"),
    ingridientSelectElement = document.querySelector("#ingridient-select"),
    searchButtonElement = document.querySelector("#search"),
    iMLuckyButtonElement = document.querySelector("#im-lucky");

// kategoriju API
fetch ("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
.then((response ) => response.json())
.then(response => console.log(response));//gauname viena objekta, kuris sudarytas is masyvo,, kuriame yra objektas, kur objektas turi tik viena lauka strCategory
// reiks prasukti cikla pro visus situos obbjektus ir steCategory prisideti prie categorySelectElement laukelio