import styles from "./DemoBanner.module.css";

export default function DemoBanner() {
  return (
    <aside className={styles.banner} aria-label="Aviso sobre o projeto">
      <p>
        Projeto conceitual de portfólio · Clínica, equipe e depoimentos
        fictícios
      </p>
    </aside>
  );
}