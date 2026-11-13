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
    <section id="como-funciona" aria-labelledby="como-funciona-titulo">
      <h2 id="como-funciona-titulo">Sua primeira consulta, passo a passo</h2>

      <ol>
        {steps.map((step) => (
          <li key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}