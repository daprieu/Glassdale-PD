
import { getCriminals, useCriminals } from "/scripts/criminals/CriminalDataProvider.js"
import { Criminal } from "/scripts/criminals/Criminal.js"

const CriminalsContainer = document.querySelector(".criminalsContainer")

export const CriminalList = () => {

  getCriminals()
    .then(() => {
      const officerArray = useCriminals()
      // debugger
      /*
            Now that you have the data, what
            component should be rendered?
        */

      let CriminalsHTMLRepresentations = ""

      for (const criminalObj of officerArray) {
        CriminalsHTMLRepresentations += Criminal(criminalObj)
        // debugger
      }
      
      CriminalsContainer.innerHTML = `
        <h3>Glassdale Criminals</h3>
        <section class="criminalsList">
        ${CriminalsHTMLRepresentations}
        </section>`
    })
}