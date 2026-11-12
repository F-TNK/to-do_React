export default function tarefaItem({ tarefa }) {
  return (
    <li className={tarefa.concluida ? "tarefa concluida" : "tarefa"}>
      <input type="checkbox checked={tarefa.concluida" />
      <span>{tarefa.descricao}</span>
    </li>
  );
}
