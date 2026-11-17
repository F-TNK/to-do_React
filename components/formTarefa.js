"use client";

import { useState } from "react";

export default function FormTarefa({ aoAdicionar }) {
  const [texto, setTexto] = useState("");
  const [erro, setErro] = useState("");
  const [prioridade, setPrioridade] = useState("");

  const enviar = (event) => {
    event.preventDefault();
    if (texto.trim() === "") {
      setErro("Digite uma Tarefa!");
      return; // interrompe a função: não adiciona nada
    }
    aoAdicionar(texto.trim(), prioridade);
    setTexto("");
    setErro("");
  };

  return (
    <form className="formulario" onSubmit={enviar}>
      <input value={texto} onChange={(event) => setTexto(event.target.value)} />
      {erro !== "" && <p className="erro">{erro}</p>}
      <select
        className="prioridade"
        value={prioridade}
        onChange={(event) => setPrioridade(event.target.value)}
      >
        <option className="etiquetaAlta">Alta</option>
        <option className="etiquetaMedia">Média</option>
        <option className="etiquetaBaixa">Baixa</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
}
