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
    try
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
        if (response === "Sekmingai prisijungete prie sistemos")
        {
            window.location.href = "http://127.0.0.1:5500/bit.lt-courses-FE/2024-01-10-practise-lesson/front-end/todos.html"; // svarbu! lsaikinas sprendimas, tik tam kad nureedirectintu, nnes yra kazkokia klaida ir destytojas nerado sprendimo
        }
        else{
            console.log("Nerisijungete")
        }
    }
    catch(error)
    {
        console.log(error);
    }
}
loginButtonElement.onclick = login;
