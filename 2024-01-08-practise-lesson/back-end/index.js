/* // Modulio importavimas
const sum = require('./math-module').sum;
const multiplication = require('./math-module').multiplication;

const minus = require('./minus-modul');


// Pavadinimai importuojant gali buti pasirinktiniai
console.log(sum(4, 5));
console.log(minus(5, 5));
console.log(multiplication(2, 2)); */

// Serverio sukurimas
/* 
// Serverio sukurimas naudojant HTTP moduli (jis yra jau integruotas paciame node.js)

//I step. Importuojam http moduli:
const http = require("http"); // nurodom tik pavadinima, nereik path

//II step. Node.js serverio kintamojo sukurimas:
const server = http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url === "/" && req.method === "GET"){
        
        res.write('Tai yra mano atsakymas');// ar requestas atejs is url lygus "/", nurodome ka mes norime atsakyti is serverio
        res.end();
    }  
    // if(req.url === "/check"){
    //     res.write('Tai yra mano atsakymas');// ar requestas atejs is url lygus "/", nurodome ka mes norime atsakyti is serverio
    //     res.end(); ////responsas turi buti uzbaigtas, tai nurodo jog atsakymas uzbaigtas, jei butu jis pirmam ife tai jau sito ifo netikrintu
    // }  
});// sukuriamas serverio instance,is http modulio pasinaudojam funkcija createServer, ir matome jog jam reik parametru: request listener, tai callback funkcija, kurioje paduodame visus API endpointus, funkcija pildosi, kuo daugiau turi endpointu

//III step. Serverio paleidimas:
server.listen(3000); // 3000 - nurodomas portas, jis turetu skirtis nuo frontend.
console.log("Server is started on port 3000");
 */
// Serverio sukurimas naudojant EXPRESS moduli (instaliavome express)

const { json } = require('express');
const express = require('express');
// const cors = required('cors');
const app = express(); // funkcija kuri sukuria serveri atitinka sita const server = http.createServer((req, res)=>{
let countOfVisitors = 0;

// Uzduotis: masyva sudarys obejktai, visa gauti masyva is serverio
const todos = [
    {author: 'Justinas', todo: '1.Nueiti i parduotuve'},
    {author: 'Justinas', todo: '2.Nusipirkti alaus'},
    {author: 'Justinas', todo: '3.Gerti alu'},
]; 

// app.use(cors());
app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('hello world');
});
app.get('/test', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('Serveris veikia');
});
app.get('/count', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    countOfVisitors++;
    res.send('Stai tiek kartu aplankytas serveris: '+countOfVisitors);
});

app.get("/get-todos",(req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(JSON.stringify(todos)); //paverciam stringu su json
}) // GET - metodas skirtas informacijoss gavimui
//REQUEST - talpina informacija, susijusia su paciu uzsaymu serveriui, is kur kreipiamasi, kokie duomennys pateikiami is kliento puses, gauname pilna API endpointa
//RESPONSE - yra skirtas atsakymams


//serverio paleidimas su express
app.listen(3000);
console.log('Serveris sekmingai pasileido portu 3000')