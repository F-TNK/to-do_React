import styles from "./Etiqueta.module.css";

import { tarefasIniciais } from "./dados/tarefas.js";

const PRIORIDADES = {
  alta: "Alta",
  media: "Média",
  baixa: "Baixa",
};

export default function etiquetas(prioridade) {
  const [tarefas, setTarefas] = useState(tarefasIniciais);

  <span className={`${styles.etiqueta} ${styles[prioridade]}`}>
    PRIORIDADES{tarefas.prioridade}
  </span>;
}
