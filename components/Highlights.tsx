import styles from "./Highlights.module.css";

type Highlight = {
  title: string;
  text: string;
};

const highlights: Highlight[] = [
  {
    title: "Horário estendido",
    text: "Até as 19h durante a semana e aos sábados pela manhã.",
  },
  {
    title: "Orçamento por escrito",
    text: "Valores claros antes de começar, sem surpresas.",
  },
  {
    title: "Acesso facilitado",
    text: "Clínica no térreo, com acesso para cadeira de rodas.",
  },
  {
    title: "Lembrete de retorno",
    text: "Avisamos quando chegar a hora do próximo check-up.",
  },
];

export default function Highlights() {
  return (
    <section className="section" aria-labelledby="diferenciais-titulo">
      <div className="container">
        <h2 id="diferenciais-titulo" className={styles.title}>
          Detalhes que fazem diferença
        </h2>

        <ul className={styles.list}>
          {highlights.map((highlight) => (
            <li key={highlight.title} className={styles.item}>
              {/* Ícone decorativo: escondido do leitor de tela */}
              <span className={styles.icon} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12.5l4.5 4.5L19 7.5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className={styles.text}>
                <h3>{highlight.title}</h3>
                <p>{highlight.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
