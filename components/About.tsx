type Principle = {
  title: string;
  text: string;
};

const principles: Principle[] = [
  {
    title: "Prevenção primeiro",
    text: "Cuidar antes que algo incomode.",
  },
  {
    title: "Explicação antes do procedimento",
    text: "Você entende o que será feito e por quê.",
  },
  {
    title: "Tempo respeitado",
    text: "Consultas agendadas com intervalo, sem correria.",
  },
];

export default function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo">
      <h2 id="sobre-titulo">Uma clínica pensada para quem adiou o dentista.</h2>

      <p>
        Otto se lê igual de um lado e do outro. Gostamos dessa ideia de
        equilíbrio: entre técnica e escuta, entre prevenção e tratamento, entre
        o que é necessário e o que você deseja para o seu sorriso.
      </p>

      <ul>
        {principles.map((principle) => (
          <li key={principle.title}>
            <h3>{principle.title}</h3>
            <p>{principle.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}