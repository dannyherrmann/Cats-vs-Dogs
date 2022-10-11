import { catDog } from "./catVdog.js";
import { fetchCatAPI, fetchDogAPI, fetchVotes, fetchObj, fetchUsers } from "./dataAccess.js";
import { LoginForm } from "./login.js";

const mainContainer = document.querySelector("#container")

const render = async () => {
    const user = parseInt(sessionStorage.getItem("cd_user"))
    const username = sessionStorage.getItem("Username")
    console.log(`username:`,username)
    await fetchUsers();
    if (user) {
        await fetchCatAPI();
        await fetchDogAPI();
        await fetchVotes();
        await fetchObj();
        mainContainer.innerHTML = catDog()
    } else {
        mainContainer.innerHTML = LoginForm()
    }
}

render()

mainContainer.addEventListener("stateChanged", (e) => {
    render()
})
