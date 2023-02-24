import PropTypes from 'prop-types';

import Note from '../Note';

const NoteList = ({ notes, ...restProps }) => {
  return (
    <ul>
      {notes.map((note, index) => (
        <Note
          key={note.id}
          {...note}
          {...restProps}
          isFirstNote={index === 0}
          isLastNote={index === notes.length - 1}
        />
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
