import { useState } from 'react';
import PropTypes from 'prop-types';

const FormAddingNewNote = ({ onAddNewNote, parentId }) => {
  const [text, setText] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();

    onAddNewNote(text, parentId);
    setText('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button>Add</button>
    </form>
  );
};

FormAddingNewNote.propTypes = {
  onAddNewNote: PropTypes.func.isRequired,
  parentId: PropTypes.number,
};

export default FormAddingNewNote;
