import { useEffect, useState } from 'react'
import './Task.css'

function Task() {
  
  // variáveis de estado
  const [finalizada, setFinalizada] = useState<boolean>(false);
  const [tarefa, setTarefa] = useState<string>("tarefa pendente");
  
  // função de efeito colateral
  useEffect(() => {
    if (finalizada === true) {
      setTarefa("tarefa concluída");
    }
  }, [finalizada]);

  return (
    <div className="container">
        <h1>Tarefa</h1>
        <h3>Status da Tarefa: {tarefa}</h3>
        <button onClick={() => setFinalizada(true)}>Conclua a Tarefa</button>
    </div>
  )
}

export default Task