import PropTypes from 'prop-types';

import NoteList from '../NoteList';
import FormAddingNewNote from '../FormAddingNewNote';

const Note = ({ id, text, sublist, sublistVisible, onAddNewNote }) => {
  return (
    <li>
      {sublistVisible ? <button>Remove sublist</button> : <button>Add sublist</button>}
      <input defaultValue={text} />
      <div>
        <NoteList notes={sublist} onAddNewNote={onAddNewNote} />
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
};

export default Note;
