import {React, useState} from "react";
import Theme from "./themeToggle";
import { Menu, X } from 'lucide-react';

function MenuNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-999 bg-white/40 dark:bg-gray-900/80 ">
      <nav className="flex flex-row justify-between p-5 items-center border-b border-gray-300  backdrop-blur-md border-b border-gray-200 ">
        <h1 className="text-3xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          DevSysems
        </h1>

        {/* Desktop Menu */}
        <div className="flex flex-row gap-10 items-center hidden md:flex">
            <button className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-200 dark:hover:text-blue-400">
              Início
            </button>
            <button className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-200 dark:hover:text-blue-400">
              Projetos
            </button>
            <button className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-200 dark:hover:text-blue-400">
              Serviços
            </button>
            <button className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-200 dark:hover:text-blue-400">
              Sobre
            </button>
            <Theme />
            <button className="px-4 py-2 rounded-md bg-black text-white transition-colors dark:bg-white dark:text-gray-700">
              Contato
            </button>
        </div>

        {/* Button menu */}
        <div className="md:hidden flex items-center gap-2">
          <Theme />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 dark:text-gray-300"          
          >
            {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>

      {/* menu mobile */}
      {isMenuOpen && (<div className="md:hidden p-4 space-y-4 absolute left-0 right-0 top-full">
        <button className="block w-full  text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Início</button>
        <button className="block w-full  text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projetos</button>
        <button className="block w-full  text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Serviços</button>
        <button className="block w-full  text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Sobre</button>
        <button className="w-full px-4 py-2 rounded-md bg-black text-white transition-colors dark:bg-white dark:text-gray-700">Contato</button>
      </div>)}
       
      </nav>
    </header>
  );
}

export default MenuNav;
