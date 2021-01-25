
import { getOfficers, useOfficers } from "/scripts/officers/OfficerProvider.js"
import { Officer } from "/scripts/officers/Officers.js"

const officersContainer = document.querySelector(".officersContainer")

export const OfficerList = () => {

  getOfficers()
    .then(() => {
      const officerArray = useOfficers()
      // debugger
      /*
            Now that you have the data, what
            component should be rendered?
        */

      let officersHTMLRepresentations = ""

      for (const officer of officerArray) {
        officersHTMLRepresentations += Officer(officer)
        // debugger
      }
      
      officersContainer.innerHTML = `
        <h3>Glassdale Officers</h3>
        <section class="officersList">
        ${officersHTMLRepresentations}
        </section>`
    })
}