import React from "react";
import { ExternalLink, Github } from 'lucide-react';
import img1 from '../assets/img1.jpg';

function Projetos() {
    return(
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
            <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl mb-4 text-gray-900 dark:text-white">Projetos em <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Destaque</span></h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Conheça alguns dos sistemas ue desenvolvemos e os resultados alcançados</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> 
                <div className="group border-1 border-gray-300 rounded-xl dark:bg-gray-800 dark:border-gray-700">
                    <div className="relative overflow-hidden rounded-t-lg">
                        <img src={img1} alt="" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                            
                            <button size="sm" className="bg-white flex items-center px-2.5 py-1.5 rounded-lg">
                                <ExternalLink size={16} className="mr-2" />
                                Ver Mais</button>
                        </div>
                    </div>

                    <h3>Sistema de Gestão</h3>
                    <p>ERP completo com módulos de vendas, estoque, financeio e relatórios avançados</p>
                    <div>
                        <span>React</span>
                        <span>React</span>
                        <span>React</span>
                    </div>

                    <div>
                        <h4>100+</h4>
                        <p>Users</p>
                        <h4>99.9%</h4>
                        <p>Uptime</p>
                    </div>
                </div>
                
                <div className="">
                    <img src={img1} alt="" className="w-full h-48" />
                    <div>
                        <ExternalLink size={16} className="mr-2" />
                        <button>Ver Mais</button>
                    </div>

                    <h3>Sistema de Gestão</h3>
                    <p>ERP completo com módulos de vendas, estoque, financeio e relatórios avançados</p>
                    <div>
                        <span>React</span>
                        <span>React</span>
                        <span>React</span>
                    </div>

                    <div>
                        <h4>100+</h4>
                        <p>Users</p>
                        <h4>99.9%</h4>
                        <p>Uptime</p>
                    </div>
                </div>
                
                <div className="">
                    <img src={img1} alt="" className="w-full h-48" />
                    <div>
                        <ExternalLink size={16} className="mr-2" />
                        <button>Ver Mais</button>
                    </div>

                    <h3>Sistema de Gestão</h3>
                    <p>ERP completo com módulos de vendas, estoque, financeio e relatórios avançados</p>
                    <div>
                        <span>React</span>
                        <span>React</span>
                        <span>React</span>
                    </div>

                    <div>
                        <h4>100+</h4>
                        <p>Users</p>
                        <h4>99.9%</h4>
                        <p>Uptime</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Projetos;