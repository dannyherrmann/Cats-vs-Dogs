// function for html to display on main that has images and buttons

import { getCats, getDogs, getCatVote, getDogVote, addVote, addObj, getCatObj, getDogObj } from "./dataAccess.js"
import { feed } from "./feed.js"

export const catDog = () => {
    return `
   
    <div class="sidebar">
    <div class="dogVote">
    <p><u><b> Dog Votes</b></u></p>
    <i>${getDogVote()}</i>
   </div>
   <div class="catVote">
   <p><u><b> Cat Votes</b></u></p>
   <i>${getCatVote()}</i>
   </div>
    </div>
    <div class="container">
        <div class="main-column">
            <h1>CATS VS DOGS</h1>
            <img src="https://media.tenor.com/6ipQfTN9jYwAAAAC/cat-dog-cartoon.gif" alt="" id="catDogGif"> 
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
    `
}

const allTheFunctions = async (dogObj, catObj, newVoteValue) => {
    await addObj(dogObj, "dog")
    await addObj(catObj, "cat")
    await addVote(newVoteValue)
    document.querySelector("#container").dispatchEvent(new CustomEvent("stateChanged"))
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {


    console.log(click.target.id)
    if (click.target.id === "dogButton" || click.target.id === "catButton") {
        let date = new Date
        let dog = getDogVote()
        let cat = getCatVote()
        const voteValue = click.target.id === "dogButton" ? { dogVote: dog + 1 } : { catVote: cat + 1 }
        const dogObj = {
            url: getDogs()[0].url,
            votee: sessionStorage.getItem("Username"),
            date: date.toLocaleDateString("en-US"),
            champion: click.target.id === "dogButton" ? true : false
        }
        const catObj = {
            url: getCats()[0].url,
            votee: sessionStorage.getItem("Username"),
            date: date.toLocaleDateString("en-US"),
            champion: click.target.id === "catButton" ? true : false
        }

        allTheFunctions(dogObj, catObj, voteValue)

    }
})