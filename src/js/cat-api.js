import axios from "axios";
const BASE_URL = "https://api.thecatapi.com/v1"

axios.defaults.headers.common["x-api-key"] = "live_GBJc5k2JxLylGX7KOO9cRwxDmzkjPapHGMBpxl6qTlrn1tcKzWM0My5bSAMsXP6X";

export function fetchBreeds() {
    return axios.get(`${BASE_URL}/breeds`)
    .then((response) => response.data)
}

export function fetchCatByBreed(breedId) {
    return axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
    .then((response) => response.data)
}

