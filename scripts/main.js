import { catDog } from "./catVdog.js";
import { fetchCatAPI, fetchDogAPI } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

const render = async () => {
    await fetchCatAPI();
    await fetchDogAPI();
    mainContainer.innerHTML = catDog()
}

render()
