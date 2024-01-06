const arr = [1, 4, 8, -2, "Petras"];
console.log(typeof arr);

const obj = {
    color: 'red',
    name: 'Petras',
}
console.log(typeof obj);

//objektas kitaip aprasomas ir turi truputi kitokia sintakse. neribojamas lauku kiekis ir tipas, gali objekte buti net ir masyvas.
//masyve reiksme galime "pasiekti" indeksu, o objekte - pavadinimu:
// Masyvas:
console.log(arr[1]);

//Objektas:
console.log(obj['color']);
// galima i objekta kreiptis per taska:
console.log(obj.color);

//template'ineje sistemoje (objektinis programavimas) vadinama firstName "Key", o 'John' - "Value".
//angliskai objekto laukai vadinami "Property".
//kaip ir kintamuju kurime negali prasideti skaiciumi ir negali buti tarpu
// o dabar tai vadinasi Keyvalue pair
//objektai paduodami per reference ir todel jei laukas pridedamas tik veliau objektas atsinaujina dar pries lauko pridejima
const person = {
    //reikia deti kableli deti pabaigoje po value ir tai laikoma -> JSON - JavaScipt object notation
    firstName: 'John',
    lastName: 'Doe',
    age: 36,
    nationality: 'British',
    isMarried: true,
    kids: ['Sara','Boston'],
};

//kreipimasis i person age
console.log(person.age);

console.log(`Hello, my name is ${person.firstName} ${person.lastName}, my age is ${person.age}, I am ${person.nationality} and my kids are ${person.kids.join(', ')}. And I am ${person.isMarried ? 'Married': 'Not married'}.`)//inline if'as ? true : false

// galima i kintamaji isideti:
const greetingText = `Hello, my name is ${person.firstName} ${person.lastName}, my age is ${person.age}, I am ${person.nationality} and my kids are ${person.kids.join(', ')}. And I am ${person.isMarried ? 'Married': 'Not married'}.`

console.log(greetingText);

//Tuscio objekto sukurimas ir jo lauku pildymas explicity budu
const gyvunas = {};
console.log(gyvunas);

gyvunas.animalType = 'Liutas';
console.log(gyvunas);

let laukas = "animalType";

//i objekto laukus galima kreiptis 3 budais:
console.log(gyvunas[laukas]);
console.log(gyvunas["animalType"]);
console.log(gyvunas.animalType);

gyvunas.occupation = 'valdyti';
console.log(gyvunas);

const dog ={
    breed: "German shephared",
    name: "Angela",
    age: 7,
    colors: ["brown", "black"],
}

//Dinaminis savybiu paemimas
// naudojamas ciklas in, kad isgauti indeksus o tiksliau siuo atveju property
// ciklas suksis 4 kartus, nes objektas turi 4 laukus
for (let property in dog){
    console.log(`${property}: ${dog[property]}`);
}

const newDog = {};
newDog.breed = "German shephared";
newDog.name = "Angela";
newDog.age = 7;
newDog.colors = ["brown", "black"];
console.log(newDog);

console.log (newDog.name, newDog.age)

//Masyvas, kuris susideda is objektu:
const people = [
    {
        firstName: 'Laura',
        lastName: 'Lauriene',
        age: 25,
        nationality: 'USA',
    },
    {
        firstName: 'Saulius',
        lastName: 'Saulenas',
        age: 30,
        nationality: 'Lithuania',
        isMarried: true,
    },
    {
        firstName: 'John',
        lastName: 'Smith',
        age: 39,
        nationality: 'Canada',
    }
];

//Kreipimasis i objektus masyve
console.log(people[1].firstName, people[1].lastName)

//norim reiksme imti todel naudojam for of
for (let person of people){
    console.log(person);

}

for (let person of people){
    console.log(person.firstName, person.lastName);
}