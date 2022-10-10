// function for html to display on main that has images and buttons

import { getCats, getDogs, getCatVote, getDogVote, addVote } from "./dataAccess.js"

export const catDog = () => {
    return `
    <div class="container">
        <div class="main-column">
            <h1>CATS VS DOGS</h1>
            <img src="https://media.tenor.com/6ipQfTN9jYwAAAAC/cat-dog-cartoon.gif" alt="">
            <h2>Choose wisely...</h2>
            
            <section class="animals">
                <div class="animals--vote">
                    <img src="${getDogs()[0].url}">
                    <button id="dogButton">vote me</button> 
                </div>
            
                <div class="animals--vote">
                    <img src="${getCats()[0].url}">
                    <button id="catButton">vote me</button> 
                </div>
            </section>

            <section class="feed">
                <h2>Winners</h2>
                <div class="results">
                    <img src="https://cdn2.thedogapi.com/images/Sk67KO2rX_1280.jpg" />
                    <img src="https://cdn2.thedogapi.com/images/Sk67KO2rX_1280.jpg" />
                    <img src="https://cdn2.thedogapi.com/images/Sk67KO2rX_1280.jpg" />
                    <img src="https://cdn2.thedogapi.com/images/Sk67KO2rX_1280.jpg" />
                    <img src="https://cdn2.thedogapi.com/images/Sk67KO2rX_1280.jpg" />
                    <img src="https://cdn2.thedogapi.com/images/Sk67KO2rX_1280.jpg" />
                </div>
            </section>
        </div>
        <div class="sidebar"></div>
    </div>
    `
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    console.log(click.target.id)
    if (click.target.id === "dogButton") {
        let dog = getDogVote() + 1
        const newDogVoteValue = { dogVote: dog }
        addVote(newDogVoteValue)
    }
    else if (click.target.id === "catButton") {
        let cat = getCatVote() + 1
        const newCatVoteValue = { catVote: cat }
        addVote(newCatVoteValue)
    } else {
        return false
    }
    document.querySelector("#container").dispatchEvent(new CustomEvent("stateChanged"))
})