import styles from "./Cabecalho.module.css";

export default function Cabecalho({ titulo, subtitulo }) {
  return (
    <header className={styles.cabecalho}>
      <h1 className={styles.titulo}>{titulo}</h1>
      <p>{subtitulo}</p>
    </header>
  );
}
