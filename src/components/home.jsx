import React from "react";
import homeImg from '../assets/home-img.jpg'

function Home(){
    return(
        <main className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-gray-950">
            <section  className="grid grid-cols-2 items-center gap-8 p-8 mx-auto">
                <div className="flex flex-col gap-12 items-cente ">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-gray-900 dark:text-white  max-w-2xl">Transforme suas ideias em{' '}<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">sistemas poderosos</span></h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl">Desenvolvimento de software sob medida para impulsionar seu negócio. Criamos sistemas web e mobile que entregam resultados reais.</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-black text-white py-2 px-4 rounded-md">Ver Projetos <span>→</span></button>
                        <button className="py-2 px-4 ring-1 ring-gray-300 rounded-md">Solicitar Orçamento</button>
                    </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img src={homeImg} alt="" className="rounded-lg w-full h-screen"/>
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>
                </div>
            </section>
        </main>
    )
}

export default Home;