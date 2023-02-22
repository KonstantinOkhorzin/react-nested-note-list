import { useState } from 'react';

import NoteList from './NoteList';
import FormAddingNewNote from './FormAddingNewNote';

function App() {
  const [notes, setNotes] = useState([
    { id: 1, text: 1 },
    { id: 2, text: 2 },
    { id: 3, text: 3 },
  ]);

  return (
    <div>
      <NoteList notes={notes} />
      <FormAddingNewNote />
    </div>
  );
}

export default App;
