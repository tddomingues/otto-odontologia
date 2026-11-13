import styles from "./HowItWorks.module.css";

type Step = {
  title: string;
  text: string;
};

const steps: Step[] = [
  {
    title: "Você entra em contato",
    text: "Pelo WhatsApp ou pelo formulário, combinamos o melhor horário.",
  },
  {
    title: "Conversa inicial",
    text: "Ouvimos seu histórico, suas dúvidas e o que te incomoda.",
  },
  {
    title: "Avaliação",
    text: "Exame clínico e, se necessário, pedido de exames de imagem.",
  },
  {
    title: "Plano explicado",
    text: "Opções, prazos estimados e valores por escrito, para você decidir sem pressa.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className={`section ${styles.how}`}
      aria-labelledby="como-funciona-titulo"
    >
      <div className="container">
        <h2 id="como-funciona-titulo" className={styles.title}>
          Sua primeira consulta, passo a passo
        </h2>

        <ol className={styles.steps}>
          {steps.map((step) => (
            <li key={step.title} className={styles.step}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
