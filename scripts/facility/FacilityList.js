import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js"
import { useCriminalFacilities } from "./CriminalFacilityProvider.js"
import { FacilityHTML } from "./Facility.js"
import { getFacilities, useFacilities } from "./FacilityProvider.js"

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")


const render = (facilitiesToRender, allCriminals, allRelationships)=> {
    // debugger
    contentTarget.innerHTML = facilitiesToRender.map(
        (facility) => {
            // Step 2 - Filter all relationships to get only ones for this facility
            const facilityCriminalRelationship = allRelationships.filter(cf => cf.facilityId === facility.id)
            console.log('facilityCriminalRelationship: ', facilityCriminalRelationship);

            // Step 3 - Convert the relationships to criminals with map()
            const criminals = facilityCriminalRelationship.map(cf => {
                
                const matchingCriminalObject = allCriminals.find(criminal => criminal.id === cf.criminalId)
                console.log('matchingCriminalObject: ', matchingCriminalObject);
                return matchingCriminalObject
            })

            // Must pass the matching facilities to the Criminal component
            return FacilityHTML(facility, criminals)
        }
    ).join("")
}

export const FacilityList = () => {
        getCriminals()
            .then(() => {
            
                // Pull in the data now that it has been fetched
            const facilities = useFacilities()
            const crimFac = useCriminalFacilities()
            const criminals = useCriminals()

              // Pass all three collections of data to render()
            render( facilities, criminals, crimFac)
            })
    }

eventHub.addEventListener("facilitiesButtonClicked", customEvent => {
    FacilityList()
})