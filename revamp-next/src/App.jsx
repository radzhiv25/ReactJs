import { useState } from "react";
import Radzhiv from "./assets/radzhiv.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="md:h-screen h-full bg-neutral-800 md:px-40 px-10 py-10">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-xl font-sans font-semibold">rajeev krishna</h1>
        <button className="text-white hover:underline underline-offset-2">
          resume
        </button>
      </div>
      <section className="flex md:flex-row flex-col gap-10 my-20">
        <p className="md:w-2/3 p-3 text-gray-500 text-justify">
          hey 👋🏻, I am a frontend engineer believing in design aesthetics with expertise in HTML, CSS, JavaScript, C++, and Python. Proficient in React.js, Tailwind CSS, Next.js, Git, and GitHub. Experienced in UI/UX design using Figma and Webflow. Committed to crafting seamless, visually appealing web experiences, combining technical proficiency with creative problem-solving in collaborative environments.{" "}
        </p>
        <img src={Radzhiv} alt="rajeev" className="md:w-1/3 rounded-md" />
      </section>
      <section className="my-10">
        <h2 className="text-lg font-semibold text-white">projects</h2>
      </section>
      <footer className="md:absolute relative w-max md:bottom-10 bottom-5 mx-auto text-blue-500">
        copright to radzhiv
      </footer>
    </div>
  );
}

export default App;
