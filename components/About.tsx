import Image from "next/image";
import aboutImage from "@/assets/images/sobre-escovas.jpg";
import styles from "./About.module.css";

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
    <section id="sobre" className="section" aria-labelledby="sobre-titulo">
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={styles.mark} aria-hidden="true">
            otto
          </p>
          <h2 id="sobre-titulo">
            Uma clínica pensada para quem adiou o dentista.
          </h2>

          <Image
            src={aboutImage}
            alt="Escovas de dente de bambu em um pote de vidro, ao lado de folhas de eucalipto"
            sizes="(min-width: 56rem) 26rem, 90vw"
            placeholder="blur"
            className={styles.image}
          />
        </div>

        <div>
          <p className={styles.lead}>
            Otto se lê igual de um lado e do outro. Gostamos dessa ideia de
            equilíbrio: entre técnica e escuta, entre prevenção e tratamento,
            entre o que é necessário e o que você deseja para o seu sorriso.
          </p>

          <ul className={styles.principles}>
            {principles.map((principle) => (
              <li key={principle.title} className={styles.principle}>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
