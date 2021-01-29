const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

let notes = []

export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}

export const saveNote = note => {
    let stringifyObj = JSON.stringify(note)
    debugger
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: stringifyObj
    })
    .then(getNotes) // fetch the notes collection containing the newly added note
    .then(dispatchStateChangeEvent) // tell any component listening that the notes state has been updated
}

export const useNotes = () => notes.slice()

