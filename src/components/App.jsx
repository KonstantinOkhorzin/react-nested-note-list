import { useState } from 'react';

import NoteList from './NoteList';
import FormAddingNewNote from './FormAddingNewNote';

function App() {
  const [notes, setNotes] = useState([]);

  const addNewNote = (text, parentId = null) => {
    const newNote = {
      id: Date.now(),
      text,
      sublist: [],
      sublistVisible: false,
    };
    if (parentId) {
      const updatedNotes = [...notes];
      const parentNote = findNoteById(parentId, updatedNotes);
      parentNote.sublist = [...parentNote.sublist, newNote];
      setNotes(updatedNotes);
    } else {
      setNotes(notes => [...notes, newNote]);
    }
  };

  const findNoteById = (id, notes) => {
    for (let note of notes) {
      if (note.id === id) {
        return note;
      }
      if (note.sublist.length > 0) {
        const foundNote = findNoteById(id, note.sublist);
        if (foundNote) {
          return foundNote;
        }
      }
    }
  };

  return (
    <div>
      <NoteList notes={notes} onAddNewNote={addNewNote} />
      <FormAddingNewNote onAddNewNote={addNewNote} />
    </div>
  );
}

export default App;
