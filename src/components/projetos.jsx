import React from "react";
import { ExternalLink, Github } from 'lucide-react';
import img1 from '../assets/img1.jpg';

function Projetos() {
    return(
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-medium sm:text-5xl mb-4 text-gray-900 dark:text-white">Projetos em <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Destaque</span></h1>
                <p className="text-xl text-gray-600  max-w-2xl mx-auto dark:text-gray-400">Conheça alguns dos sistemas ue desenvolvemos e os resultados alcançados</p>
            </div>
            {/* colletion cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 "> 

                <div className="group hover:shadow-2xl transition-shadow duration-300 border-1 border-gray-300 rounded-xl dark:border-gray-700 ">
                    <div className="relative overflow-hidden rounded-lg ">
                        <img src={img1} alt="" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                            
                            <button size="sm" className="bg-white flex items-center px-2.5 py-1.5 rounded-lg">
                                <ExternalLink size={16} className="mr-2" />
                                Ver Mais</button>
                        </div>
                    </div>

                    <div className="p-6">
                        <h3 className="text-2xl mb-3 font-medium text-gray-900 dark:text-white">Sistema de Gestão</h3>
                        <p className="mb-4 text-gray-600 dark:text-gray-400">ERP completo com módulos de vendas, estoque, financeio e relatórios avançados</p>
                        <div className="flex flex-wrap gap-2 mb-4 pb-3 border-b border-gray-300">
                            <span className="bg-gray-200 py-1 px-3 rounded-4xl dark:bg-gray-600">React</span>
                            <span className="bg-gray-200 py-1 px-3 rounded-4xl dark:bg-gray-600">React</span>
                            <span className="bg-gray-200 py-1 px-3 rounded-4xl dark:bg-gray-600">React</span>
                        </div>
                        <div className="grid grid-cols-2 max-w-35">
                            <h4 className="font-medium">1000+</h4>
                            <h4 className="font-medium">99.9%</h4>
                            <p className="text-gray-500">Users</p>
                            <p className="text-gray-500">Uptime</p>
                        </div>
                    </div>
                </div>
                <div className="group hover:shadow-2xl transition-shadow duration-300 border-1 border-gray-300 rounded-xl dark:border-gray-700 ">
                    <div className="relative overflow-hidden rounded-lg ">
                        <img src={img1} alt="" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                            
                            <button size="sm" className="bg-white flex items-center px-2.5 py-1.5 rounded-lg">
                                <ExternalLink size={16} className="mr-2" />
                                Ver Mais</button>
                        </div>
                    </div>

                    <div className="p-6">
                        <h3 className="text-2xl mb-3 font-medium text-gray-900 dark:text-white">Sistema de Gestão</h3>
                        <p className="mb-4 text-gray-600 dark:text-gray-400">ERP completo com módulos de vendas, estoque, financeio e relatórios avançados</p>
                        <div className="flex flex-wrap gap-2 mb-4 pb-3 border-b border-gray-300">
                            <span className="bg-gray-200 py-1 px-3 rounded-4xl dark:bg-gray-600">React</span>
                            <span className="bg-gray-200 py-1 px-3 rounded-4xl dark:bg-gray-600">React</span>
                            <span className="bg-gray-200 py-1 px-3 rounded-4xl dark:bg-gray-600">React</span>
                        </div>
                        <div className="grid grid-cols-2 max-w-35">
                            <h4 className="font-medium">1000+</h4>
                            <h4 className="font-medium">99.9%</h4>
                            <p className="text-gray-500">Users</p>
                            <p className="text-gray-500">Uptime</p>
                        </div>
                    </div>
                </div>
                <div className="group hover:shadow-2xl transition-shadow duration-300 border-1 border-gray-300 rounded-xl dark:border-gray-700 ">
                    <div className="relative overflow-hidden rounded-lg ">
                        <img src={img1} alt="" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                            
                            <button size="sm" className="bg-white flex items-center px-2.5 py-1.5 rounded-lg">
                                <ExternalLink size={16} className="mr-2" />
                                Ver Mais</button>
                        </div>
                    </div>

                    <div className="p-6">
                        <h3 className="text-2xl mb-3 font-medium text-gray-900 dark:text-white">Sistema de Gestão</h3>
                        <p className="mb-4 text-gray-600 dark:text-gray-400">ERP completo com módulos de vendas, estoque, financeio e relatórios avançados</p>
                        <div className="flex flex-wrap gap-2 mb-4 pb-3 border-b border-gray-300">
                            <span className="bg-gray-200 py-1 px-3 rounded-4xl dark:bg-gray-600">React</span>
                            <span className="bg-gray-200 py-1 px-3 rounded-4xl dark:bg-gray-600">React</span>
                            <span className="bg-gray-200 py-1 px-3 rounded-4xl dark:bg-gray-600">React</span>
                        </div>
                        <div className="grid grid-cols-2 max-w-35">
                            <h4 className="font-medium">1000+</h4>
                            <h4 className="font-medium">99.9%</h4>
                            <p className="text-gray-500">Users</p>
                            <p className="text-gray-500">Uptime</p>
                        </div>
                    </div>
                </div>
                
               
                
            </div>
            <div className="text-center mt-12"><button className="py-2 px-4 ring-1 ring-gray-300 rounded-md dark:bg-gray-700">Ver Todos os Projetos <span>→</span></button></div>
        </section>
    )
}

export default Projetos;