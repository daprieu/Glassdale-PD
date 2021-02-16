const contentTarget = document.querySelector(".filters__witnesses")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id === "showWitnessesButton") {
    // debugger
        const customEvent = new CustomEvent("showWitnessesClicked")
        eventHub.dispatchEvent(customEvent)
        
    }
})

eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id === "closeWitnessesButton") {
    // debugger
        const customEvent = new CustomEvent("closeWitnessesClicked")
        eventHub.dispatchEvent(customEvent)
        
    }
})

export const ShowWitnessesButton = () => {
    contentTarget.innerHTML += `
    <button id='closeWitnessesButton'>All Criminals</button>
    <button id='showWitnessesButton'>All Witnesses</button>
    `
}

