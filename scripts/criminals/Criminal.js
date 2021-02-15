import "../Associates/AssociatesButton.js"
import { ShowAssociatesButton } from "../Associates/AssociatesButton.js"
import "../facility/CriminalFacilityProvider.js"


export const Criminal = (criminal, facilities) => {
    return `
        <div class="Criminal">
            <p class="name">${criminal.name}</p>
            <p class="age">Age: ${criminal.age}</p>
            <p class="crime">Crime: ${criminal.conviction}</p>
            <p>Incarcerated between:
                ${new Date(criminal.incarceration.start).toLocaleDateString()} and
                ${new Date(criminal.incarceration.end).toLocaleDateString()}
            </p>
            <p>Age: ${criminal.age}</p>
            <div>
                <h2>Facilities</h2>
                <ul>
                    ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
                </ul>
            </div>
            ${ShowAssociatesButton(criminal)}
        </div>
    `
  } 
  // <p>${criminal.id}</p>