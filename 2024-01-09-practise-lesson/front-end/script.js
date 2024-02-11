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
            username: "Lina",
            email: "lina@puksme.com",
            password: "test",
        }),
    }); // anksciau nenaudotas parametras - cia yra nustatymai, nusakyti koks yra metodas, headers, body (body galima tik string formatu, todel JSON.stringify javascript objekta konvertuoja i string)

    const response = await promise.text();
    console.log(response);
}
register();
