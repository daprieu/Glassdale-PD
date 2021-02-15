export const NoteHTMLConverter = (noteObject, criminalObj) => {
    return `
        <section class="note">
            <div class="note__timestamp">Date: ${ new Date(noteObject.date).toLocaleDateString('en-US')  }</div>
            <div class="note__suspect">Suspect: ${ criminalObj.criminalId  }</div>
            <div class="note__text">Text:${ noteObject.text }</div>
            <div class="note__author">Author: ${ noteObject.author }</div>
        </section>
    `
}

