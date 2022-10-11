// function for html to display on main that has images and buttons

import { getCats, getDogs, getCatVote, getDogVote, addVote, addObj, getCatObj, getDogObj } from "./dataAccess.js"
import { feed } from "./feed.js"

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
                <div id ="feed" class="results">
                ${feed(getCatObj(), getDogObj())}
                    
                </div>
            </section>
        </div>
        <div class="sidebar"></div>
    </div>
    `
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {


    if (click.target.id === "dogButton") {
        let dog = getDogVote() + 1
        const newDogVoteValue = { dogVote: dog, }
        const dogObj = {
            url: getDogs()[0].url,
            champion: true
        }
        const catObj = {
            url: getCats()[0].url,
            champion: false
        }
        addObj(dogObj, "dog")
        addObj(catObj, "cat")
        addVote(newDogVoteValue)
    }
    else if (click.target.id === "catButton") {
        let cat = getCatVote() + 1
        const newCatVoteValue = { catVote: cat }
        const dogObj = {
            url: getDogs()[0].url,
            champion: false
        }
        const catObj = {
            url: getCats()[0].url,
            champion: true
        }
        addObj(dogObj, "dog")
        addObj(catObj, "cat")
        addVote(newCatVoteValue)
    } else {
        return false
    }
    document.dispatchEvent(new CustomEvent("stateChanged"))
})