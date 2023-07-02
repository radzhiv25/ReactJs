import { useState } from 'react'
import { CreateNote } from '../components/CreateNote'
import { Note } from '../components/Note'

export const Home = () => {
  const [notes, setNotes] = useState([])

  function addNote(newNote){
    setNotes((prevNote) => {
      return[...prevNote, newNote]
    })
  }
  function deleteNote(id){
    setNotes((prevNote) => {
      return[...prevNote.filter((note, index) => index !== id)]
    })
  }
  return (
    <div className='p-10'>
        <CreateNote onAdd={addNote}/>
        <div className="grid grid-cols-1 md:grid-cols-4">
        {
          notes.map((note, index) => (
           <Note 
            key={index}
            id={index}
            title={note.title}
            noteContent={note.noteContent}
            onDelete={deleteNote}/>
          ))
        }
        </div>
    </div>
  )
}
