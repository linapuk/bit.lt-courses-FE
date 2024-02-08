function sum(a, b){
    return a+b;
}

const multiplication = (a, b)=>{
    return a * b;
}


//Funkcijos eksportavimas (sum be skliaustu nes paduodama ne pati funkcija o reference i funkcija)
module.exports = {sum: sum, multiplication: multiplication};

