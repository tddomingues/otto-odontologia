import styles from "./Testimonials.module.css";

type Testimonial = {
  quote: string;
  author: string;
  authorNote: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Eu estava havia anos sem ir ao dentista e tinha vergonha disso. Ninguém me julgou, e saí entendendo cada etapa.",
    author: "Mariana C.",
    authorNote: "personagem fictícia",
  },
  {
    quote:
      "Gostei de receber o orçamento por escrito e de poder pensar com calma antes de decidir.",
    author: "Rafael T.",
    authorNote: "personagem fictício",
  },
  {
    quote:
      "Levo minha mãe, que tem medo de dentista. A equipe explica tudo com muita paciência.",
    author: "Juliana M.",
    authorNote: "personagem fictícia",
  },
];

export default function Testimonials() {
  return (
    <section
      className={`section ${styles.testimonials}`}
      aria-labelledby="depoimentos-titulo"
    >
      <div className="container">
        <div className={styles.header}>
          <h2 id="depoimentos-titulo">O que dizem nossos pacientes</h2>

          <p className={styles.intro}>
            Cenário conceitual: os depoimentos e a nota abaixo são fictícios,
            criados para este projeto de portfólio.
          </p>

          <p className={styles.rating}>
            <strong className={styles.score}>4,9</strong>
            <span className={styles.stars} aria-hidden="true">
              ★★★★★
            </span>
            <span className={styles.ratingLabel}>
              de 5 · nota média fictícia
            </span>
          </p>
        </div>

        <ul className={styles.list}>
          {testimonials.map((testimonial) => (
            <li key={testimonial.author}>
              <figure className={styles.card}>
                <p className={styles.badge}>
                  Depoimento fictício · exemplo de portfólio
                </p>
                <blockquote className={styles.quote}>
                  <p>{testimonial.quote}</p>
                </blockquote>
                <figcaption className={styles.caption}>
                  <span className={styles.author}>{testimonial.author}</span>,{" "}
                  {testimonial.authorNote}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
