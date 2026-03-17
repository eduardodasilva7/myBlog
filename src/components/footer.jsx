import React from "react";
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';


function Footer(){
    const currentYear = new Date().getFullYear();
  return(
       <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              DevSystems
            </div>
            <p className="text-sm text-gray-400">
              Transformando ideias em soluções digitais de alto impacto.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Início</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projetos</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Serviços</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Sobre</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Desenvolvimento Web</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Apps Mobile</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Sistemas Empresariais</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">APIs & Integrações</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:contato@devsystems.com" className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} DevSystems. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;