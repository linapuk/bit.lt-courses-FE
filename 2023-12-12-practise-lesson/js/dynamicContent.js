const people = [];
let currentNumeration = 1; 

//Button elemeto gavimas:
// const buttonElement = document.getElementById('addButton);
// const buttonElement = document.querySelectorAll('button');
const buttonElement = document.querySelector("#addButton");
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

const deleteButtonElement = document.querySelector("#removeButton");

deleteButtonElement.addEventListener('click', () => {
    let deletetNumeration = parseInt(document.querySelector("#num").value); 
    let deleteResultElement = document.querySelector("#deleteResult");
    deleteResultElement.innerText = "";
    if (deletetNumeration <= 0){
        deleteResultElement.innerText = "Operacija negali buti atlikta, iveskite didesni skaiciu nei 0.";
        return;
    }
    
    
    for(let person of people){
        if (deletetNumeration === person.number){
            console.log(people);
            people.splice(deletetNumeration-1);
            // console.log(people);
            generateTableContent(people);
            return;
        }
        else{
            
        }
    }
    
})