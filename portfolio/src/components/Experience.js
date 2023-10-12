import React from "react";
import { ExpCard } from "./ExpCard";

export const Experience = (props) => {
  return (
    <div className="h-[80vh]">
      <h1 className="text-center font-bold text-4xl text-gray-500">
        Experience
      </h1>
      <div className="my-10 space-y-10">
        <ExpCard
          companyName="IMPETUS"
          role="Intern"
          desc="During the internship Period I have completed the following things listed below:
          1. Learned the basics of Web and how it works.
          2. Followed by the basics of front-end Development HTML and CSS.
          3. After making a couple of static websites, Initalized with Javascript.
          4. Further covering the advance part of Javascript and made couple of projects based on it. 
          5. Started with React and made and E-commerce website using React and learned TailwindCSS."
          duration="Aug 2023 - October 2023"
        />
         <ExpCard
          companyName="HacktoberFest'22"
          role="Open Source Contributor"
          desc="During the internship Period I have completed the following things listed below:
          1. Learned the basics of Web and how it works.
          2. Followed by the basics of front-end Development HTML and CSS.
          3. After making a couple of static websites, Initalized with Javascript.
          4. Further covering the advance part of Javascript and made couple of projects based on it. 
          5. Started with React and made and E-commerce website using React and learned TailwindCSS."
          duration="October 2022"
        />
      </div>
    </div>
  );
};
