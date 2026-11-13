import MapEmbed from "./MapEmbed";
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
          <MapEmbed>
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
            </svg>
          </MapEmbed>
          <figcaption className={styles.mapCaption}>
            Região central de Maringá. A localização da clínica é fictícia, por
            isso o mapa não tem marcador. Dados do mapa ©{" "}
            <a
              href="https://www.openstreetmap.org/copyright"
              target="_blank"
              rel="noopener noreferrer"
            >
              colaboradores do OpenStreetMap
            </a>
            .
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
