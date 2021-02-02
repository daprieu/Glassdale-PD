const contentTarget = document.querySelector(".filters__witnesses")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id === "showWitnessesButton") {
    // debugger
        const customEvent = new CustomEvent("showWitnessesClicked")
        eventHub.dispatchEvent(customEvent)
        
    }
})

export const ShowWitnessesButton = () => {
    contentTarget.innerHTML += `
    <button id='showWitnessesButton'>Show Witnesses</button>
    <button id='closeWitnessesButton'>Close Witnesses</button>
    `
}

