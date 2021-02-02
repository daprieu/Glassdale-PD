import { getWitnesses, useWitnesses } from "./WitnessDataProvider.js"
import { Witnesses } from "./Witnesses.js"

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")


const render = WitnessesCollection => {
    let WitnessesHTMLRep = ""

    for (const witnessesObj of WitnessesCollection) {
        WitnessesHTMLRep += Witnesses(witnessesObj)
    }
    contentTarget.innerHTML = `
        <h2>Witness Statements</h2>
        <section class="witnessesList>
        ${WitnessesHTMLRep}
        </section>
        `
}

eventHub.addEventListener("showWitnessesClicked", customEvent => {
    WitnessesList()
})

export const WitnessesList = () => {
    getWitnesses()
        .then(() => {
            const allWitnesses = useWitnesses()
            // console.log(allWitnesses)
            render(allWitnesses)
        })
}