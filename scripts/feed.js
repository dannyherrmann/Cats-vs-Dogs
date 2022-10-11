import { getCatObj, getDogObj } from "./dataAccess.js";


export const feed = (array1, array2) => {
    let html = `
    <div class="mainFeed">
    <button id="sortByDate">Sort</button>
    `

    for (const cat of array1) {
        html += `
            <div class="contestants">
                <div class="feedHeader">
                    <div class="winner">
                    <h3>ROUND ${cat.id}</h3>
                    <h4><span>WINNER:</span> ${winner(cat)}</h4>
                    </div>
                    <div class="feedContainer ${champion(cat)} catFeed">
                    <a href="${cat.url}" target="_blank"><img src="${cat.url}" alt=""></a>${championImg(cat)}
                    </div>`

        for (const dog of array2) {
            if (cat.id === dog.id) {
                html += `
                    <div class="feedContainer ${champion(dog)} dogFeed">
                    <a href="${dog.url}" target="_blank"><img src="${dog.url}" alt=""></a>${championImg(dog)}
                    </div>
                </div>`
            }
        }
    }
    return html += `
        </div>
    </div>`
}

const champion = (obj) => {
    if (obj.champion === true) {
        return `champion`
    } else {
        return `runnerUp`
    }
}

const championImg = (obj) => {
    if (obj.champion === true) {
        return `<img src="../images/trophy.png" id="trophy" alt="">`
    } else {
        return ``
    }
}


const winner = (obj) => {
    if (obj.champion === true) {
        return `CATS`
    } else {
        return `DOGS`
    }
}

document.addEventListener("click", event => {
    if (event.target === document.querySelector(".sortAgain")) {
        document.getElementById("feed").innerHTML = ""
        document.getElementById("feed").innerHTML = feed(getCatObj(), getDogObj())
    } else if (event.target.id === "sortByDate") {
        document.getElementById("feed").innerHTML = ""
        document.getElementById("feed").innerHTML = feed(getCatObj().reverse(), getDogObj().reverse())
        document.getElementById("sortByDate").classList.add("sortAgain")
    }
})
