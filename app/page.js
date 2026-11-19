import Cabecalho from "@/components/Cabecalho/Cabecalho";
import ListaDeTarefas from "@/components/Quadro/Quadro";

export default function home() {
  return (
    <>
      <Cabecalho titulo="Quadro de Tarefas" subtitulo="aula 23" />
      <main>
        <ListaDeTarefas />
      </main>
    </>
  );
}
