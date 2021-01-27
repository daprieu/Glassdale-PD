
import { getCriminals, useCriminals } from "/scripts/criminals/CriminalDataProvider.js"
import { Criminal } from "/scripts/criminals/Criminal.js"
import { useConvictions } from "/scripts/convictions/ConvictionsDataProvider.js"

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
    debugger
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





//********************************OLD */
// export const CriminalList = () => {

//   getCriminals()
//     .then(() => {
//       const officerArray = useCriminals()
//       // debugger
//       /*
//             Now that you have the data, what
//             component should be rendered?
//         */

//       let CriminalsHTMLRepresentations = ""

//       for (const criminalObj of officerArray) {
//         CriminalsHTMLRepresentations += Criminal(criminalObj)
//         // debugger
//       }
      
//       CriminalsContainer.innerHTML = `
//         <h3>Glassdale Criminals</h3>
//         <section class="criminalsList">
//         ${CriminalsHTMLRepresentations}
//         </section>`
//     })
// }