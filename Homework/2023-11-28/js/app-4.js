let actressName = 'Gediminas';
let actressSurname = 'Puksmys';
let actressNameLength=actressName.length;
let actressSurnameLength=actressSurname.length;
let a = actressNameLength-3;
let b = actressNameLength-2;
let c = actressNameLength-1;
let d = actressSurnameLength-3;
let e = actressSurnameLength-2;
let f = actressSurnameLength-1;
let smth = actressName[a]+actressName[b]+actressName[c]+actressSurname[d]+actressSurname[e]+actressSurname[f];

// let smth = actressName[actressNameLength-3]+ actressName[actressNameLength-2]+ actressName[actressNameLength-1]+actressSurname[actressSurnameLength-3]+actressSurname[actressSurnameLength-2]+actressSurname[actressSurnameLength-1];
console.log(smth);