import styles from "./ContactCta.module.css";

const periods = ["Manhã", "Tarde", "Sábado"];

export default function ContactCta() {
  return (
    <section
      id="contato"
      className={`section ${styles.contact}`}
      aria-labelledby="contato-titulo"
    >
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <h2 id="contato-titulo" className={styles.title}>
            Vamos começar pela conversa?
          </h2>

          <p className={styles.lead}>
            Conte um pouco sobre o que você procura. Respondemos com calma e sem
            compromisso.
          </p>

          {/* Na Etapa 6, este botão abrirá o aviso de WhatsApp demonstrativo */}
          <button type="button" className="button button-accent">
            Conversar pelo WhatsApp
          </button>
        </div>

        <form className={styles.form} aria-describedby="aviso-formulario">
          <p id="aviso-formulario" className={styles.notice}>
            Formulário demonstrativo: nenhum dado é enviado ou armazenado.
          </p>

          <div className={styles.field}>
            <label htmlFor="nome" className={styles.label}>
              Nome
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              autoComplete="name"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="contato-info" className={styles.label}>
              Telefone ou e-mail
            </label>
            <input
              id="contato-info"
              name="contato"
              type="text"
              required
              className={styles.input}
            />
          </div>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Melhor período</legend>
            <div className={styles.options}>
              {periods.map((period) => (
                <label key={period} className={styles.option}>
                  <input type="radio" name="periodo" value={period} />
                  {period}
                </label>
              ))}
            </div>
          </fieldset>

          <div className={styles.field}>
            <label htmlFor="mensagem" className={styles.label}>
              Mensagem (opcional)
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              className={styles.input}
            />
          </div>

          {/* type="button" por enquanto: na Etapa 6 vira envio simulado,
              com validação e mensagem, sem transmitir dados. */}
          <button
            type="button"
            className={`button button-primary ${styles.submit}`}
          >
            Solicitar avaliação
          </button>
        </form>
      </div>
    </section>
  );
}
