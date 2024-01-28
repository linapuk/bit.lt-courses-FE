fetch('https://dog.ceo/api/breeds/list/all')
    .then((response) => response.json())
    .then((response) => {
        // console.log(response);
        const breedSelector = document.getElementById('breed-selector');

        // Check if the response status is success
        if (response.status === 'success') {
            const breeds = response.message;

            // Loop through the breeds and create options
            for (const breed in breeds) {
                if (breeds.hasOwnProperty(breed)) {
                    // If the breed has sub-breeds, create options for each sub-breed
                    if (breeds[breed].length > 0) {
                        for (const subBreed of breeds[breed]) {
                            const option = document.createElement('option');
                            option.value = `${breed}-${subBreed}`;
                            option.textContent = `${breed} - ${subBreed}`;
                            breedSelector.appendChild(option);
                        }
                    } else {
                        // If no sub-breeds, create option for the main breed
                        const option = document.createElement('option');
                        option.value = breed;
                        option.textContent = breed;
                        breedSelector.appendChild(option);
                    }
                }
            }
        } else {
            console.error('Failed to fetch dog breeds.');
        }
    })
    .catch((error) => console.error('Error:', error));

    document.addEventListener('DOMContentLoaded', function () {
        const breedSelector = document.getElementById('breed-selector');
        const breedTitle = document.getElementById('breed-title');
    
        // Listen for the 'change' event on the breed selector
        breedSelector.addEventListener('change', function () {
            // Get the selected value
            const selectedBreed = breedSelector.value;
    
            // Update the content of the breed title
            breedTitle.textContent= selectedBreed.toUpperCase() ;
        });
    });

    fetch('https://dog.ceo/api/breed/hound/images')
    .then((response) => response.json())
    .then((response) => {
        console.log(response);
    })

    document.addEventListener('DOMContentLoaded', function () {
        const breedSelector = document.getElementById('breed-selector');
        const breedPhoto = document.getElementById('bread-photo');
    
        // Store the fetched images in an object
        const breedImages = {
            'afghan': ['https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg', 'https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg', /*... other images ...*/],
            // Add entries for other breeds as needed
        };
    
        // Listen for the 'change' event on the breed selector
        breedSelector.addEventListener('change', function () {
            // Get the selected value
            const selectedBreed = breedSelector.value;
    
            // Get the array of images for the selected breed
            const imagesForBreed = breedImages[selectedBreed];
    
            // Check if there are images for the selected breed
            if (imagesForBreed && imagesForBreed.length > 0) {
                // Choose a random image from the array
                const randomIndex = Math.floor(Math.random() * imagesForBreed.length);
                const selectedImage = imagesForBreed[randomIndex];
    
                // Update the source of the breed photo
                breedPhoto.src = selectedImage;
                breedPhoto.alt = `Photo of ${selectedBreed}`;
            } else {
                console.error(`No images found for ${selectedBreed}.`);
            }
        });
    });
    