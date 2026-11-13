"use client";

import { useState, type ReactNode } from "react";
import styles from "./Location.module.css";

/* Região central de Maringá (limites oeste, sul, leste, norte).
   Sem marcador: a localização da clínica é fictícia. */
const MAP_URL =
  "https://www.openstreetmap.org/export/embed.html?bbox=-51.9650%2C-23.4400%2C-51.9100%2C-23.4050&layer=mapnik";

type Props = {
  /** Ilustração exibida antes de o mapa ser carregado */
  children: ReactNode;
};

/* "Fachada": o mapa real só é carregado quando a pessoa pede.
   Até lá, nenhum pedido é feito ao OpenStreetMap. */
export default function MapEmbed({ children }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <iframe
        className={styles.mapFrame}
        src={MAP_URL}
        title="Mapa da região central de Maringá (OpenStreetMap)"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    );
  }

  return (
    <div className={styles.mapFacade}>
      {children}
      <div className={styles.mapOverlay}>
        <button
          type="button"
          className="button button-primary"
          onClick={() => setIsLoaded(true)}
        >
          Ver mapa de Maringá
        </button>
        <p className={styles.mapHint}>
          Ao carregar, seu navegador se conecta ao OpenStreetMap.
        </p>
      </div>
    </div>
  );
}
