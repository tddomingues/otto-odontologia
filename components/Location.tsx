type OpeningHours = {
  days: string;
  hours: string;
};

const openingHours: OpeningHours[] = [
  { days: "Segunda a sexta", hours: "8h às 19h" },
  { days: "Sábado", hours: "8h às 12h" },
  { days: "Domingo", hours: "Fechado" },
];

export default function Location() {
  return (
    <section id="localizacao" aria-labelledby="localizacao-titulo">
      <h2 id="localizacao-titulo">Onde estamos</h2>

      <address>
        Rua dos Ipês Fictícia, 120
        <br />
        Maringá · PR
      </address>
      <p>
        <small>Endereço demonstrativo: a clínica não existe.</small>
      </p>

      <h3>Horários</h3>
      <dl>
        {openingHours.map((item) => (
          <div key={item.days}>
            <dt>{item.days}</dt>
            <dd>{item.hours}</dd>
          </div>
        ))}
      </dl>

      {/* Mapa ilustrado (sem Google Maps): entra na Etapa 4 */}
    </section>
  );
}
