import React from 'react'
import AboutImg from '../assets/about-img.jpg'
export const About = () => {
  return (
    <div className='p-10 flex-col'>
        <img src={AboutImg} alt="about" className='md:w-1/2 rounded-md mx-auto shadow-md'/>
        <div className='mt-5 text-center md:w-1/2 mx-auto'>
            <h1 className='font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-left flex gap-2'>
              Keeper
                <img src="https://img.icons8.com/nolan/64/windows-notepad.png" alt="" className='w-8'/>
            </h1>
            <p className='mt-2 text-justify text-gray-400'>
            Introducing <b>Keeper</b>, the ultimate digital companion for organizing and capturing your thoughts. Designed with simplicity and efficiency in mind, Keeper Notes empowers you to seamlessly capture ideas, create to-do lists, and jot down important reminders—all in one intuitive app. With its sleek interface and user-friendly features, you can effortlessly organize your notes into categories, add tags for quick retrieval, and easily search through your entire collection. Whether you're a student, professional, or creative mind, Keeper Notes keeps your thoughts in perfect harmony. Say goodbye to scattered thoughts and hello to productivity with <b>Keeper</b> — the indispensable note-taking app that helps you stay focused and organized.  
            </p>
        </div>
    </div>
  )
}
