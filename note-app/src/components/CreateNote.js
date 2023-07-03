import { useState } from "react";

export const CreateNote = (props) => {
  const onAdd = props.onAdd
  const [note,setNote] = useState({
    title :"",
    noteContent: "",
  })

  const inputNote = (note) => {
    const {name, value} = note.target
    setNote((prevNote) => {
        return {
          ...prevNote,
          [name] : value,
        }
    })
  }
  function createNote(event){
    onAdd(note)
    event.preventDefault()
    setNote({
      title: "",
      noteContent: ""
    })
  }
  return (
    <div className="">
      <form
        className="p-3 flex flex-col border md:w-1/2  mx-auto rounded-md text-gray-600 shadow-lg"
      >
          <input
            type="text"
            value={note.title}
            placeholder="Enter Title"
            name="title"
            className="outline-none border p-2 md:w-3/4 w-full mx-auto rounded-md text-center"
            onChange={inputNote}
          />
        <textarea
          name="noteContent"
          value={note.noteContent}
          placeholder="Enter Note"
          className="mt-2 p-2 outline-none border md:w-3/4 w-full mx-auto resize-none rounded-md text-center"
          onChange={inputNote}
        >

        </textarea>
        <button className="mt-2 mx-auto p-2 border w-max rounded-md bg-pink-600 text-white font-semibold" onClick={createNote}>
          Add Note
        </button>
      </form>
    </div>
  );
};
