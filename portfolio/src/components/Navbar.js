import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="mx-auto md:w-2/3 nav p-5 text-black flex justify-between md:items-center">
      <h1 className="text-4xl text-transparent bg-clip-text font-bold bg-gradient-to-br from-pink-500 via-fuchsia-500 to-blue-500 italic">
        <Link to="/">radzhiv</Link>
      </h1>
      <ul className="md:flex md:flex-row flex-col font-medium gap-5 text-gray-400 md:visible hidden">
        <li className="hover:text-gray-600 hover:underline hover:cursor-pointer">
          <Link to="/about">about</Link>
        </li>
        <li>projects</li>
        <li className="hover:text-gray-600 hover:underline hover:cursor-pointer">
          <Link to="/contact">contact</Link>
        </li>
        <li>
          <Link to="https://drive.google.com/file/d/1k7CPUUth_RR1Nrg_TGQV9tFndn4zkTGL/view?usp=sharing">
            <button className="hover:text-green-500">resume</button>
          </Link>
        </li>
        <li>mode</li>
      </ul>
    </div>
  );
};
