const usernameFieldElement = document.querySelector("#register-username"),
    emailFieldElement = document.querySelector("#register-email"),
    passwordFieldElement = document.querySelector("#register-password"),
    registerButtonElement = document.querySelector("#send-registration");

async function register()
{
    const promise = await fetch("http://localhost:3000/register",{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: usernameFieldElement.value ,
            email: emailFieldElement.value  ,
            password: passwordFieldElement.value ,
        }),
    }); // anksciau nenaudotas parametras - cia yra nustatymai, nusakyti koks yra metodas, headers, body (body galima tik string formatu, todel JSON.stringify javascript objekta konvertuoja i string)

    const response = await promise.text();
    console.log(response);
}
registerButtonElement.onclick = register;

const usernameLoginFieldElement = document.querySelector("#login-username"),
    passwordLoginFieldElement = document.querySelector("#login-password"),
    loginButtonElement = document.querySelector("#send-login");

async function login()
{
    const promise = await fetch("http://localhost:3000/prisijungimas",{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: usernameLoginFieldElement.value ,
            password: passwordLoginFieldElement.value ,
        }),
    }); // anksciau nenaudotas parametras - cia yra nustatymai, nusakyti koks yra metodas, headers, body (body galima tik string formatu, todel JSON.stringify javascript objekta konvertuoja i string)
    const response = await promise.text(); //auksciau aprasome, ka issiunciame, o cia jog laukiame atsakymo
    console.log(response); // kad matytume atsakyma is serverio
}
loginButtonElement.onclick = login;