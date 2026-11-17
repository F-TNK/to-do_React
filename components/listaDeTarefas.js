"use client";

import { useState } from "react";
import { tarefasIniciais } from "./dados"; // export nomeado → usa chaves
import TarefaItem from "./TarefaItem.js";
import FormTarefa from "./FormTarefa.js";

export default function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState(tarefasIniciais);
  const [filtro, setFiltro] = useState("todas");

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

  const adicionar = (descricao, prioridade) => {
    const nova = {
      id: Date.now(),
      descricao: descricao,
      concluida: false,
      prioridade: prioridade,
    };
    setTarefas([...tarefas, nova]);
  };

  const totalConcluidas = tarefas.filter((tarefa) => tarefa.concluida).length;

  const limparConcluidas = () => {
    setTarefas(tarefas.filter((tarefa) => !tarefa.concluida));
  };

  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === "pendentes") return !tarefa.concluida;
    if (filtro === "concluidas") return tarefa.concluida;
    return true;
  });

  const FILTROS = [
    { valor: "todas", texto: "Todas" },
    { valor: "pendentes", texto: "Pendentes" },
    { valor: "concluidas", texto: "Concluidas" },
  ];

  return (
    <section>
      <FormTarefa aoAdicionar={adicionar} />
      <div className="resumo">
        <p>
          {totalConcluidas} de {tarefas.length} concluidas
        </p>
        <div className="filtros">
          {FILTROS.map((item) => (
            <button
              key={item.valor}
              type="button"
              className={
                filtro === item.valor
                  ? "botao-secundario ativo"
                  : "botao-secundario"
              }
              onClick={() => setFiltro(item.valor)}
            >
              {item.texto}
            </button>
          ))}
        </div>
      </div>

      {tarefasFiltradas.length === 0 ? (
        <p className="vazio">Nenhuma tarefa por aqui</p>
      ) : (
        <ul>
          {tarefasFiltradas.map((tarefa) => (
            <TarefaItem
              key={tarefa.id}
              tarefa={tarefa}
              aoConcluir={concluir}
              aoExcluir={excluir}
            />
          ))}
        </ul>
      )}
      <div className="resumo">
        <button
          type="button"
          className="botao-secundario"
          onClick={limparConcluidas}
          disabled={totalConcluidas === 0}
        >
          Limpar Concluidas
        </button>
      </div>
    </section>
  );
}
