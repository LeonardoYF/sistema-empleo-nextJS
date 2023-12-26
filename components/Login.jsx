import '../app/globals.css';
import React from "react";

function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <div className="flex justify-center mb-4">
          <img
            className="w-16 h-16 rounded-full"
            src="/path/to/profile-image.jpg"
            alt="Profile Image"
          />
        </div>
        <h2 className="text-center text-xl font-bold mb-4">Iniciar Sesión</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              placeholder="Ingrese su email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              type="password"
              id="password"
              placeholder="Ingrese su contraseña"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <a
              className="text-blue-500 hover:underline"
              href="/forgot-password"
            >
              ¿Olvidó su contraseña?
            </a>
            <a className="text-blue-500 hover:underline" href="/register">
              Registrarse
            </a>
          </div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;