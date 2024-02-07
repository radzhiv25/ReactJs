import React from 'react'

export const SkillCard = (props) => {
  return (
    <div className='border-b p-2 rounded w-max hover:scale-125'>
        <img src={props.image} alt={props.text}/>
    </div>
  )
}
