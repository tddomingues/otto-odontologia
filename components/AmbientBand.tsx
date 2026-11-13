import Image from "next/image";
import bandImage from "@/assets/images/faixa-recepcao.jpg";
import styles from "./AmbientBand.module.css";

/* Faixa de respiro visual entre seções. A foto é decorativa
   (alt="") porque não traz informação nova para quem não a vê. */
export default function AmbientBand() {
  return (
    <div className={styles.band}>
      <Image
        src={bandImage}
        alt=""
        fill
        sizes="100vw"
        placeholder="blur"
        className={styles.image}
      />
    </div>
  );
}
