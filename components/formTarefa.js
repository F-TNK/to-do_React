"use client";

import { useState } from "react";

export default function formTarefa({ aoAdicionar }) {
  const [texto, setTexto] = useState("");
  const [erro, setErro] = useState("");

  const enviar = (event) => {
    event.preventDefault();
    if (texto.trim() === "") return;
    aoAdicionar(texto.trim());
    setTexto("");
    setErro("");
  };

  <form className="">
    <input value={texto} onChange={(event) => setTexto(event.target.value)} />
    {erro !== "" && <p className="erro">{erro}</p>}
    <button type="submit">Adicionar</button>
  </form>;
}
