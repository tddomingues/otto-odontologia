import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-titulo">
      <div className="container">
        <div className={styles.content}>
          <p className={styles.eyebrow}>Odontologia em Maringá · PR</p>

          <h1 id="hero-titulo" className={styles.title}>
            Cuidado sem pressa.{" "}
            <span className={styles.titleAccent}>Sorriso em equilíbrio.</span>
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

          {/* Imagem de destaque: entra no passo de imagens desta etapa */}
        </div>
      </div>
    </section>
  );
}
