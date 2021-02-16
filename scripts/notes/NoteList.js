import { deleteNote, getNotes, useNotes } from "./NoteDataProvider.js";
// import { NoteHTMLConverter } from "./Note.js"; 
import { useCriminals, getCriminals } from '../criminals/CriminalDataProvider.js'

const contentTarget = document.querySelector(".noteList")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent => {
    // debugger
    NoteList()
})

const render = (noteCollection, criminalCollection) => {
    // debugger
    contentTarget.innerHTML = noteCollection.map(note => {
        // Find the related criminal
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)
        
            // return NoteHTMLConverter(note, relatedCriminal)
        return `
            <section class="note">
                <h2>Note about: ${relatedCriminal.name}</h2>
                <p>Date: ${new Date(note.date).toDateString('en-US')}</P>
                <p>Text: ${note.text}</p>
                <p>Author: ${note.author}</p>
            </section>
            <button class="dNoteButton" id="deleteNote--${note.id}">Delete</button>
        `
    }).join("")
    
}

export const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            const notes = useNotes()
            const criminals = useCriminals()

            render(notes, criminals)
            
        })
}
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        /*
            Invoke the function that performs the delete operation.
            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
    deleteNote(id).then(
        () => {
            const updatedNotes = useNotes()
            const criminals = useCriminals()
            render(updatedNotes, criminals)
        }
    )}
})



