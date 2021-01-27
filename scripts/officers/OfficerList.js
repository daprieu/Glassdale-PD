
import { getOfficers, useOfficers } from "/scripts/officers/OfficerProvider.js"
import { Officer } from "/scripts/officers/Officers.js"

const eventHub = document.querySelector(".container")
const officersContainer = document.querySelector(".officersContainer")

export const OfficerList = () => {
  getOfficers()
    .then(() => {
      const officerArray = useOfficers()
      render(officerArray)
      
    })
}
      /*
            Now that you have the data, what
            component should be rendered?
        */
  // will make render function to keep code dry
const render = officerCollection => {

      let officersHTMLRepresentations = ""

      for (const officer of officerCollection) {
        officersHTMLRepresentations += Officer(officer)
        // debugger
      }
      
      officersContainer.innerHTML = `
        <h3>Glassdale Officers</h3>
        <section class="officersList">
        ${officersHTMLRepresentations}
        </section>`
    }


