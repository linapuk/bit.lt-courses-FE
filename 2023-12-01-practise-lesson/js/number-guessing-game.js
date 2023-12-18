function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let  
    randomNumber = rand(1,20),
    guessCount = 6;

// console.log(guessCount);
console.log(randomNumber);

function guessNumber()
{
    let inputElement = document.querySelector("#guessInput");
    let resultParagraph = document.querySelector("#result");
    let numberElement = document.querySelector("#number");

    if (guessCount === 0)
    {
        resultParagraph.innerText = `Spėjimų skaičius baigėsi, bandykite dar kartą perkrovę puslapį!`;
        return; /* jei idedame returna tai turi tokia savybe jog tada nusitraukia funkcijos veikimas */
    }

    guessCount--;
    numberElement.innerText = guessCount;
    let inputValue = inputElement.value;
    // console.log(inputValue);
    if(inputValue > randomNumber)
    {
        resultParagraph.innerText = `Spėjimas buvo neteisingas, ieškomas skaičius yra mažesnis! `;
    }
    else if(inputValue < randomNumber)
    {
        resultParagraph.innerText = `Spėjimas buvo neteisingas, ieškomas skaičius yra didesnis! `;
    }
    else
    {
        resultParagraph.innerText = `Teisingas spėjimas! Po ${6-guessCount} badymų.`;
    }
    guessCount--;
}


// console.log(randomNumber);