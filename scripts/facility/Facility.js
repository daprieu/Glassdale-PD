import "../facility/CriminalFacilityProvider.js"

export const FacilityHTML = (facilities, criminals) => {
    return `
        <div class="facilities">
            <p class="facilityName">${facilities.facilityName}</p>
            <p class="text security">Security: ${facilities.securityLevel}</p>
            <p class="text capacity">Capacity: ${facilities.capacity}</p>
            <p class="facilityCriminals">Criminals:
            <div>
                
                <ul>
                ${criminals.map(c => `<li>${c.name}</li>`).join("")}
                </ul>
                </div>
                
                </div>
                `
            } 