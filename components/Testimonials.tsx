import TestimonialCarousel, { type Testimonial } from "./TestimonialCarousel";
import styles from "./Testimonials.module.css";

const testimonials: Testimonial[] = [
  {
    quote:
      "Eu estava havia anos sem ir ao dentista e tinha vergonha disso. Ninguém me julgou, e saí entendendo cada etapa.",
    author: "Mariana C.",
    authorNote: "personagem fictícia",
    avatar: "/avatars/mariana.svg",
  },
  {
    quote:
      "Gostei de receber o orçamento por escrito e de poder pensar com calma antes de decidir.",
    author: "Rafael T.",
    authorNote: "personagem fictício",
    avatar: "/avatars/rafael.svg",
  },
  {
    quote:
      "Levo minha mãe, que tem medo de dentista. A equipe explica tudo com muita paciência.",
    author: "Juliana M.",
    authorNote: "personagem fictícia",
    avatar: "/avatars/juliana.svg",
  },
  {
    quote:
      "Faço a manutenção do aparelho aqui. Os horários no fim do dia encaixam bem na minha rotina.",
    author: "Paulo R.",
    authorNote: "personagem fictício",
    avatar: "/avatars/paulo.svg",
  },
  {
    quote:
      "A recepção é tranquila e fui atendida no horário marcado. Parece um detalhe, mas faz diferença.",
    author: "Camila S.",
    authorNote: "personagem fictícia",
    avatar: "/avatars/camila.svg",
  },
  {
    quote:
      "Sempre fiquei ansiosa no dentista. Aqui me explicaram cada passo antes de começar, e isso me deixou mais à vontade.",
    author: "Sônia L.",
    authorNote: "personagem fictícia",
    avatar: "/avatars/sonia.svg",
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

          <p className={styles.rating}>
            <strong className={styles.score}>4,9</strong>
            <span className={styles.stars} aria-hidden="true">
              ★★★★★
            </span>
            <span className={styles.ratingLabel}>
              de 5, nota média fictícia
            </span>
          </p>
        </div>

        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
