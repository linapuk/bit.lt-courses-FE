const usernameFieldElement = document.querySelector("#register-username"),
    emailFieldElement = document.querySelector("#register-email"),
    passwordFieldElement = document.querySelector("#register-password"),
    registerButtonElement = document.querySelector("#send-registration"),
    usernameLoginFieldElement = document.querySelector("#login-username"),
    passwordLoginFieldElement = document.querySelector("#login-password"),
    loginButtonElement = document.querySelector("#send-login");


async function register()
{
    const promise = await fetch("http://localhost:3000/register",{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: usernameFieldElement.value,
            email: emailFieldElement.value,
            password: passwordFieldElement.value,
        }),
    });

    const response = await promise.text();
    console.log(response);
    nullifyInputValues();
}
registerButtonElement.addEventListener('click',register);

async function login()
{
    const promise = await fetch("http://localhost:3000/login",{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: usernameLoginFieldElement.value,
            password: passwordLoginFieldElement.value,
        }),
    });

    const response = await promise.text();
    console.log(response);
    nullifyInputValues();
}
loginButtonElement.addEventListener('click',login);

function nullifyInputValues()
{
    passwordFieldElement.value = '';
    emailFieldElement.value = '';
    usernameFieldElement.value = '';
    usernameLoginFieldElement.value = '';
    passwordLoginFieldElement.value = '';
}
