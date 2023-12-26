import '../app/globals.css';

function Header(){
    return(
        <div className="flex">
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
    )
}
export default Header;