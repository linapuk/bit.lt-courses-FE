//1. Gauname visas šunų veisles
//2. Atvaizduoti veisles select elemente per funkciją
//3. Sukurti šuns nuotraukų atvaizdavimo funkciją (atvaizduojama pagal veislę)
//3.1 Susikurti dinamini URL, tam kad kreiptis į šuns veislės nuotraukas
//3.2 Kreipiames i serveri pagal dinaminį URL, norint gauti šuns veislės nuotraukas
//3.3 Kai gauname atsakymą dinamiškai generuoti HTML kodą. (dinaminis kodas yra generuojamas pagal gauta nuotraukų masyvą)
//3.4 Sugeneruotą kodą atvaizduoti tame elemente, kuriame norime kad atsirastų nuotraukos.
//4. Pridėti event listeneri selectui, kuris keis nuotraukas pagal veislę.

const breedSelectElement = document.querySelector("#breeds-select");
const dynamicAlbumElement = document.querySelector("#photo-album");
const breedsArray = [];

//1.
fetch("https://dog.ceo/api/breeds/list/all")
.then((response ) => response.json())
.then((response ) => parseAllBreeds(response.message)); //2 JS yra funkcine programavimo kalba auksciau const aprasyti irgi alikomi funkcijom, objektiniame programavime  bus objektai ir klases.

function parseAllBreeds(breeds){
    let dynamicHTML = "";

    for(let breed in breeds){
        // console.log(breed)
        // breed - veisles panadinimas
        // masyve esancios reiksmes - sub-veisle
        const subBreeds = breeds[breed];
        // console.log(subBreeds);
        if (subBreeds.length === 0){
            dynamicHTML+=`<option>${breed}</option>`;
            breedsArray.push(breed);
        }
        else{
            for(let subBreed of subBreeds){
            dynamicHTML+=`<option>${subBreed} ${breed}</option>`;
            breedsArray.push(`${subBreed} ${breed}`);// cia ikopijavo, bet galima buvo su pliuso zenklu auksciau aprirasyti
            }
        }
    }
    console.log(breedsArray); // matyti kiek is viso yra sunu veisliu, siam momentu yra 148
    parseDogImages(breedsArray[5]);
    breedSelectElement.innerHTML = dynamicHTML;
}

function parseDogImages(breed){
    let dynamicURL = generateDynamicDogPhotosURL(breed);
}

function generateDynamicDogPhotosURL(breed){
    let breedSpitted = breed.split(" ")// atliekam nes nuejus i network, failas random, header ir path matoma, jog kai yra veisle ir sub veisle jos atskyriamos sleshu ir apsikeicia vietom
    let breedSplittedReversed = breedSpitted.reverse();
    let finalBreed = breedSplittedReversed.join('/');
    // console.log(breedSplittedReversed); 
    console.log(finalBreed); 
    
    let fullURL =`https://dog.ceo/api/breed/${finalBreed}/images`;
    return fullURL;
}