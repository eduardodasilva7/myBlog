import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function Contato() {
  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-medium sm:text-5xl mb-4 text-gray-900 dark:text-white">
          Entre em{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contato
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Vamos conersar sobre o seu projeto e como podemos ajudar a transformar
          suas ideias em realidades.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="border-1 border-gray-600 rounded-xl max-h-max dark:bg-gray-800">
          <form action="" className="flex flex-col space-y-6 p-8">
            <div>
              <label
                htmlFor=""
                className="block text-sm text-gray-900 font-medium dark:text-white"
              >
                Nome Completo
              </label>
              <input
                id="email"
                type="email"
                placeholder="seu@email.com"
                required
                className="w-full bg-gray-200 rounded-xl px-3 py-1 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="block text-sm text-gray-900 font-medium dark:text-white"
              >
                Nome Completo
              </label>
              <input
                id="email"
                type="email"
                placeholder="seu@email.com"
                required
                className="w-full bg-gray-200 rounded-xl px-3 py-1 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="block text-sm text-gray-900 font-medium dark:text-white"
              >
                Nome Completo
              </label>
              <input
                id="email"
                type="email"
                placeholder="seu@email.com"
                required
                className="w-full bg-gray-200 rounded-xl px-3 py-1 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="block text-sm text-gray-900 font-medium dark:text-white"
              >
                Nome Completo
              </label>
              <input
                id="email"
                type="email"
                placeholder="seu@email.com"
                required
                className="w-full bg-gray-200 rounded-xl px-3 py-1 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="block text-sm text-gray-900 font-medium dark:text-white"
              >
                Nome Completo
              </label>
              <input
                id="email"
                type="email"
                placeholder="seu@email.com"
                required
                className="w-full bg-gray-200 rounded-xl px-3 py-1 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
              />
            </div>

            <button
              className="flex bg-black text-white text-base py-2 px-4 rounded-md w-full group justify-center
items-center dark:bg-white dark:text-black"
            >
              Enviar Mensagem{" "}
              <Send
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={16}
              />
            </button>
          </form>
        </div>

        <div className="p-8">
          <h2 className="text-2xl mb-6 text-gray-900 font-medium dark:text-white">
            Informações de Contato
          </h2>

          <div className="border-1 border-gray-600 rounded-xl flex items-center p-4 gap-3 mb-6 dark:bg-gray-800">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 ">
              <Mail className="text-blue-600 dark:text-blue-400" />
            </div>
            <div className="">
              <h4 className="text-gray-900 font-medium dark:text-white">E-mail</h4>
              <p className="text-gray-600 dark:text-gray-400">contato@devsystems.com</p>
            </div>
          </div>

          <div className="border-1 border-gray-600 rounded-xl flex items-center p-4 gap-3 mb-6 dark:bg-gray-800">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="text-green-600 dark:text-green-400" size={24} />
            </div>
            <div className="">
              <h4 className="text-gray-900 font-medium dark:text-white">E-mail</h4>
              <p className="text-gray-600 dark:text-gray-400">contato@devsystems.com</p>
            </div>
          </div>

          <div className="border-1 border-gray-600 rounded-xl flex items-center p-4 gap-3 mb-6 dark:bg-gray-800">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin
                className="text-purple-600 dark:text-purple-400"
                size={24}
              />
            </div>
            <div className="">
              <h4 className="text-gray-900 font-medium dark:text-white">E-mail</h4>
              <p className="text-gray-600 dark:text-gray-400">contato@devsystems.com</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-xl dark:border-0">
            <h3 className="text-2xl mb-3">Horário de Atendimento</h3>
            <div className="space-y-2 text-blue-50">
              <p>Segunda a Sexta: 9h às 18h</p>
              <p>Sábados: 9h às 13h</p>
              <p>Domingos: Fechado</p>
            </div>
            <p className="mt-4 text-sm text-blue-100">
              Responderemos sua mensagem em até 24 horas úteis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;
