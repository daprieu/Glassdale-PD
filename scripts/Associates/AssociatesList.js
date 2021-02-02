
import { useCriminals } from "../criminals/CriminalDataProvider.js";
const contentContainer = document.querySelector(".associatesContainer")

export const AssociatesList = (criminal) => {
    const HTMLRep =`
    <div id="alibi__Modal" class="modal--parent">
    <div class="modal--content">
    <h2>Known associates for ${criminal.name}</h2>
    ${criminal.known_associates.map(associate => {
        return `<section class="associate__container">
        <div class="associate__name">${associate.name}</div>
        <div class="associate__alibi">Alibi: ${associate.alibi}</div>
        </section>`
    }).join("")}
    <button id="modal--close">Close</button>
    </div>
    </div>
    `
    contentContainer.innerHTML = HTMLRep
    
}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("AssociatesClicked", event => {
    // debugger
    const selectedCriminalId = event.detail.criminalId
    const criminalsArray = useCriminals()
    const selectedCriminal = criminalsArray.find((criminal) => criminal.id === selectedCriminalId)
    AssociatesList(selectedCriminal)
})

eventHub.addEventListener("click", event => {
    if (event.target.id === "modal--close") {
        closeModal()
    }
})

const closeModal = () => {
    const contentContainer = document.querySelector(".associatesContainer")
    contentContainer.innerHTML = ""
}