import { getOfficers, useOfficers } from "/scripts/officers/OfficerProvider.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__officer")
// When an officer is selected by the user the OfficerSelect component can dispatch a officerSelected custom event.
eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value
  
        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })
  
        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
  })

  const render = officerCollection => {
      contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${
                officerCollection.map(officer => `<option value="${officer.id}">${officer.name}</option>`).join("")
            }
        </select>
        `
        // console.log(officerCollection)
  }
  export const OfficerSelect = () => {
    // Trigger fetching the API data and loading it into application state
    getOfficers()
    .then( () => {
      // Get all convictions from application state
      const officers = useOfficers()
      render(officers)
    })
}