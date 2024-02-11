async function callToServer(){
    try{
    const promise = await fetch("http://localhost:3000/");
    const response = await promise.text(); // text nes siunciame tiesiog teksta
    console.log(response); // try bloke nnurodom koki koda mes bandome
    }
    catch(err){
        console.log(err);
    }; // catch identifikuojame klaida
} 
callToServer();

async function callToServerTodos(){
    try{
    const promise = await fetch("http://localhost:3000/get-todos");
    const response = await promise.text();
    console.log(JSON.parse(response));
    showTodos(JSON.parse(response));
    }
    catch(err){
        console.log(err);
    }; 
} 
callToServerTodos();

function showTodos(todos){
    const unorderedListElement = document.querySelector(".todos");
    let dynamicHtml = " ";
    for(let todo of todos)
    {
        dynamicHtml += `<li>${todo.author} ${todo.todo}</li>`
    }
    unorderedListElement.innerHTML = dynamicHtml; // pats dinaminis thmlas tures buti pridedamas prie unorderedListElement
}
