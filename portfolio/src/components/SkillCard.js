import React from 'react'

export const SkillCard = (props) => {
  return (
    <div className='p-2 border rounded '>
        <h1 className='font-semibold'>{props.language}</h1>
        <p>{props.desc}</p>
    </div>
  )
}
