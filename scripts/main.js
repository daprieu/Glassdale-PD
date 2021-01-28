import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { saveNote } from "./notes/NoteDataProvider.js";
import { NoteForm } from "./notes/NoteForm.js";
import { OfficerList } from "./officers/OfficerList.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";


OfficerList()
CriminalList()
ConvictionSelect()
OfficerSelect()
NoteForm()
saveNote()