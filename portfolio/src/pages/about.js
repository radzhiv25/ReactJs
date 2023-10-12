import React from 'react'
import Profile from '../assets/Rajeev.JPG'
export const About = () => {
  return (
    <div className='md:h-[80vh] text-center text-gray-500 flex md:flex-row flex-col w-2/3 m-auto md:gap-0 gap-10'>
        {/* <h1>Hey this is Rajeev</h1> */}
        <img src={Profile} alt='Rajeev' className='m-auto md:w-1/3 rounded-md' />
        <p className='md:w-1/2 m-auto md:text-justify text-left'>Rajeev Krishna is a dedicated final-year student who is passionate about web development. Currently pursuing his degree, he has also embarked on a part-time journey as a frontend developer. With a keen eye for design and a knack for turning ideas into user-friendly digital interfaces, Rajeev has honed his skills in HTML, CSS, and JavaScript. He thrives on creating visually appealing and responsive websites that not only meet client requirements but also enhance user experiences. Rajeev's commitment to continuous learning and his ability to balance academics with real-world development projects make him a promising talent in the ever-evolving world of web development.</p>
    </div>
  )
}
