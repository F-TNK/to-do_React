"use client";

import { useState } from "react";
import { tarefasIniciais } from "./dados"; // export nomeado → usa chaves
import TarefaItem from "./TarefaItem.js";
import FormTarefa from "./FormTarefa.js";

export default function listaDeTarefas() {
  const [tarefas, setTarefas] = useState(tarefasIniciais);

  const concluir = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  const excluir = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  const adicionar = (descricao) => {
    const nova = { id: Date.now(), descricao: descricao, concluida: false };
    setTarefas([...tarefas, nova]);
  };

  return (
    <section>
      <FormTarefa adicionar={adicionar} />
      <ul>
        {tarefasIniciais.map((tarefa) => (
          <TarefaItem
            key={tarefa.id}
            tarefa={tarefa}
            aoConcluir={concluir}
            aoExcluir={excluir}
          />
        ))}
      </ul>
    </section>
  );
}
