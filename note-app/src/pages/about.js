import React from 'react'

export const About = () => {
  return (
    <div className='p-10 flex-col'>
        <img src="https://images.unsplash.com/photo-1526378787940-576a539ba69d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" alt="" className='md:w-1/2 rounded-md mx-auto shadow-md'/>
        <div className='mt-5 text-center md:w-1/2 mx-auto'>
            <h1 className='text-2xl font-semibold text-left'>Keeper</h1>
            <p className='text-justify text-gray-400'>The idea behind keep is to normalise the notes maintaing for the people this also helps to reduce the usage of paper and sustain it for further important usage.</p>
        </div>
    </div>
  )
}
