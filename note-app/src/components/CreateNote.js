import React from 'react'

export const CreateNote = (title, noteContent) => {
  return (
    <div className='mt-10 border hover:shadow-md md:w-60 w-auto p-3 rounded-md hover:scale-105'>
        <h1 className='text-xl font-semibold border-b'>
            {title}
        </h1>
        <p className='font-medum'>
            {noteContent}
        </p>
    </div>
  )
}
