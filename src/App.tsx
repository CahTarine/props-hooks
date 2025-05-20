import './App.css'
import Contador from './pages/contador/Contador'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Tarefa from './pages/tarefa/Tarefa'

function App() {

  return (
    <>
        <Home titulo='Seja Bem-Vindo' texto='Sinta-se em casa (mas lembre-se que nao esta!)'/>
        <Tarefa/>
        <Login/>
    </>
  )
}

export default App
