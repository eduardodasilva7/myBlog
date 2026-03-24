import './styles/index.css'
import { ThemeProvider } from 'next-themes';
import Menu from './components/menu'
import Home from './components/home'
import Projetos from './components/projetos'
import Servico from './components/servico'
import Sobre from './components/sobre'
import Contato from './components/contato'
import Footer from './components/footer'
import ChatBot from './components/chatbot';

function App() {
  return (
   <ThemeProvider attribute="class" defaultTheme='light' enableSystem>
    <div className='min-h-screen bg-white dark:bg-gray-950 transition-colors'>
      <Menu />
      <Home />
      <Projetos />
      <Servico />
      <Sobre />
      <Contato />
      <Footer />
      <ChatBot />
    </div>
   </ThemeProvider>
  )
}

export default App
