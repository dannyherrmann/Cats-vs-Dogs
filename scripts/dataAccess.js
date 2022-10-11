const applicationState = {
    cats: [],
    dogs: [],
    catVote: 0,
    dogVote: 0,
    dogObj: [],
    catObj: [],
    users: []
};

const catAPI = "https://api.thecatapi.com/v1/images/search"
const dogAPI = "https://api.thedogapi.com/v1/images/search"
const mockDB = "http://localhost:8088"

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

export const fetchVotes = async () => {
    const dataFetch = await fetch(`${mockDB}/tally/`)
    const jsonData = await dataFetch.json()
    applicationState.catVote = jsonData[0].catVote
    applicationState.dogVote = jsonData[0].dogVote
}

export const getCatVote = () => {
    return applicationState.catVote
}

export const getDogVote = () => {
    return applicationState.dogVote
}

export const fetchObj = async () => {
    const dogObj = await fetch(`${mockDB}/dogObj`)
    const dogObjData = await dogObj.json()
    applicationState.dogObj = dogObjData

    const catObj = await fetch(`${mockDB}/catObj`)
    const catObjData = await catObj.json()
    applicationState.catObj = catObjData
}

export const getDogObj = () => {
    return applicationState.dogObj.map((x) => ({ ...x }))
}
export const getCatObj = () => {
    return applicationState.catObj.map((x) => ({ ...x }))
}

export const addVote = async (vote) => {

    const fetchMethod = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(vote)
    }

    const dataFetch = await fetch(`${mockDB}/tally/1`, fetchMethod)
    const jsonData = await dataFetch.json()
    return jsonData
}

export const addObj = async (obj, type) => {
    const fetchMethod = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj)
    }
    if (type === "dog") {
        const dataFetch = await fetch(`${mockDB}/dogObj`, fetchMethod)
        const jsonData = await dataFetch.json()
        return jsonData

    } else if (type === "cat") {
        const dataFetch = await fetch(`${mockDB}/catObj`, fetchMethod)
        const jsonData = await dataFetch.json()
        return jsonData
    }

}

// export const addDogVote = async (vote) => { }
export const fetchUsers = async () => {
    const dataFetch = await fetch(`${mockDB}/users/`)
    const jsonData = await dataFetch.json()
    applicationState.users = jsonData
}

export const getUsers = () => {
    return applicationState.users.map((x) => ({ ...x }))
}