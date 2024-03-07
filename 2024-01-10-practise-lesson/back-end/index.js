// Kai kreipiasi/importuojama viena funkcija:
// const isvesti = require("./logging")

// Kai kreipiasi/importuojama daugiau nei viena funkcija I budas:
// const isvesti = require("./logging").log; // jei importuojama daugiau nei viena funkcija, gauname objekta
// const isvestiBeDatos = require("./logging").logNoDate;

// Kai kreipiasi/importuojama daugiau nei viena funkcija II budas:
// const {log, logNoDate} = require("./logging")

// function kreipimasisIServeri()
// {
//     console.log("Siunciamas atsakymas atgal");
//     log("Ivyko vartotojo kreipimasis i serveri");
//     logNoDate("Ivyko vartotojo kreipimasis i serveri");
// }
// kreipimasisIServeri();

// biblioteku gavimas
const express = require("express");
const cors = require("cors");

const server = express();
// isirasome CORS biblioteka, kad klientas gaaletu kreiptis i musu express serveri npm install cors
// tam kad naudotu biblioteka CORS rasoma (CORS yra middleware funkcija):
server.use(cors()); // naudojam corsa kol kas ta kad nereiktu sukti galvos apie headerius
// requesto body ateis json formatu ir bus konvertuotas objekto formatu, todel reikia naudoti si midleware:
server.use(express.json());

const users =[]; //masyvas bus sudarytas is objektu
const todos = [];


//apsirasomas endpointas
// req - request, nesa duomenis apie requesta, jo parametrai pateikti zemiau per console.log.
// res - 
server.get('/user/:id', (req, res) =>{
    console.log("Method:" + req.method); // kad pamatyti sita reikia nueiti i http://localhost:3000/ ir parefreshinti page, tada terminale pamatomas rezultatas -> Method:GET
    console.log("Method:" + req.originalUrl); // kad pamatyti sita reikia nueiti i http://localhost:3000/ ir parefreshinti page, tada terminale pamatomas rezultatas -> Method:/
    console.log("Method:" + req.body); // pamatoma, kas yra gaunama is kliento (body) -> Method:undefined, turetume sita gauti su POST metodu
    // console.log("Method:" + req.params); // gaunamas objektas
    console.log("Method:" + JSON.stringify(req.params)); // gaunamas objektas -> Method:{}, pvz taip atrodo, kai yra server.get('/user/:id') ->  Method:{"id":"4"}
    console.log("Query:" + JSON.stringify(req.query)); // gaunam objekta, todel darom so JSON cia yra uzklausa, tuscias,jog prie uRL nebra prirasomas  "?" ir kiti kintamieji. http://localhost:3000/user/4?parameter1=Petras -> Query:{"parameter1":"Petras"}, visad ateina string formatu, nesvarbu, ar paduodamas skaicius. Jei yra poreikis nurodyti daugiau parametru, jis nurodomas su "&" http://localhost:3000/user/4?parameter1=Petras&parameter2=Pavardenis -> Query:{"parameter1":"Petras","parameter2":"Pavardenis"}. 
    // http://localhost:3000/user/sort=ascending -> Method:{"id":"sort=ascending"} BE nustatoma, koks tai masyvas, isrikiuoja didejancia tvarka duomenis ir juos siuncia isrikiuotus i klientine puse.
    console.log("Buvo kreiptasi i serveri");
    res.send("Labas pasauli");
});

// POST method
server.post("/register", (req, res) => {
    try{
        // apsirasome, kokiu duomenu tikimes gauti:
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        // console.log(req.body); // gavome terminale -> { username: 'Lina', email: 'lina@puksme.com', password: 'test' }
        // gautus vartotojus reiks saugoti, tam susikuriam kintamaji const users=[]
        // reikia sukurti id ir ji pusinti kartu su user duomenimis i masyva, kiekviena karta kai paleisiu serveri bus pridedamas useris:
        users.push({
            id: users.length + 1,
            username: username,
            email: email,
            password: password,
        });
        res.send("Atsakymas is serverio "); // visad reikalingas atsakymas, siuo atveju sitas mums veikia kaip pllaseholderis
    }
    catch(err){
        res.send("Atsitiko klaida su vartotojo ivestimi");
    }
})

// endpointas skirtas matyti visus userius
server.get("/users", (req, res) => {
    res.send(users); // http://localhost:3000/users parefreshinus 5500 - gaunu [{"id":1,"username":"Lina","email":"lina@puksme.com","password":"test"},{"id":2,"username":"Lina","email":"lina@puksme.com","password":"test"}]
});
// endpointas  skirtas gauti useri pagal ID (pripreiks paieskos masyve pvz find metodu, viskas kas pareina is request parametru yra stringas, todel daro negriezta patikrinima vietoj ===, == kur sakoma, jog tekstas gali buti lygus skaiciui, arba kitas pudas parseInt arba +)
server.get("/users/:id", (req, res) => {
    // jei yra gaunami duomenys, juos reiktu validuoti.
    if(isNaN(req.params.id)){
        res.send("ID privalo buti skaicius"); // jei tarkim butu paduotas 46ab, tai po +46ab -> konvertavus gautume NaN (nor a number)
    }

    const selectedUser = users.find((user)=>user.id === +req.params.id);
    //gali buti nerandamas toks ID, todel pridedame IF sallyga, kurioje klausiama ar egzistuoja selectedUser:
    // tikimasi gauti netuscia objekto reiksme, tai tikimasi gauti TRUE, bet prirasius ! TRUE virsta FALSE. 
    if(!selectedUser){
        res.send("Tokio vartotojo nera"); // "res.send" nutraukiama visa funkcija visaip kaip return, ir toliau kodas nera vykdomas
    }
    else{
        res.send(selectedUser);
    }
    // tokia praktika kaip auksciau aprasyta nera taikytina, Gedo variantas apie ta pati:
    // if(typeof selectedUser === 'object'){
    //     res.send(selectedUser);
    // }
    // else{
    //     res.send("Tokio vartotojo nera");
    // }
});

// ND
server.post("/prisijungimas", (req, res)=>{
    //1. Validuojame, ar req.body turi tokius laukus kapi loginName ir password
    const username = req.body.username, 
        password = req.body.password;
    //jei nera objekto username
    if (!username) 
        return res.status(400).send("Prasome teisingai ivesti varotojo varda");
    if (!password) 
        return res.status(400).send("Prasome ivesti slaptazodi");
    //2. Patikrinti, ar vartotojas su tokiu username egzistuoja bendrame masyve, jeigu neegzistuoja:
    // imame users masyva, ieskome naudojant find metoda, turesime kiekvie oje iteracijoje po varotoja, tikrinsime ar sis req.body.username, egzistuja nors viename vartotoje
    const selectedUser = users.find((user)=>user.username.toLowerCase() === username.toLowerCase()); // jei nerandamas, undefined
    if (!selectedUser) 
        return res.status(404).send("Toks vartotojas neegzisuotja"); // pridejom return visiems kad is calbackines funkcijos iseina ir veliau nebus daromas joks kodas, patikrinimas, o sius zinute
    // a. jei ne, tada siusti "Vartotojas neegzistuoja"
    // b. jei taip, toliau daromas tikrinimas
    //3. Ar slaptazodis atitinka:
    // a. jei atitinka - tada siunciame atsakyma is serverio "Sekmingai prisijungete prie sistemos"
    if (selectedUser.password === password)
    {
        return res.status(200).send("Sekmingai prisijungete prie sistemos");
    }
    return res.status(400).send("Blogi prisijungimo duomenys")
        // res.send("Sekmingai prisijugete prie sistemos");
        // Serveris peradresuija i kita svetaine
        // res.redirect("http://127.0.0.1:5500/bit.lt-courses-FE/2024-01-10-practise-lesson/front-end/todos.html"); // skiaustuose nurodoma kur turi nuredirektinti

})

//CRUD opeeracijos TODOS:
//  Create "POST":
server.post('/todos', (req, res) =>{
    const {username, todo} = req.body // destytojas pasakojo jog tai atitkikmuo tbutu  const username = req.body.username; susikurs kintamieji tokie kokie reikia
    // validacija, ar egzisuotja userame, todo, ar egzistuoja toks useris:
    if(!username) return res.status(400).send("Blogai ivestas username"); // jam nesigavo tai dare su .json({zinute:"Blogai ivestas username"})
    if(!todo) return res.status(400).send("Blogai ivestas todo");
    const selectedUser = users.find((user)=>user.username.toLowerCase() === username); // paskutinis username turimas tas kur ateina is cia const {username, todo} = req.body 
    // jeigu tokio userio nera vykdomas zemesne sakygaa jog useris undifined
    if(!selectedUser)return res.status(404).send("Vartotojas nerastas!");
    //naujos reiksmes pridejimas prie masyvo todos=[]
    const newTodo = {id: todos.length+1, username, todo}
    todos.push({username, todo});
    res.status(201).json({message:"Naujas todo buvo sekmingai pridetas",newTodo});
});
// Read "GET" visu todos gavimas:
server.get('/todos', (req, res)=>{
    res.status(200).json(todos);
});
// Read "GET" konkretaus todos gavimas:
server.get('/todos/:id',(req, res)=>{
    // Namu darbai pabaigti
});
// Update "PUT" konkretaus iraso atnaujinimas:
server.put('/todos/:id',(req, res)=>{
    // reikalinga validacija kaip ir post metode:
    // reikia gauti id ir laukeli kuri reiks updatinti
    const id = +req.params.id; // + konvertuojam stringa i skaiciu
    // tikrinam ar tai isvis skaicius, salyga sako, jog jeit ai nera skaicius grazinti klaidos koda ir pranesima:
    if(isNaN(+id)) return res.status(400).json({message:"Įveskite tinkamą ID (skaicius)"});
    const {username, todo} = req.body;
    const existingUser = users.find((user)=>user.username.toLowerCase() === username.toLowerCase()); // cia gauname pati vartotoja, jei nerandama vykdome sekancia eilute:
    if(!existingUser)return res.status(404).json({message:"Toks vartotojas neegzistuoja"});

    const existingTodo = todos.findIndex((curreentTodo)=>curreentTodo.id === id);
    todos[existingTodo] = {...todos[existingTodo], todo, username} //isspreadinimas uz kablelio laukeliai kuriuos norime pakeisti
})

// process.env.PORT // portas gaunamas pasinaudojant aplinkos kintamaisiais
server.listen(3000, () => {
    console.log("Aplikacija pasileido, jos adresas http://localhost:3000/ ");
}); // Porta isivaizduoti kaip elektros lizda, 3000-skirtas serveriui, kai html pasileidinejam, naudojam 5500 porta, kitas parametras callback funkcija - kuri nurodo, kas nutiks, kai portas pasileidzia


