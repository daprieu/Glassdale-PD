
import { getCriminals, useCriminals } from "/scripts/criminals/CriminalDataProvider.js"
import { Criminal } from "/scripts/criminals/Criminal.js"
import { useConvictions } from "/scripts/convictions/ConvictionsDataProvider.js"
import { useOfficers } from "/scripts/officers/OfficerProvider.js"

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")


// Render ALL criminals initally
export const CriminalList = () => {
  getCriminals()
      .then(() => {
          const appStateCriminals = useCriminals()
          render(appStateCriminals)
      })
}

const render = criminalCollection => {
  let criminalsHTMLRepresentations = ""

  for (const criminal of criminalCollection) {
    criminalsHTMLRepresentations += Criminal(criminal)
  }

  contentTarget.innerHTML = `
        <h3>Criminals</h3>
        <section class="criminalsList">
        ${criminalsHTMLRepresentations}
        </section>`
        
}

// 'what custom event did you dispatch in ConvictionSelect?'
eventHub.addEventListener("crimeChosen", event => {
  // Use the property you added to the event detail.
  if (event.detail.crimeThatWasChosen !== "0"){
    const appStateConvicitons = useConvictions()
    
    // Use the find method to get the first object in the convictions array that has the same id as the id of the chosen crime
    
    const convictionThatWasChosen = appStateConvicitons.find(convictionObj => {
      return convictionObj.id === parseInt(event.detail.crimeThatWasChosen)
    })
    
      /*
          Filter the criminals application state down to the people that committed the crime
      */
    const appStateCriminals = useCriminals()
      const matchingCriminals = appStateCriminals.filter(criminalObj => {
        return criminalObj.conviction === convictionThatWasChosen.name
      })
        
      /*
          Then invoke render() and pass the filtered collection as
          an argument
      */
    render(matchingCriminals)
    console.log(matchingCriminals)
  }
})

eventHub.addEventListener("officerSelected", event => {
  if (event.detail.officer !== "0"){
    
    const officerArray = useOfficers()
    const officerName = event.detail.officer
//event.detail.officer = (changeEvent.target.value which is set equal to officer selected) = officer id set in the 
//value of html <option> element when mapping officers.

// How can you access the officer name that was selected by the user?
// Use the find method to get the first object in the convictions array that has the same id as the id of the chosen crime
// officer is represented via the value.id in officerSelect
// need to .find() to get officer of that id then convert id to string name....?
    const officerChosen = officerArray.find(officerObj => {
      // console.log("id", officerObj.id)
      // console.log("name", officerName)
      return officerObj.id === parseInt(officerName)
    })
    // How can you get the criminals that were arrested by that officer?
    //
    const criminalsArray = useCriminals()
    const matchingCriminals = criminalsArray.filter(criminalObj => {
      return criminalObj.arrestingOfficer === officerChosen.name
    })
    // console.log(matchingCriminals)
    render(matchingCriminals)
    }
})

