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
    <section aria-labelledby="diferenciais-titulo">
      <h2 id="diferenciais-titulo">Detalhes que fazem diferença</h2>

      <ul>
        {highlights.map((highlight) => (
          <li key={highlight.title}>
            <h3>{highlight.title}</h3>
            <p>{highlight.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}