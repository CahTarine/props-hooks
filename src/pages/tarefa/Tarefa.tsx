import { useEffect, useState } from "react"
import Contador from "../contador/Contador";

function Tarefa() {

  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState('');

  useEffect(() => {

    if (completed) {
      setTarefa('Parabens, voce concluiu a tarefa.');
    } else {
      setTarefa('Conclua a tarefa clicando 10 vezes no botão vermelho.');
    }
  }, [completed]);

  return (
    <div>
      <h2>{tarefa}</h2>
      <Contador/>
      <button onClick={() => setCompleted(!completed)}>Concluida</button>
    </div>
  )
}

export default Tarefa