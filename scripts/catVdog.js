// function for html to display on main that has images and buttons

import { getCats } from "./dataAccess.js"

export const catDog = () => {
    return `
    <h1>CATS VS DOGS</h1>
    <h2>Choose wisely...</h2>
    <div class="flex">
    <img src="${getCats()[0].url}">
    <img>
    </div>
    `
}

