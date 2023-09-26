import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_GBJc5k2JxLylGX7KOO9cRwxDmzkjPapHGMBpxl6qTlrn1tcKzWM0My5bSAMsXP6X";

export function fetchBreeds() {
    return axios.get("https://api.thecatapi.com/v1/breeds")
    .then((response) => response.data)
    .catch((error) => {
        console.error("Помилка при отриманні списку порід:", error);
        throw error;
    });
}

export function fetchCatByBreed(breedId) {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then((response) => response.data)
    .catch((error) => {
        console.error("Помилка при отриманні інформації про кота:", error);
        throw error;
    });
}

