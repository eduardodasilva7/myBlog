import React from "react";
import { Mail, Phone, MapPin, Send } from 'lucide-react';

function Contato(){
    return(
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-medium sm:text-5xl mb-4 text-gray-900 dark:text-white">Entre em <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Contato</span></h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Vamos conersar sobre o seu projeto e como podemos ajudar a transformar suas ideias em realidades.</p>
            </div>

            <div>
                <form action="" className="flex flex-col">

                    <label htmlFor="">Nome Completo</label>
                    <textarea name="" id="" placeholder="Conte-nos sobre o seu projeto..."></textarea>

                    <label htmlFor="">Email</label>
                    <textarea name="" id="" placeholder="Conte-nos sobre o seu projeto..."></textarea>

                    <label htmlFor="">Telefone</label>
                    <textarea name="" id="" placeholder="Conte-nos sobre o seu projeto..."></textarea>

                    <label htmlFor="">Assunto</label>
                    <textarea name="" id="" placeholder="Conte-nos sobre o seu projeto..."></textarea>

                    <label htmlFor="">Mensagem</label>
                    <textarea name="" id="" placeholder="Conte-nos sobre o seu projeto..."></textarea>

                    <button>Enviar Mensagem <Send/></button>
                </form>
            </div>

            
        </section>
    )
}

export default Contato;