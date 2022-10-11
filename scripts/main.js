import { catDog } from "./catVdog.js";
import { fetchCatAPI, fetchDogAPI, fetchVotes, fetchUsers } from "./dataAccess.js";
import { LoginForm } from "./login.js";

const mainContainer = document.querySelector("#container")

const render = async () => {
    const user = parseInt(localStorage.getItem("cd_user"))
    const username = localStorage.getItem("Username")
    await fetchUsers();
    if (user) {
        await fetchCatAPI();
        await fetchDogAPI();
        await fetchVotes();
        mainContainer.innerHTML = catDog()
    } else {
        mainContainer.innerHTML = LoginForm()
    }
}

render()

mainContainer.addEventListener("stateChanged", (e) => {
    render()
})
