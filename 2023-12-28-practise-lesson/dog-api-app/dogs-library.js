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
.then((response ) => parseAllBreeds(response.message)); //2 JS yra funkcine programavimo kalba auksciau const aprasyti irgi atlieka funkciju veiksmus, objektiniame programavime  bus objektai ir klases.

function parseAllBreeds(breeds){
    let dynamicHTML = "";

    for(let breed in breeds){
        // console.log(breed)
        // breed - veisles pavadinimas
        // subBreeds - sub-veisle - masyve esancios reiksmes
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
    // console.log(breedsArray); // matyti kiek is viso yra sunu veisliu, siam momentu yra 148
    parseDogImages(breedsArray[3]);
    breedSelectElement.innerHTML = dynamicHTML;
}

function parseDogImages(breed){
    let dynamicURL = generateDynamicDogPhotosURL(breed);//3.1
    // console.log(dynamicURL);
    fetch(dynamicURL)//3.2
    .then ((response) => response.json())
    .then ((response) => generateDynamicDogPhotos(response.message));//kreipiamasi i objekto message masyva 3.3
    // dynamicAlbumElement.innerHTML
}

/* function generateDynamicDogPhotosURL(breed){
    let breedSpitted = breed.split(" ")// atliekam nes nuejus i network, failas random, header ir path matoma, jog kai yra veisle ir sub veisle jos atskyriamos sleshu ir apsikeicia vietom : https://dog.ceo/api/breed/bullterrier/staffordshire/images/random
    console.log(breed); 
    console.log(breedSpitted); 
    let breedSplittedReversed = breedSpitted.reverse();
    // console.log(breedSplittedReversed); 
    let finalBreed = breedSplittedReversed.join('/');
    // console.log(finalBreed);  */

    // Kopozicija optimizuijant generateDynamicDogPhotosURL funkcija atrodytu taip:
    function generateDynamicDogPhotosURL(breed){//3.1
        let finalBreed = breed.split(" ").reverse().join('/');
        return `https://dog.ceo/api/breed/${finalBreed}/images`;
    }

    function generateDynamicDogPhotos(photosArray)//3.4
    {
        // console.log(photosArray);
        let dynamicHTML = '';
        for(let photo of photosArray)
        {
            dynamicHTML+= ` <div class="col-4 mx-auto">
            <img src="${photo}"
            style="width: 100%"
            />
        </div>`
        }
        dynamicAlbumElement.innerHTML=dynamicHTML;
    }

    // 4.
    breedSelectElement.addEventListener('change', ()=> {
        parseDogImages(breedSelectElement.value);
    })