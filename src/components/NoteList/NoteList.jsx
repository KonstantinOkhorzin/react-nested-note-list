import Note from '../Note';

const NoteList = ({ notes }) => {
  return (
    <ul>
      {notes.map(({ id, ...restProps }) => (
        <Note key={id} {...restProps} />
      ))}
    </ul>
  );
};

export default NoteList;
