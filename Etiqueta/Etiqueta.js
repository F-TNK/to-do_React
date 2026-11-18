import { tarefasIniciais } from "./dados/tarefas.js";

export default function etiquetas() {
  const [tarefas, setTarefas] = useState(tarefasIniciais);

  return (
    <section>
      <span>{tarefas.prioridade}</span>
    </section>
  );
}
