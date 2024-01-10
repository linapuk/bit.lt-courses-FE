const people = [];
const possibleNationalities = ['Lithuanian', 'Latvian', 'German']
let currentNumeration = 1; 


//Button elemeto gavimas:
// const buttonElement = document.getElementById('addButton);
// const buttonElement = document.querySelectorAll('button');
const buttonElement = document.querySelector("#addButton");

//--------------Validacijos-----------------------
function validateName (name)
{
    // 1. ar apskritai jis egzituoja
    // 2. ar turi skaiciu, jeigu taip grazinti false
    // 3. ar turi specialiuju simboliu

/*     backend'e:
    validavimas su regexu:
    varde galetu buti naudojami (tai pakeistu 2 ir 3 punktus) - grazina boolean reiksmet.y true/false:
     /[a-z][A-Z]/.test(firstName)
    funkcija turetu grazinti: true arba false reiksme */

    // boolean reiksme
    let isValid = true;

    //tikrinama ar name reiiksme nera undefined, null, false arba kturscia
    if(!name)
    {
        isValid=false;
        alert("Prasome uzpildyti viisus laukus");
    }
    ///[a-z][A-Z]/.test(name) - Regex patikrinimas, tikrinam ar pareina testa
    if(/[0-9]/.test(name)){
        isValid=false;
        alert("Rastas skaicius");
    }
    if(/[!@#$%^&*()_+=/.,]/.test(name))
    {
        isValid=false;
        alert("Rastas simbolis");
    }
    return isValid;
}

function validateAge(age)
{
    let isValid = true;
    if(!age)
    {
        isValid=false;
        alert("Prasome uzpildyti amziaus laukeli");
    }
    //isNaN yra funkcija, grazina true, jei jos argumentas yra NaN
    if(isNaN(parseInt(age)))isValid=false;
    if(parseInt(age) < 0 || parseInt(age) > 200)isValid=false;
    if(age % 1 !== 0)isValid=false;
    return isValid;
}

function isValidNationality(nationality)
{
    if(possibleNationalities.includes(nationality))
    {
        console.log(possibleNationalities.includes(nationality));
        return(possibleNationalities.includes(nationality))
    }
}

//--------------Pridejimas-----------------------
//onclick - evento pavadinimas, antras parametras pati funkcija kuri atsitinka, siuo atveju anonimine funkcija ()=>{}
buttonElement.addEventListener('click', ( )=>{
    const person = {};
    person.firstNname = document.getElementById('firstNameInput').value;
    person.lastNname = document.getElementById('lastNameInput').value;
    person.age = document.getElementById('ageInput').value;
    person.nationality = document.getElementById('nationalityInput').value;
    person.number = currentNumeration;

    currentNumeration++;
    // console.log(person);

    //Ivyksta patikrinimas ar ivestos reiksmes yra tuscios. Patikrinama padejus sauktuka ar tai yra undifend and Null, ar NaN.
    if(
        !validateName(person.firstNname) || 
        !validateName(person.lastNname) || 
        !validateAge(person.age) || 
        !isValidNationality(person.nationality) 
    ){
        //alertas sustabde funkcija ir laukiia atsakymo todel conse.log rodo kiek laiko uztruko kol paspaudziau OK button;
        confirm("Prasome uzpildyti viisus laukus");
        return;
    }

    people.push(person);
    generateTableContent(people);

    //ivestos reiksmes pasalinimas
    document.getElementById('firstNameInput').value = '';
    document.getElementById('lastNameInput').value='';
    document.getElementById('ageInput').value='';
    document.getElementById('nationalityInput').value='';
});


/* 
//galimas ir kitoks funkcijos iterpimas:
// nenaudojant anonimines funkcijos
buttonElement.addEventListener('onclick', function() {
});
//iskeliant funkcija
function kasAtsitiksKaiBusPaspaudziamasMygtukas (){  
}
buttonElement.addEventListener('onclick', kasAtsitiksKaiBusPaspaudziamasMygtukas);//cia yra funkcijos reference'as, funkcija paduodama kaip parametras, callbackine funkcija
 */

//--------------HTML contento generavimas-----------------------
function generateTableContent(people)
{
    let dynamicHTMl = ``;
    for(let person of people)
    {
        dynamicHTMl += `<tr>
        <td>${person.number}</td>
        <td>${person.firstNname}</td>
        <td>${person.lastNname}</td>
        <td>${person.age}</td>
        <td>${person.nationality}</td>
        </tr>`
    }
    const tbody = document.querySelector('table tbody');
    tbody.innerHTML = dynamicHTMl;
}

//--------------Salinimas-----------------------
const deleteButtonElement = document.querySelector("#removeButton");

// deleteButtonElement.addEventListener('click', () => {
//     let deletetNumeration = parseInt(document.querySelector("#num").value); 
//     let deleteResultElement = document.querySelector("#deleteResult");
//     deleteResultElement.innerText = "";
//     if (deletetNumeration <= 0){
//         deleteResultElement.innerText = "Operacija negali buti atlikta, iveskite didesni skaiciu nei 0.";
//         return;
//     }
    
    
//     for(let person of people){
//         if (deletetNumeration === person.number){
//             console.log(people);
//             people.splice(deletetNumeration-1);
//             // console.log(people);
//             generateTableContent(people);
//             return;
//         }
//     }
//     deleteResultElement.innerText = "Operacija negali buti atlikta, tokios reiksmes nera sarase.";
// })


deleteButtonElement.addEventListener('click', () => {
    const removeElementInput=document.querySelector("#num");
    let deletetNumeration = +removeElementInput.value;
    removeElementInput.value = '';
    //findIndex() - grazina indeksa pagal elemento reiksme. Jei toks nerastas - grazina -1
    let foundIndex=people.findIndex((person)=>person.number===deletetNumeration);

    if(foundIndex === -1)
    {
        alert('Zmogaus su tokiu numeriu nera')
    }
    people.splice(foundIndex, 1);
    generateTableContent(people);
    return;

});