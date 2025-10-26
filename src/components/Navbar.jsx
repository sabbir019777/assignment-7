import React from "react";
import { FaPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <header>
   
   <nav className="bg-white shadow-md border-b border-gray-200">
     <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center">
         
    <div className="text-xl font-medium text-gray-800 mb-4 md:mb-0 text-center md:text-left">
   <span className="font-bold text-[#4b0082]">CS</span> — Ticket System </div>

    
   <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0">
    <ul className="flex flex-col md:flex-row md:space-x-6 space-y-3 md:space-y-0 text-center md:text-left">
   <li>
    <a
     href="#"
   className="text-gray-800 hover:text-blue-700 hover:underline text-base transition duration-200"
   > Home </a>
  </li>
  <li>
    <a
     href="#"
   className="text-gray-800 hover:text-blue-700 hover:underline text-base transition duration-200"
  > FAQ </a>
    </li>
   <li>
   <a
    href="#"
  className="text-gray-800 hover:text-blue-700 hover:underline text-base transition duration-200"
   > Changelog </a>
  </li>
    <li>
     <a
    href="#"
   className="text-gray-800 hover:text-blue-700 hover:underline text-base transition duration-200"
   > Blog  </a>
  </li>
   <li>
     <a
  href="#"
    className="text-gray-800 hover:text-blue-700 hover:underline text-base transition duration-200"
    >  Download </a>
     </li>
  <li>
    <a
    href="#"
  className="text-gray-800 hover:text-blue-700 hover:underline text-base transition duration-200"
 >Contact </a>
   </li>
    </ul>

   
   <div className="flex justify-center md:justify-start">
    <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-medium py-2.5 px-5 rounded-md text-base flex items-center shadow-md hover:opacity-95 transition duration-200">
    <FaPlus className="mr-2 text-sm" /> New Ticket
   </button>
   </div>
 </div>
   </div>
  </nav>
    </header>
  );
};

export default Navbar;
