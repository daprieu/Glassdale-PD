import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
    <fieldset>
    <fieldset>
        <label for="journalDate">Entry Date:</label>
        <input type="date" id="note-date">
    </fieldset>
    <fieldset>
        <label for="entryCard__suspect subject">Suspect:</label>
        <input type="text" id="note-suspect">
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
        const suspect = document.getElementById("note-suspect").value
        const text = document.getElementById("note-text").value
        const author = document.getElementById("note-author").value


        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            date: date,
            suspect: suspect,
            text: text,
            author: author,
        }

        // Change API state and application state
        
        saveNote(newNote)
    }
})
eventHub.addEventListener("click", saveEvent => {
    
})

export const NoteForm = () => {
    render()
}
