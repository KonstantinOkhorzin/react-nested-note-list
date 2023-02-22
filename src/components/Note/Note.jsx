import React from 'react';

const Note = ({text}) => {
    return (
      <li>
        <button>Add sublist</button>
        <input defaultValue={text} />
      </li>
    );
};

export default Note;