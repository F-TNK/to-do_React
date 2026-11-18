import Cabecalho from "@/components/Cabecalho/Cabecalho";
import ListaDeTarefas from "@/components/ListaDeTarefas";

export default function home() {
  return (
    <>
      <Cabecalho titulo="To Do list" subtitulo="aula 23" />
      <main>
        <ListaDeTarefas />
      </main>
    </>
  );
}
