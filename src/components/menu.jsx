import React from "react";




function Menu(){
    return(
        <nav className="flex flex-row justify-between p-5 items-center  border-b-1 border-gray-300">
            <h1 className="text-3xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">DevSysems</h1>
           
            <ul className="flex flex-row gap-10 items-center">
                <li><button className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark transition-colors">Início</button></li>
                <li><button className="text-lg text-gray-500">Projetos</button></li>
                <li><button className="text-lg text-gray-500">Serviços</button></li>
                <li><button className="text-lg text-gray-500">Sobre</button></li>
                <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 cursor-pointer"
                        aria-label="Alternar tema"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                        />
                    </svg>
                </li>
                <li ><button className="bg-black text-white py-2 px-4 rounded-md">Contato</button></li>
            </ul>
        </nav>
    )
}

export default Menu;