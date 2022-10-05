import { catDog } from "./catVdog.js";
import { fetchCatAPI } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

const render = async () => {
    await fetchCatAPI();
    mainContainer.innerHTML = catDog()
}

render()