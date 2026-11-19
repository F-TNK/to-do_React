"use client";

import { useState } from "react";
import { tarefasIniciais } from "@/dados/tarefas";
import { COLUNAS } from "@/dados/tarefas";
import Coluna from "../Coluna/Coluna.js";
import Cartao from "../Cartao/Cartao.js";
import styles from "./Quadro.module.css"

import TarefaItem from "../TarefaItem.js";
import FormTarefa from "../FormTarefa.js";

export default function Quadro() {
  const [tarefas, setTarefas] = useState(tarefasIniciais);
  const [filtro, setFiltro] = useState("todas");

  /*
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

  const editar = (id, descricao) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, descricao: descricao } : tarefa
      )
    );
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
  
   */


  // <FormTarefa aoAdicionar={adicionar} />
  
  
  <div className={styles.quadro}>
  {
    COLUNAS.map((coluna, posicao) => {
      const daColuna = tarefas.filter(
        (tarefa) => tarefa.status === coluna.status
      );

      return (
        <Coluna
          key={coluna.status}
          titulo={coluna.titulo}
          status={coluna.status}
          quantidade={daColuna.length}
        >
          {daColuna.map((tarefa) => (
            <Cartao key={tarefa.id} tarefa={tarefa} />
          ))}
        </Coluna>
      );
    });
  }
  </div>
}
