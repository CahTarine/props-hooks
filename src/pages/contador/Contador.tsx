import {useState} from 'react';

function Contador() {

  const [valor, setValor] = useState(0);

  function handleClick () {
    setValor(valor + 1);
  }

  function reduzirValor() {
    setValor(valor - 1);
  }
  return (
    <div>
      <p>o valor atual é: {valor}</p>
      <button className='button_contador' onClick={handleClick}>Adicionar 1</button>
      <button className='button_contador' onClick={reduzirValor}> Retirar 1</button>
    </div>
  )
}

export default Contador