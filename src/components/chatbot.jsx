import { AnimatePresence, motion
 } from "motion/react";
import { useState } from "react";
import { MessageCircle, X, Bot, SendHorizontal } from 'lucide-react';


function ChatBot(){
    const [isOpen, setIsOpen] = useState(false);

  return(
    <div>
      {/* ChatBot */}
      <AnimatePresence>
        {
          isOpen && (
            <motion.div
              initial={{opacity: 0, y: 20, scale: 0.8}}
              animate={{opacity: 1, y: 0, scale: 1}}
              transition={{duration: 0.2}}
              className="fixed bottom-24 right-4 sm:right-6 lg:right-8 z-999"
            >
              <div className="bg-white rounded-2xl w-80 max-w-[calc(100vw-2rem)] border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                {/* parte superior */}
                <div className="flex justify-around items-center p-2 border-b border-gray-300 ">

                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle size={24}/>
                    </div>
                    <div>
                      <h1 className="text-base">Olá, sou chatbot</h1>
                      <p className="text-[9px]">Online</p>
                    </div>
                  </div>

                  <button
                      onClick={() => setIsOpen(false)}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      <X size={19} />
                    </button>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl">
                <div className="max-h-[16rem] overflow-y-auto">
                    
                    
                              {/* caixa de apresentação */}
                  <div className="flex mb-3">
                    <Bot className="w-6 h-6 bg-emerald-500 rounded-full p-1 m-1"  />
                    <div className="bg-emerald-500 h-auto max-w-[14rem] rounded-lg p-2">
                      <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rem minus eum quis, nemo qo rem fuga provident!</p>
                    </div>
                  </div>
                              {/* caixaa de resposta */}
                    <div className="flex flex-row-reverse mb-3">
                    <Bot className="w-6 h-6 bg-indigo-700 rounded-full p-1 m-1"  />
                    <div className="bg-indigo-700 h-auto max-w-[14rem] rounded-lg p-2">
                      <p className="text-sm">dent!</p>
                    </div>
                  </div>
                </div>
                  <div className="flex gap-2">
                    <input id="duvida" type="subject"  placeholder="Tire sua duvida..." className="w-full bg-gray-200 rounded-xl px-3 py-1 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                    />
                    
                    <button className="bg-emerald-500 p-2 rounded-full text-white">
                      <SendHorizontal size={18} />
                    </button>
                  </div>
                </div>
                
              </div>
            </motion.div>

          )
        }
      </AnimatePresence>

      {/* Button chat */}
      <motion.button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 sm:right-6 lg:right-8 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-colors group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}>

          <AnimatePresence>
            {isOpen ? (
              <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              >
                <X className="text-white" size={28} />
              </motion.div>
            ) : (
              <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              >
                <MessageCircle className="text-white" size={28} />
              </motion.div>
            )}
          </AnimatePresence>
        
      </motion.button>
    </div>
  )
}

export default ChatBot;

