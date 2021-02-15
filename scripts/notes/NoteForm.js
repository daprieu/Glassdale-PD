import { saveNote } from "./NoteDataProvider.js"
import { NoteList } from "./NoteList.js"
import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = (criminalArray) => {
    
    // const criminalArray = useCriminals
    // console.log('criminalArray: ', criminalArray);
// debugger
    contentTarget.innerHTML = `
    <fieldset>
    <fieldset>
        <label for="note-suspect">Suspect:</label>
        <select id="note-suspect" class="criminalSelect">
            <option value="0">Select a Suspect</option>
            ${criminalArray.map(criminal => `<option value="${ criminal.id }">${ criminal.name }</option>`).join("")}
        </select>
    </fieldset>
    <fieldset>
        <label for="journalDate">Entry Date:</label>
        <input type="date" id="note-date">
    </fieldset>
    <fieldset>
        <label for="entryCard__notes text">Notes:</label>
        <input type="text" id="note-text">
    </fieldset>  
    <fieldset>
        <label for="entryCard__author text">Author:</label>
        <input type="text" id="note-author">
    </fieldset>
   

        <button class="noteButtons" id="saveNote">Save Note</button>
        <button class="noteButtons noteListButton" id='showNotes'>Show Notes</button>
        
    </fieldset>
    `
}


// save note event listener
// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        const date = document.getElementById("note-date").value
        const criminalId = document.getElementById("note-suspect").value
        const text = document.getElementById("note-text").value
        const author = document.getElementById("note-author").value


        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            date: date,
            criminalId: parseInt(criminalId),
            text: text,
            author: author,
        }

        // Change API state and application state
        
        saveNote(newNote)
        
        NoteList()
    }
})


export const NoteForm = () => {
    getCriminals()
        .then(() => {
            const arrayOfCriminals = useCriminals()
            render(arrayOfCriminals)
        })
}
