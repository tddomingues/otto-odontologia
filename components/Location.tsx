import styles from "./Location.module.css";

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
    <section
      id="localizacao"
      className={`section ${styles.location}`}
      aria-labelledby="localizacao-titulo"
    >
      <div className={`container ${styles.grid}`}>
        <div>
          <h2 id="localizacao-titulo" className={styles.title}>
            Onde estamos
          </h2>

          <address className={styles.address}>
            Rua dos Ipês Fictícia, 120
            <br />
            Maringá · PR
          </address>
          <p className={styles.addressNote}>
            <small>Endereço demonstrativo: a clínica não existe.</small>
          </p>

          <h3 className={styles.hoursTitle}>Horários</h3>
          <dl className={styles.hours}>
            {openingHours.map((item) => (
              <div key={item.days} className={styles.row}>
                <dt>{item.days}</dt>
                <dd>{item.hours}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className={styles.mapFigure}>
          <svg
            className={styles.map}
            viewBox="0 0 400 300"
            aria-hidden="true"
            focusable="false"
          >
            <rect className={styles.mapBg} width="400" height="300" rx="16" />
            <rect className={styles.mapBlock} x="250" y="30" width="120" height="80" rx="8" />
            <rect className={styles.mapBlock} x="30" y="200" width="90" height="70" rx="8" />
            <path className={styles.mapStreet} d="M0 95H400M0 215H400M130 0V300M300 0V300" />
            <path className={styles.mapAvenue} d="M0 170C120 140 260 140 400 180" />
            <path
              className={styles.mapPin}
              d="M205 90c-15 0-26 11-26 26 0 19 26 42 26 42s26-23 26-42c0-15-11-26-26-26z"
            />
            <circle className={styles.mapPinDot} cx="205" cy="116" r="8" />
          </svg>
          <figcaption className={styles.mapCaption}>
            Mapa ilustrativo, sem localização real.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
