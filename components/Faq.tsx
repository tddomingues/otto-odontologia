type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "Preciso estar com dor para marcar?",
    answer:
      "Não. O check-up é justamente para cuidar antes que algo incomode.",
  },
  {
    question: "A primeira consulta já inclui tratamento?",
    answer:
      "Em geral, ela é dedicada à conversa e à avaliação. O tratamento começa depois que você conhece e aprova o plano.",
  },
  {
    question: "Quanto tempo dura um tratamento?",
    answer:
      "Depende de cada caso. Depois da avaliação, informamos uma estimativa.",
  },
  {
    question: "Vocês atendem crianças?",
    answer: "Sim, a partir dos 6 anos, sempre com um responsável.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Você recebe o orçamento por escrito, e as formas de pagamento são combinadas antes de começar.",
  },
];

export default function Faq() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-titulo">
      <h2 id="duvidas-titulo">Perguntas frequentes</h2>

      <div>
        {faqItems.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
