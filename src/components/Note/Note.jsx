import PropTypes from 'prop-types';

import NoteList from '../NoteList';
import FormAddingNewNote from '../FormAddingNewNote';

const Note = ({ id, parentId, text, sublist, sublistVisible, onAddNewNote, onRemoveNote }) => {
  return (
    <li>
      {sublistVisible ? <button>Remove sublist</button> : <button>Add sublist</button>}
      <input defaultValue={text} />
      <button onClick={() => onRemoveNote(id, parentId)}>Remove</button>
      <div>
        <NoteList notes={sublist} onAddNewNote={onAddNewNote} onRemoveNote={onRemoveNote} />
        <FormAddingNewNote onAddNewNote={onAddNewNote} parentId={id} />
      </div>
    </li>
  );
};

Note.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  sublist: PropTypes.array.isRequired,
  sublistVisible: PropTypes.bool.isRequired,
  onAddNewNote: PropTypes.func.isRequired,
  onRemoveNote: PropTypes.func.isRequired,
  parentId: PropTypes.number,
};

export default Note;
