const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

const users =[];
const usersLogin =[];
 
// server.get('/user/:id', (req, res) =>{
//     console.log("Method:" + req.method); 
//     console.log("Method:" + req.originalUrl); 
//     console.log("Method:" + req.body);
//     console.log("Method:" + JSON.stringify(req.params));
//     console.log("Buvo kreiptasi i serveri");
//     res.send("Labas pasauli");
// });

server.post("/register", (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    users.push({
        id: users.length + 1,
        username: username,
        email: email,
        password: password,
    });
    res.send("Atsakymas is serverio: POST.Register");
})

server.get("/users", (req, res) => {
    res.send(users);
});

server.get("/users/:id", (req, res) => {
    if(isNaN(req.params.id)){
        res.send("ID privalo buti skaicius");
    }

    const selectedUser = users.find((user)=>user.id === +req.params.id);
    if(!selectedUser){
        res.send("Tokio vartotojo nera");
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


server.listen(3000, () => {
    console.log("Aplikacija pasileido, jos adresas http://localhost:3000/ ");
});


server.post("/login", (req, res)=>{
    const {username, password} = req.body;
    console.log(req.body);
    //1. Validuojame, ar req.body turi tokius laukus kaip loginName ir password:
    if (!username || !password) {
        return res.status(400).send("Vartotojo vardo ir slaptazodzio laukas yra privalomas");
    }
    //2. Patikrinti, ar vartotojas su tokiu username egzistuoja bendrame masyve, jeigu neegzistuoja:
    // a. jei ne, tada siusti "Vartotojas neegzistuoja"
    // b. jei taip, toliau daromas tikrinimas
    const existingUser = users.find(user => user.username === username);

    if (!existingUser) {
        return res.status(404).send("Klaida! Tokio vartotojo nera.");
    }
    //3. Ar slaptazodis atitinka:
    if (existingUser.password !== password) {
        return res.status(401).send("Klaida! Neteisingas slaptazodis.");
    }

    res.send("Atsakymas is serverio: POST.Login: Sekmingai prisijungete prie sistemos!");
})
