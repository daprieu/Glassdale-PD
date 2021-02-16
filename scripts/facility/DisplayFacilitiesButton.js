const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".facility__button")

eventHub.addEventListener("click", clickEvent => {
    // debugger
    if (clickEvent.target.id === "showFacilities") {
        // debugger
        const customEvent = new CustomEvent("facilitiesButtonClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const DisplayFacilityButton = () => {
    contentTarget.innerHTML += "<button id='showFacilities'>Facilities</button>"
}