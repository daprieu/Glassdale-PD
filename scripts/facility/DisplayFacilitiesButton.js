const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    // debugger
    if (clickEvent.target.id === "displayFacilities") {
        // debugger
        const customEvent = new CustomEvent("showFacilitesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const DisplayFacilityButton = () => {

}