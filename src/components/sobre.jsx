import React from "react";
import sobreImg from '../assets/sobre.jpg'
import { CheckCircle, Award, Users, Target } from 'lucide-react';

function Sobre(){
    return(
        <main className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-gray-950">
            <section  className="grid grid-cols-2 items-center gap-8 p-8 mx-auto">
                <div className="flex flex-col gap-12 items-cente ">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-gray-900 dark:text-white  max-w-2xl">Sobre <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Nós</span></h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-xl"> Somos uma equipe apaixonada por tecnologia, dedicada a transformar ideias em soluções digitais de alto impacto.</p>
                    <p className="text-xl text-gray-600 dark:text-gray-400max-w-xl"> Com mais de 5 anos de experiência no mercado, já ajudamos dezenas de empresas a crescerem através da tecnologia. 
              Nosso diferencial está na combinação de expertise técnica com visão de negócio, garantindo que cada projeto 
              entregue não apenas um código de qualidade, mas resultados mensuráveis.</p>
                    
                <ul >
                    <li className="flex mb-4"><CheckCircle className="text-green-600 mr-4 dark:text-green-400 flex-shrink-0 mt-1" size={20} /> Metodologia ágil e entregas frequentes</li>
                    <li className="flex mb-4"><CheckCircle className="text-green-600 mr-4 dark:text-green-400 flex-shrink-0 mt-1" size={20} /> Comunicação transparente em todas as etapas</li>
                    <li className="flex mb-4"><CheckCircle className="text-green-600 mr-4 dark:text-green-400 flex-shrink-0 mt-1" size={20} /> Suporte contínuo após a entrega</li>
                    <li className="flex mb-4"><CheckCircle className="text-green-600 mr-4 dark:text-green-400 flex-shrink-0 mt-1" size={20} /> Garantia de qualidade e satisfação</li>
                </ul>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img src={sobreImg} alt="" className="rounded-lg w-full h-screen"/>
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>
                </div>
            </section>
        </main>
    )
}

export default Sobre;