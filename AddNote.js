import React from "react";
import { useState } from "react";
const AddNote = ({ handleAddNote }) => {
  const [NoteText, setNoteText] =useState('');
  const characterLimit = 200;
  const handlechange = (e) => {
    //    console.log(e.target.value);
    if(characterLimit - e.target.value.length >=0)
    {
      setNoteText(e.target.value);
    }
  };

  const handleSaveClick = () => {
    if(NoteText.trim().length>0)
    {
        handleAddNote(NoteText);
        setNoteText('')
    }
  };

  return (
    <div className="note new">
      <textarea
        onChange={handlechange}
        value={NoteText}
        className="textarea"
        rows="8"
        cols="10"
        placeholder="Type to add note..."
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - NoteText.length} Remaining</small>
        <button onClick={handleSaveClick} className="save">
          save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
