import { useState } from 'react'
import { CreateNote } from '../components/CreateNote'

export const Home = () => {
    const [note, setNote] = useState(
        {
            title: '',
            noteContent: ''
        }
    )
    const [notes, setNotes] = useState([])
    function addNote(newNote){
        setNotes((prevNote) => {
            return [...prevNote, newNote]
        })
    }
    function createNote(e){
        const {name, value} = e.target
        setNote(preNote =>{
            return {
                ...preNote,
                [name]: value,
            }
        })
    }
    function submit(i){
        i.preventDefault()
        console.log(i)
    }
  return (
    <div className='p-10'>
        <form action="" className='p-3 flex flex-col border md:w-1/2 mx-auto rounded-md text-gray-600 shadow-lg'>
            <input type="text"
            value={note.title}
             placeholder='Enter Title' name='title' className='outline-none border p-2 md:w-3/4 w-full mx-auto rounded-md' onChange={createNote}/>
            <textarea name="note-content" 
            value={note.noteContent}
            placeholder='Enter note' className='mt-2 p-2 outline-none border md:w-3/4 w-full mx-auto resize-none rounded-md' onChange={createNote}>

            </textarea>
            <button className='mt-2 mx-auto p-2 border w-max rounded-md' onClick={submit}>
                Add Note
            </button>
        </form>
        <CreateNote onAdd={addNote} />
        {
            notes.
        }
    </div>
  )
}
