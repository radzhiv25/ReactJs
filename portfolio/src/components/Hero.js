// import React from 'react'
import Code from "../assets/Code.jpg";
import { Experience } from "./Experience";
import { Skills } from "./Skills";

function Hero() {
  return (
    <div>
      <div className="relative hero-section h-[100vh] flex md:flex-row flex-col items-center w-1/2 mx-auto gap-14">
        <img
          src={Code}
          alt=""
          className="md:w-1/2 grayscale hover:grayscale-0"
        />
        <h2 className="text-gray-600 font-bold md:w-1/2 text-justify">
          Hey 👋🏻, I am Rajeev Krishna, I am front-end Developer 💻. I have hands
          on knowledge on industry leading web languages and framework. 🚀
        </h2>
      </div>
      <Experience />
      <Skills />
    </div>
  );
}

export default Hero;
