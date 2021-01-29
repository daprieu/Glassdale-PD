export const NoteHTMLConverter = (noteObject) => {
    return `
        <section class="note">
            <div class="note__timestamp">Date: ${ new Date(noteObject.date).toLocaleDateString('en-US')  }</div>
            <div class="note__suspect">Suspect: ${ noteObject.suspect }</div>
            <div class="note__text">Text:${ noteObject.text }</div>
            <div class="note__author">Author: ${ noteObject.author }</div>
        </section>
    `
}