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
      parentId,
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

  const removeNote = (id, parentId = null) => {
    if (parentId) {
      const updatedNotes = [...notes];
      const parentNote = findNoteById(parentId, updatedNotes);
      parentNote.sublist = parentNote.sublist.filter(note => note.id !== id);
      setNotes(updatedNotes);
    } else {
      setNotes(notes => notes.filter(note => note.id !== id));
    }
  };

  const addSublist = (id, parentId = null) => {
    if (parentId) {
      const updatedNotes = [...notes];
      const parentNote = findNoteById(parentId, updatedNotes);
      parentNote.sublist = parentNote.sublist.map(note =>
        note.id === id ? { ...note, sublistVisible: !note.sublistVisible } : note
      );
      setNotes(updatedNotes);
    } else {
      setNotes(notes =>
        notes.map(note =>
          note.id === id ? { ...note, sublistVisible: !note.sublistVisible } : note
        )
      );
    }
  };

  const removeSublist = (id, parentId = null) => {
    if (parentId) {
      const updatedNotes = [...notes];
      const parentNote = findNoteById(parentId, updatedNotes);
      parentNote.sublist = parentNote.sublist.map(note =>
        note.id === id ? { ...note, sublistVisible: !note.sublistVisible, sublist: [] } : note
      );
      setNotes(updatedNotes);
    } else {
      setNotes(notes =>
        notes.map(note =>
          note.id === id ? { ...note, sublistVisible: !note.sublistVisible, sublist: [] } : note
        )
      );
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
      <NoteList
        notes={notes}
        onAddNewNote={addNewNote}
        onRemoveNote={removeNote}
        onAddSublist={addSublist}
        onRemoveSublist={removeSublist}
      />
      <FormAddingNewNote onAddNewNote={addNewNote} />
    </div>
  );
}

export default App;
