import './App.css'
import Menu from './components/menu'
import Home from './components/home'
import Projetos from './components/projetos'
import Servico from './components/servico'
import Sobre from './components/sobre'
import Contato from './components/contato'

function App() {
  return (
   <div>
    <Menu />
    <Home />
    <Projetos />
    <Servico />
    <Sobre />
    <Contato />
   </div>
  )
}

export default App
