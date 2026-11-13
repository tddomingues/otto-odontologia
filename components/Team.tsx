type TeamMember = {
  name: string;
  role: string;
};

const team: TeamMember[] = [
  { name: "Dra. Lívia Andrade", role: "Clínica geral e prevenção" },
  { name: "Dr. Caio Moreira", role: "Ortodontia" },
  { name: "Dra. Beatriz Sato", role: "Implantes e prótese" },
];

export default function Team() {
  return (
    <section aria-labelledby="equipe-titulo">
      <h2 id="equipe-titulo">Quem cuida de você</h2>

      <p>
        Personagens fictícios: nomes e perfis criados para demonstração, sem
        relação com profissionais reais.
      </p>

      <ul>
        {team.map((member) => (
          <li key={member.name}>
            {/* Ilustração/avatar do personagem: entra na Etapa 4 */}
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
