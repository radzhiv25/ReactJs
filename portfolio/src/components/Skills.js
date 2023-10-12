import React from "react";
import { SkillCard } from "./SkillCard";

export const Skills = () => {
  return (
    <div className="w-2/3 mx-auto my-10">
      <h1 className="text-4xl font-bold text-center text-gray-500">Skills</h1>
      <div className="grid grid-cols-4 gap-10 my-10">
          <SkillCard language="C++" desc="Mainly used for Data Structure and core level coding"/>
          <SkillCard language="HTML" desc="Hyper Text Markup Language to used for structing content on web"/>
          <SkillCard language="CSS" desc="Cascading Style Sheet used for styling the web structure based on HTML"/>
          <SkillCard language="Javascript" desc="Mainly used for Data Structure and core level coding"/>
          <SkillCard language="TailwindCSS" desc="Mainly used for Data Structure and core level coding"/>
          <SkillCard language="React" desc="Mainly used for Data Structure and core level coding"/>
          <SkillCard language="Next" desc="Mainly used for Data Structure and core level coding"/>
          <SkillCard language="Astro" desc="Mainly used for Data Structure and core level coding"/>
          <SkillCard language="Figma" desc="Mainly used for Data Structure and core level coding"/>
          <SkillCard language="Webflow" desc="Mainly used for Data Structure and core level coding"/>
      </div>
    </div>
  );
};
