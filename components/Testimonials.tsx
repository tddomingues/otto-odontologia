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
    <section aria-labelledby="depoimentos-titulo">
      <h2 id="depoimentos-titulo">O que dizem nossos pacientes</h2>

      <p>
        Cenário conceitual: os depoimentos e a nota abaixo são fictícios,
        criados para este projeto de portfólio.
      </p>

      <p>
        <strong>4,9 de 5</strong> · nota média fictícia
      </p>

      <ul>
        {testimonials.map((testimonial) => (
          <li key={testimonial.author}>
            <figure>
              <p>Depoimento fictício · exemplo de portfólio</p>
              <blockquote>
                <p>{testimonial.quote}</p>
              </blockquote>
              <figcaption>
                {testimonial.author}, {testimonial.authorNote}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}