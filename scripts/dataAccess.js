const applicationState = {
    cats: [],
    dogs: []
};

const catAPI = "https://api.thecatapi.com/v1/images/search"
const dogAPI = "https://api.thedogapi.com/v1/images/search"

export const fetchCatAPI = async () => {
    const dataFetch = await fetch(`${catAPI}`)
    const jsonData = await dataFetch.json()
    applicationState.cats = jsonData;
};

export const getCats = () => {
    return applicationState.cats.map((x) => ({ ...x }))
};

export const fetchDogAPI = async () => {
    const dataFetch = await fetch(`${dogAPI}`)
    const jsonData = await dataFetch.json()
    applicationState.dogs = jsonData
}

export const getDogs = () => {
    return applicationState.dogs.map((x) => ({ ...x }))
}