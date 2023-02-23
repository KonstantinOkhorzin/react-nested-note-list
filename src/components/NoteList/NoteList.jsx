import PropTypes from 'prop-types';

import Note from '../Note';

const NoteList = ({ notes, ...restProps }) => {
  return (
    <ul>
      {notes.map(note => (
        <Note key={note.id} {...note} {...restProps} />
      ))}
    </ul>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default NoteList;
