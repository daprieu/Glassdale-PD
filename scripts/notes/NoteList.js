import { getNotes, useNotes } from "./NoteDataProvider.js";
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




// // Query the DOM for the element that your notes will be added to 
// const contentTarget = document.querySelector(".noteList")
// // Define ye olde Evente Hubbe
// const eventHub = document.querySelector(".container")

// eventHub.addEventListener("showNotesClicked", customEvent => {
//     // debugger
//     NoteList()
// })

// const render = (noteArray) => {
//     const allNotesConvertedToStrings = noteArray.map( noteObject => NoteHTMLConverter(noteObject)).join("")
//         // debugger
    
//         // convert the notes objects to HTML with NoteHTMLConverter

    

//     contentTarget.innerHTML = `
//     <h3>Case Notes</h3>
//     <section class="notesList">
//     ${allNotesConvertedToStrings}
//     </section>`
// }


// // Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
// export const NoteList = () => {
//     getNotes()
//         .then(() => {
//             const allNotes = useNotes()
//             render(allNotes)
//         })
// }