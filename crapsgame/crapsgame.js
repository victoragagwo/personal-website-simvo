// HTML element IDs
const crapsUsernameInput = "craps-username-input"
const crapsRegistrationPane = "craps-resgistration-pane"
const crapsMainSection = "craps-main-section"


function registerCrapsPlayer() {
    let crapsUsername = document.getElementById(crapsUsernameInput).value
    alert("Welcome to the game, " + crapsUsername + "!")
    removeRegistrationPanel()
    showMainGameSection()
}

function removeRegistrationPanel() {
    document.getElementById(crapsRegistrationPane).style.display = "none"
}

function showMainGameSection() {
     document.getElementById(crapsMainSection).style.display = "block"
}