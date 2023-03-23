import { type FC } from "react";

const Navbar: FC = () => {
  return (
    <nav data-scroll-section className="flex h-16 w-full items-center justify-between bg-white bg-opacity-20 px-4 backdrop-blur-xl backdrop-filter">
      <div></div>
      <ul className="flex w-1/3 items-center justify-between text-xl font-bold text-white">
        <li className="cursor-pointer hover:text-gray-300">Home</li>
        <li className="cursor-pointer hover:text-gray-300">Rules</li>
        <li className="cursor-pointer hover:text-gray-300">Contact</li>
      </ul>
      <button className="rounded-md bg-red-500 px-4 py-2 font-bold text-white">
        Register
      </button>
    </nav>
  );
};

export default Navbar;
