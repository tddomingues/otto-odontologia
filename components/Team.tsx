import Image from "next/image";
import styles from "./Team.module.css";

type TeamMember = {
  name: string;
  role: string;
  avatar: string;
};

const team: TeamMember[] = [
  {
    name: "Dra. Lívia Andrade",
    role: "Clínica geral e prevenção",
    avatar: "/avatars/livia.svg",
  },
  { name: "Dr. Caio Moreira", role: "Ortodontia", avatar: "/avatars/caio.svg" },
  {
    name: "Dra. Beatriz Sato",
    role: "Implantes e prótese",
    avatar: "/avatars/beatriz.svg",
  },
];

export default function Team() {
  return (
    <section className="section" aria-labelledby="equipe-titulo">
      <div className="container">
        <div className={styles.header}>
          <h2 id="equipe-titulo">Quem cuida de você</h2>
          <p className={styles.note}>
            Personagens fictícios: nomes, perfis e ilustrações criados para
            demonstração, sem relação com profissionais reais.
          </p>
        </div>

        <ul className={styles.list}>
          {team.map((member) => (
            <li key={member.name} className={styles.member}>
              {/* Ilustração decorativa: o nome já está no título abaixo */}
              <div className={styles.portrait}>
                <Image
                  src={member.avatar}
                  alt=""
                  width={240}
                  height={240}
                  className={styles.illustration}
                />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
