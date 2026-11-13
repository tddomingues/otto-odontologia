import styles from "./Team.module.css";

type TeamMember = {
  name: string;
  role: string;
};

const team: TeamMember[] = [
  { name: "Dra. Lívia Andrade", role: "Clínica geral e prevenção" },
  { name: "Dr. Caio Moreira", role: "Ortodontia" },
  { name: "Dra. Beatriz Sato", role: "Implantes e prótese" },
];

/* "Dra. Lívia Andrade" -> "LA": tira o título e pega a 1ª letra
   do primeiro e do último nome. */
function getInitials(name: string) {
  const parts = name.replace(/^Dra?\.\s*/, "").split(" ");
  return parts[0][0] + parts[parts.length - 1][0];
}

export default function Team() {
  return (
    <section className="section" aria-labelledby="equipe-titulo">
      <div className="container">
        <div className={styles.header}>
          <h2 id="equipe-titulo">Quem cuida de você</h2>
          <p className={styles.note}>
            Personagens fictícios: nomes e perfis criados para demonstração, sem
            relação com profissionais reais.
          </p>
        </div>

        <ul className={styles.list}>
          {team.map((member) => (
            <li key={member.name} className={styles.member}>
              <div className={styles.avatar} aria-hidden="true">
                {getInitials(member.name)}
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
