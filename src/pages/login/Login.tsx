import { useState } from 'react'
import Home from '../home/Home';
function Login() {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      {isLogged ? (
        <div>
           <Home titulo='Volte sempre!!'texto='Ficamos felizes com sua visita.'/>
           <button onClick={() => setIsLogged(false)}>Sair</button>
        </div>
       
      ) : (
        <div>
          <h2>Ao finalizar, faça login:</h2>
          <button onClick={() => setIsLogged(true)}>Login</button>
        </div>
      )}
    </>
  )
}

export default Login