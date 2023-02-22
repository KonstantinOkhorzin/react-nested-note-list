import {useState} from 'react';

const FormAddingNewNote = () => {
    const [text, setText] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        setText('');
    }

    return (
      <form onSubmit={onFormSubmit}>
        <input value={text} onChange={e => setText(e.target.value)} />
        <button>Add</button>
      </form>
    );
};

export default FormAddingNewNote;