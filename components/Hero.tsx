import Image from "next/image";
import heroImage from "@/assets/images/hero-consultorio.jpg";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-titulo">
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Clínica odontológica em Maringá, PR</p>

          <h1 id="hero-titulo" className={styles.title}>
            <span className={styles.line}>Cuidado sem pressa.</span>{" "}
            <span className={`${styles.line} ${styles.lineEnd}`}>
              Sorriso em equilíbrio.
            </span>
          </h1>

          <p className={styles.lead}>
            Na Otto, cada consulta começa com uma conversa. Explicamos o que
            observamos, mostramos as opções e você decide o próximo passo com
            calma.
          </p>

          <div className={styles.actions}>
            {/* Na Etapa 6, este botão abrirá o aviso de WhatsApp demonstrativo */}
            <a href="#contato" className="button button-primary">
              Conversar pelo WhatsApp
            </a>
            <a href="#contato" className="button button-secondary">
              Solicitar avaliação
            </a>
          </div>

          <p className={styles.note}>Atendimento de segunda a sábado</p>
        </div>

        <div className={styles.media}>
          <div className={styles.arch}>
            <Image
              src={heroImage}
              alt="Consultório odontológico claro, com cadeira branca junto a uma janela"
              fill
              sizes="(min-width: 64rem) 28rem, 90vw"
              placeholder="blur"
              loading="eager"
              fetchPriority="high"
              className={styles.image}
            />
          </div>

          <div className={styles.floatCard}>
            <span className={styles.floatIcon} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6.5h16M4 12h10M4 17.5h7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <div>
              <p className={styles.floatLabel}>Primeira consulta</p>
              <p className={styles.floatText}>
                Conversa e avaliação antes de qualquer procedimento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
