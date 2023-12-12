let currentDate = '2023-11-07';
let month=currentDate[5]+currentDate[6];
if (month==='12'){
    console.log('Gruodis');
}
if (month==='11'){
    console.log('Lapkritis');
}
if (month==='10'){
    console.log('Spalis');
}
if (month==='09'){
    console.log('Rugsėjis');
}
if (month==='08'){
    console.log('Rugpjūtis');
}
if (month==='07'){
    console.log('Liepa');
}
if (month==='06'){
    console.log('Birželis');
}
if (month==='05'){
    console.log('Gegužė');
}
if (month==='04'){
    console.log('Balandis');
}
if (month==='03'){
    console.log('Kovas');
}
if (month==='02'){
    console.log('Vasaris');
}
if (month==='01'){
    console.log('Sausis');
}

let bond = '\EMRG01\  #Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattips';
console.log(bond.length);

////// Variantas su masyvais
// labadiena = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguze', 'Birzelis', 'Liepa', 'Rugpjutis', 'Rugsejis', 'Spalis', 'Lapkritis', 'Gruodis'];
// menuo = month - 1;
// console.log(labadiena[menuo]);


////// Variantas su switch
// switch (month){
//     case '01':
//         console.log('Sausis');
//         break;
    
//     case '02':
//         console.log('Vasaris');
//         break;

//     case '11':
//         console.log('Lapkritis');
//         break;
//     default:
//         console.log('Nezinomas menuo');
// }
