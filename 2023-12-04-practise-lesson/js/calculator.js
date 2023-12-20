function executeCalculation()
{
    // document.querySelector("#num1").value nors ir yra html validacija number - sita funkcija ivesta reiksme tampa stringu todel reik koncertuoti su parselFloat
    let num1 = parseFloat(document.querySelector("#num1").value);   
    let num2 = parseFloat(document.querySelector("#num2").value);   
    let operation = document.querySelector("#operation").value;
    let resultElement = document.querySelector("p#result");
    

    // if (!isNaN(num1)&& typeof num1 === 'number' && !isNaN(num2)&& typeof num2 === 'number') /* si salyga butu atitikmuo zemesnei salyggai, tiesiog ji ilgesne ir tikslas butu jog false yra ta salyga kuri pasako, jog reik rodyti klaidos pranesima, jog neivesta reiksme, taip pat jei padedama sauktuka - invertinam salygga */
    if (isNaN(num1) || isNaN(num1))
    {
        resultElement.innerText = "Operacija negali buti atlikta, abu skaiciai turi buti ivesti.";
        return;
    }
    let calculationResult = calculate(operation, num1, num2);
    resultElement.innerText = calculationResult;
    
}

function calculate(operation, num1, num2)
{
    let labadiena;
    if (operation === '+')
    {
        labadiena = (num1 + num2).toString();
    }
    else if (operation === '-')
    {
        labadiena = (num1 - num2).toString();
    }
    else if (operation === '*')
    {
        labadiena = (num1 * num2).toString();
    }
    else if (operation === '/' && num2 !== 0)
    {
        labadiena = (num1 / num2).toFixed(2).toString();
    }
    else if (operation === '**')
    {
        if (num1 === 0 && num2 <= 0)
        {
            labadiena = "Tokia salyga negalima!";
        }
        else
        {
            labadiena = (num1 ** num2).toString();
        }
    }
    else
    {
        labadiena = "Nenumatyta";
    }
    return labadiena;
}

// unit test sample:

let pirmas = calculate('+', 1, 2);
if (pirmas === '3') {
    console.log('pirmas OK');
}


let antras = calculate('-', 7.6, 2);
if (antras === '5.6') {
    console.log('antras OK');
}



let trecias = calculate('/', 6, 7);
if (trecias === '0.86') {
    console.log('trecias OK');
}

// Destytojo sprendimo budas:
// function calculate() {
// 	let num1 = parseFloat(document.querySelector("#num1").value);
// 	let num2 = parseFloat(document.querySelector("#num2").value);
// 	let rez = document.querySelector("#rez");

// 	let operation = document.querySelector(`#operation`).value;
// 	// let rez;

// 	if (isNaN(num1) || isNaN(num2)) {
// 		rez.innerText =
// 			"Operacija negali buti atlikta, kadangi vienas iš skaičių yra neįvestas";
// 		return;
// 	}

// 	if (operation === "+") rez.innerText = num1 + num2;
// 	else if (operation === "-") rez.innerText = num1 - num2;
// 	else if (operation === "*") rez.innerText = num1 * num2;
// 	else if (operation === "/" && num2 !== 0) rez.innerText = num1 / num2;
// 	// ar num1===0 ir num2===0
// 	else if (operation === "**") {
// 		if (num1 === 0 && num2 <= 0)
// 			rez.innerText =
// 				"Jei pirmasis skaičius yra nulis o kitas yra negatyvus skaičius, negalime atlikti operacijos";
// 		else {
// 			rez.innerText = num1 ** num2;
// 		}
// 	}
// }