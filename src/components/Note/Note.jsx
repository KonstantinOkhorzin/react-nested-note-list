import PropTypes from 'prop-types';

import NoteList from '../NoteList';
import FormAddingNewNote from '../FormAddingNewNote';

const Note = ({
  id,
  parentId,
  text,
  sublist,
  sublistVisible,
  onAddNewNote,
  onRemoveNote,
  onAddSublist,
  onRemoveSublist,
}) => {
  return (
    <li>
      {sublist.length > 0 ? (
        <button onClick={() => onRemoveSublist(id, parentId)}>Remove sublist</button>
      ) : (
        <button onClick={() => onAddSublist(id, parentId)}>Add sublist</button>
      )}
      <input defaultValue={text} />
      <button onClick={() => onRemoveNote(id, parentId)}>Remove</button>
      {sublistVisible && (
        <div>
          <NoteList
            notes={sublist}
            onAddNewNote={onAddNewNote}
            onRemoveNote={onRemoveNote}
            onAddSublist={onAddSublist}
            onRemoveSublist={onRemoveSublist}
          />
          <FormAddingNewNote onAddNewNote={onAddNewNote} parentId={id} />
        </div>
      )}
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
  onAddSublist: PropTypes.func.isRequired,
  onRemoveSublist: PropTypes.func.isRequired,
};

export default Note;
