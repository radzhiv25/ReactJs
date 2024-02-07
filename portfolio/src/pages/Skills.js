import React from "react";
import { SkillCard } from "../components/SkillCard";

export const Skills = () => {
  const langArr = [{
    image: 'https://img.icons8.com/color/48/000000/c-plus-plus-logo.png',
    text: 'C++'
  },
  {
    image: 'https://img.icons8.com/color/48/000000/html.png',
    text: 'HTML'
  },
  {
    image: 'https://img.icons8.com/color/48/000000/css3.png',
    text: 'CSS'
  },
  {
    image: 'https://img.icons8.com/color/48/000000/javascript.png',
    text: 'JavaScript'
  },
  {
    image: 'https://img.icons8.com/color/48/000000/react-native.png',
    text: 'React'
  },
  {
    image: 'https://img.icons8.com/color/48/000000/tailwindcss.png',
    text: 'TailwindCSS'
  },
  {
    image: 'https://img.icons8.com/color/48/000000/nextjs.png',
    text: 'NodeJS'
  }
  ,{
    image: 'https://img.icons8.com/color/48/000000/git.png',
    text: 'Git'
  }
  ,{
    image: 'https://img.icons8.com/color/48/000000/github.png',
    text: 'GitHub'
  },
  {
    image: 'https://img.icons8.com/color/48/000000/figma.png',
    text: 'Figma'
  },
  {
    image: 'https://img.icons8.com/color/48/000000/webflow.png',
    text: 'Webflow'
  }
]

  return (
    <div className="w-2/3 mx-auto my-5">
      <h1 className="text-4xl font-bold text-center text-gray-500">Skills</h1>
      <div className="flex flew-wrap gap-10 my-10">
        {langArr.map((lang) => (<SkillCard image={lang.image} lang={lang.text}/>))}
      </div>
    </div>
  );
};
