import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import Swal from 'sweetalert2';

const breedSelect = document.querySelector(".breed-select");
const breedName = document.querySelector("#breed-name");
const breedDecription = document.querySelector("#breed-description");
const breedTemparament = document.querySelector("#breed-temperament");
const loader = document.querySelector(".loader");


fetchBreeds()
.then((breeds)=>{
    breeds.forEach((breed) => {
        const option = document.createElement("option");
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);
    });
    loader.style.display = "none";
})
.catch((err) =>{
    loader.style.display = "none"; 
    Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Error fetching cat breeds. Try reloading the page!',
    });
});

breedSelect.addEventListener("change", () =>{
    const selectedBreedId = breedSelect.value;
    loader.style.display = "block";
    fetchCatByBreed(selectedBreedId)
    .then((catInfo)=>{
        const [cat] = catInfo;
        breedName.textContent = cat.breeds[0].name;
        breedDecription.textContent = cat.breeds[0].description;
        breedTemparament.textContent = cat.breeds[0].temperament;
        loader.style.display = "none";
    })
    .catch((err)=>{
        loader.style.display = "none"; 
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Error fetching cat information. Try again later!',
        }); 
    })
})