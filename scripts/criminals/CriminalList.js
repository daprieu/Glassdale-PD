
import { getCriminals, useCriminals } from "/scripts/criminals/CriminalDataProvider.js"
import { Criminal } from "/scripts/criminals/Criminal.js"
import { useConvictions } from "/scripts/convictions/ConvictionsDataProvider.js"
import { useOfficers } from "/scripts/officers/OfficerProvider.js"
import { getFacilities, useFacilities } from "../facility/FacilityProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "../facility/CriminalFacilityProvider.js"

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")


export const CriminalList = () => {
  // Kick off the fetching of both collections of data
  getFacilities()
      .then(getCriminalFacilities)
      .then(
          () => {
              // Pull in the data now that it has been fetched
              const facilities = useFacilities()
              const crimFac = useCriminalFacilities()
              const criminals = useCriminals()

              // Pass all three collections of data to render()
              render(criminals, facilities, crimFac)
          }
      )
}

const render = (criminalsToRender, allFacilities, allRelationships) => {
  // Step 1 - Iterate all criminals
  contentTarget.innerHTML = criminalsToRender.map(
      (criminal) => {
          // Step 2 - Filter all relationships to get only ones for this criminal
          const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminal.id)

          // Step 3 - Convert the relationships to facilities with map()
          const facilities = facilityRelationshipsForThisCriminal.map(cf => {
              const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
              return matchingFacilityObject
          })

          // Must pass the matching facilities to the Criminal component
          return Criminal(criminal, facilities)
      }
  ).join("")
}

// 'what custom event did you dispatch in ConvictionSelect?'
eventHub.addEventListener("crimeChosen", event => {
  // Use the property you added to the event detail.
  if (event.detail.crimeThatWasChosen !== "0"){
    const facilities = useFacilities()
    const crimFac = useCriminalFacilities()
    const appStateConvicitons = useConvictions()

    const convictionThatWasChosen = appStateConvicitons.find(convictionObj => {
      return convictionObj.id === parseInt(event.detail.crimeThatWasChosen)
    })
    const appStateCriminals = useCriminals()
      const matchingCriminals = appStateCriminals.filter(criminalObj => {
        return criminalObj.conviction === convictionThatWasChosen.name
      })
    render(matchingCriminals, facilities, crimFac)
    
  }
})

eventHub.addEventListener("officerSelected", event => {
  if (event.detail.officer !== "0"){
    const facilities = useFacilities()
    const crimFac = useCriminalFacilities()
    const officerArray = useOfficers()
    const officerName = event.detail.officer

    const officerChosen = officerArray.find(officerObj => {
  
      return officerObj.id === parseInt(officerName)
    })
    
    const criminalsArray = useCriminals()
    const matchingCriminals = criminalsArray.filter(criminalObj => {
      return criminalObj.arrestingOfficer === officerChosen.name
    })
    
    render(matchingCriminals, facilities, crimFac)
    
    
    }
})
eventHub.addEventListener("facilitiesButtonClicked", event => {
  contentTarget.innerHTML =""
})
eventHub.addEventListener("showWitnessesClicked", event => {
  contentTarget.innerHTML =""
})