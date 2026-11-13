import styles from "./Services.module.css";

type Service = {
  title: string;
  description: string;
};

const services: Service[] = [
  {
    title: "Check-up e prevenção",
    description:
      "Avaliação completa, orientações de higiene e acompanhamento periódico.",
  },
  {
    title: "Limpeza profissional",
    description:
      "Remoção de placa e tártaro que a escovação do dia a dia não alcança.",
  },
  {
    title: "Restaurações",
    description:
      "Tratamento de cáries e pequenas fraturas com materiais na cor do dente.",
  },
  {
    title: "Clareamento",
    description:
      "Indicado após avaliação e feito com acompanhamento profissional. O resultado varia de pessoa para pessoa.",
  },
  {
    title: "Ortodontia",
    description:
      "Aparelhos fixos ou alinhadores, conforme a avaliação de cada caso.",
  },
  {
    title: "Implantes e próteses",
    description:
      "Opções para repor dentes perdidos, planejadas a partir de exames e da sua saúde geral.",
  },
];

export default function Services() {
  return (
    <section
      id="tratamentos"
      className={`section ${styles.services}`}
      aria-labelledby="tratamentos-titulo"
    >
      <div className="container">
        <h2 id="tratamentos-titulo" className={styles.title}>
          O que fazemos
        </h2>

        <ul className={styles.list}>
          {services.map((service) => (
            <li key={service.title} className={styles.item}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>

        <p className={styles.disclaimer}>
          <small>
            As informações acima são gerais. A indicação de qualquer tratamento
            depende de avaliação clínica individual.
          </small>
        </p>
      </div>
    </section>
  );
}
