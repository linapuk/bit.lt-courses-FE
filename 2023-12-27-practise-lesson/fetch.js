// uzduotis: atisitiktinio suns nuotraukos gavimas po refresh page
// fetch yra asinchronine funkkcija
// fetch - funkcijos aprasymas
fetch('https://dog.ceo/api/breeds/image/random')
    .then((atsakymas) => atsakymas.text()) //1. etapas ateina atsakymas is serverio kuris buna text formatu.
    .then((atsakymas)=> console.log(atsakymas))// 2. etapas iskoduoto teksto panaudojimas

    //yra 0.3s lagas, kol ateina zinute is serverio, js gali vykdyti paskesnius veiksmus kol ateina atsakymas
    //todel fetchas yra asinchrniskas nes js vykdo savo koda ir lygegreciai ivyksta kreipimasis i serveri

    fetch('https://dog.ceo/api/breeds/image/random')
    .then((atsakymas) => atsakymas.json()) //pakeitem text i json
    .then((atsakymas) =>{
        console.log(atsakymas)//matoma, jog json formatu grazinamas masyvo formatu
        document.write(`<img src="${atsakymas.message}"/>`)
    })

    fetch('https://dog.ceo/api/breeds/list/all')
    .then((atsakymas) => atsakymas.json()) //pakeitem text i json
    .then((atsakymas) =>{
        console.log(atsakymas)
    })

    // nd sukurti selekta kuriame galima issirinkti veisle ir kad parodytu tos veisles nuotrauka