const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
    <fieldset>
        <label for="journalDate">Entry Date:</label>
        <input type="text" id="note-date">
    </fieldset>
    <fieldset>
        <label for="entryCard__subject subject">Suspect Notes:</label>
        <input type="text" id="note-suspect">
    </fieldset>
    <fieldset>
        <label for="entryCard__text text">Notes:</label>
        <input type="text" id="note-text">
    </fieldset>  
        <button id="saveNote">Save Note</button>
    `
}


export const NoteForm = () => {
    render()
}