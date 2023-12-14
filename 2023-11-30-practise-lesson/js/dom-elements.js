// HTML elemento priskyrimas kintamajam

// function changeElementText()
// {
//     let element = document.querySelector('.newParagraph');
//     element.innerText = 'Hello world!';
// }


function changeElementText()
{
    let nameInput = document.querySelector('#name');
    let surnameInput = document.querySelector('#surname');
    let paragraph = document.querySelector('.newParagraph');

    // elementas.value - iš inputo ištraukia informaciją;
    let dataFromInput1 = nameInput.value;/* reiksme is inputo */
    let dataFromInput2 = surnameInput.value;/* value reiksme is inputo ir selectors dropdown, checkbox*/
    // paragraph.innerText = dataFromInput;/* reiksme is inputo priskyriama paragrafui */
    paragraph.innerText =`Sveiki prisijunge prie puslapio, ${dataFromInput1} ${dataFromInput2}!`;

}

let loginName = 'Petras';
let loginPassword = '123321';

function login ()
{
    // HTML elemento priskyrimas kintamajam
    let usernameInput = document.querySelector('#username');
    let passwordInput = document.querySelector('#password');

    // reiksmes istraukimas is input elementu
    let dataFromInputUsername = usernameInput.value;
    let dataFromInputPassword = passwordInput.value;

    // patikrinti ar ivesti duomenys teisingi
    if(loginName === dataFromInputUsername && loginPassword  === dataFromInputPassword)
    {
        console.log(`Prisijungimo duomenys teisingi!`);
    }
    else
    {
        console.log(`Prisijungimo duomenys neteisingi!`)
    }
    }