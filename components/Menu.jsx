"use client"
import "../app/globals.css";
import { useState } from "react";

function Menu() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userData = {
    name: "John Doe",
    role: "Administrator",
  };
  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <a href="#" className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="next.svg"
                alt="Logo"
              />
            </a>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Buscar Practicas
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Mi CV
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Mis postulaciones
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleUserMenu}
              className="flex-shrink-0 p-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            >
              <div className="flex items-center">
                <img
                  className="h-8 w-8 rounded-full"
                  src="img/avatar.svg"
                  alt="Avatar"
                />
              </div>
            </button>
            {showUserMenu && (
              <div className=" relative">
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                  <div className="border-transparent text-gray-500 px-8">
                    {userData.name} ({userData.role})
                  </div>

                  <div className="border-b border-gray-200"></div>

                  <a
                    href="#"
                    className=" block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Menu;