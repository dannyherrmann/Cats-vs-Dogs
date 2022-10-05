// function for html to display on main that has images and buttons

import { getCats, getDogs, getCatVote, getDogVote } from "./dataAccess.js"

export const catDog = () => {
    return `
    <h1>CATS VS DOGS</h1>
    <h2>Choose wisely...</h2>
    <div class="flex">
    <div class="dog">
    <img src="${getDogs()[0].url}">
    <button class="button" id="dogButton">vote me</button> 
    </div>
    <div class="cat">
    <img src="${getCats()[0].url}">
    <button class="button" id="catButton">vote me</button> 
    </div>
    </div>
   
    `
}

const mainContainer = document.querySelector("#container")

// mainContainer.addEventListener("click", click => {
//     if (click.target.dispatchEvent.startsWith("dogButton")) {

//     }
// })

// mockDB, customEvent, addtalley



