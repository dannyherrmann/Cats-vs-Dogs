import { catDog } from "./catVdog.js";
import { fetchCatAPI, fetchDogAPI, fetchVotes, fetchObj } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

const render = async () => {
    await fetchCatAPI();
    await fetchDogAPI();
    await fetchVotes();
    await fetchObj();
    mainContainer.innerHTML = catDog()
}

render()


document.addEventListener("stateChanged", event => {
    render()
})