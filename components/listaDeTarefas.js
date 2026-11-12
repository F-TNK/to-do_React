import { useState } from "react";
import { tarefasIniciais } from "./dados";
import tarefaItem from "./tarefaItem";

// export default function listaDeTarefas() {
//   return (
//     <ul>
//       {tarefasIniciais.map((tarefa) => (
//         <tarefaItem key={tarefa.id} tarefa={tarefa} />
//       ))}
//       ;
//     </ul>
//   );
// }

export default function listaDeTarefas() {
  const [tarefas, setTarefas] = useState(tarefasIniciais);

  const concluir = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  const adicionar = (descricao) => {
    const nova = { id: Date.now(), descricao: descricao, concluida: false };
    setTarefas([...tarefas, nova]);
  };

  return (
    <section>
      <formTarefa adicionar={adicionar} />
      <ul>
        {tarefasIniciais.map((tarefa) => (
          <tarefaItem key={tarefa.id} tarefa={tarefa} />
        ))}
        ;
      </ul>
    </section>
  );
}
