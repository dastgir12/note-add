import React from 'react'
import Notes from './Notes'
import AddNote from './AddNote'
const NoteList = ({notes , handleAddNote , handDeleteNote} )=> {
  return (
    <div className='note-list'>
      {notes.map((note)=> <Notes id={note.id} text={note.text}  date={note.date} handDeleteNote={handDeleteNote}/>)}
      <AddNote handleAddNote={handleAddNote}  />
    </div>
  )
}

export default NoteList
