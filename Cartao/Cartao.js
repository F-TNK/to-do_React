"use client";

import { useState } from "react";

export default function Cartao({ tarefa }) {
  const [texto, setTexto] = useState(tarefa.descricao);

  return (
    <li>
      <p>{tarefa.descricao}</p>
    </li>
  );
}
