import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { CriminalList } from "./criminals/CriminalList.js";
// import { saveNote } from "./notes/NoteDataProvider.js";
import { NoteForm } from "./notes/NoteForm.js";
import { ShowNoteButton } from "./notes/ShowNotesButton.js";
// import { OfficerList } from "./officers/OfficerList.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";
import "./notes/NoteList.js"
import { getWitnesses } from "./witnesses/WitnessDataProvider.js";
import { ShowWitnessesButton } from "./witnesses/ShowWitnessButton.js";
import { WitnessesList } from "./witnesses/WitnessList.js";


// import { ShowAlibis } from "./alibis/AssociatesButton.js";


// OfficerList()
CriminalList()
ConvictionSelect()
OfficerSelect()
NoteForm()
// saveNote()
ShowNoteButton()

getWitnesses()
ShowWitnessesButton()
WitnessesList()