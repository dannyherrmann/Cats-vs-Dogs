import { getUsers } from "./dataAccess.js"

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("loginButton")) {
        let foundUser = null
        const userState = getUsers()
        const email = document.querySelector("input[name='email']").value
        const password = document.querySelector("input[name='password']").value

        for (const user of userState) {
            if (user.email === email && user.password === password) {
                foundUser = user
                console.log(foundUser.name, `just logged in!`)
            }
        }

        if (foundUser !== null) {
            localStorage.setItem("cd_user", foundUser.id)
            localStorage.setItem("Username", foundUser.name)
            document.querySelector("#container").dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
})

export const LoginForm = () => {
    return `
        <div class="loginForm">
            <form>
                <fieldset>
                    <label for="email">Email:</label>
                    <input type="text" name="email" placeholder="Email address" />
                </fieldset>
                <fieldset>
                    <label for="password">Password:</label>
                    <input type="password" name="password" placeholder="Password" />
                </fieldset>
            </form>
            <button id="loginButton">Login</button>
        </div>
    `
}