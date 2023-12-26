import React from "react";
import "../app/globals.css";

function SideBar() {
  return (
    <div className="sidebar  w-1/5 min-h-screen  bg-gray-800 text-white p-7">
      <div className="h-1/6">
        <div className="flex justify-center mb-1">
          <img
            className="w-20 h-20 rounded-full"
            src="img/OIG.jpg"
            alt="Profile Image"
          />
        </div>
        <div className="flex justify-center ">
          <h2 className="font-bold border-l-slate-950 text-2xl">SGE-UNP</h2>
        </div>
      </div>
      <div className="pt-7">
        <ul className="flex flex-col ">
          <li className="mb-4  p-2 rounded-md border-gray-700 pb-1 transition duration-300 ease-in-out hover:bg-gray-700">
            <button className="w-full p-2  text-left focus:outline-none">
              Home
            </button>
          </li>
          <li className="mb-4  p-2 rounded-md border-gray-700 pb-1 transition duration-300 ease-in-out hover:bg-gray-700">
            <button className="w-full p-2 text-left focus:outline-none">
              Buscar Practicas
            </button>
          </li>
          <li className="mb-4  p-2 rounded-md border-gray-700 pb-1 transition duration-300 ease-in-out hover:bg-gray-700">
            <button className="w-full p-2 text-left focus:outline-none">
              Item 3
            </button>
          </li>
          <li className="mb-4  p-2 rounded-md border-gray-700 pb-1 transition duration-300 ease-in-out hover:bg-gray-700">
            <button className="w-full p-2 text-left focus:outline-none">
              Item 4
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
