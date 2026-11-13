const periods = ["Manhã", "Tarde", "Sábado"];

export default function ContactCta() {
  return (
    <section id="contato" aria-labelledby="contato-titulo">
      <h2 id="contato-titulo">Vamos começar pela conversa?</h2>

      <p>
        Conte um pouco sobre o que você procura. Respondemos com calma e sem
        compromisso.
      </p>

      {/* Na Etapa 6, este botão abrirá o aviso de WhatsApp demonstrativo */}
      <button type="button">Conversar pelo WhatsApp</button>

      <form aria-describedby="aviso-formulario">
        <p id="aviso-formulario">
          Formulário demonstrativo: nenhum dado é enviado ou armazenado.
        </p>

        <div>
          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" type="text" autoComplete="name" required />
        </div>

        <div>
          <label htmlFor="contato-info">Telefone ou e-mail</label>
          <input id="contato-info" name="contato" type="text" required />
        </div>

        <fieldset>
          <legend>Melhor período</legend>
          {periods.map((period) => (
            <label key={period}>
              <input type="radio" name="periodo" value={period} />
              {period}
            </label>
          ))}
        </fieldset>

        <div>
          <label htmlFor="mensagem">Mensagem (opcional)</label>
          <textarea id="mensagem" name="mensagem" rows={4} />
        </div>

        {/* type="button" por enquanto: na Etapa 6 vira envio simulado,
            com validação e mensagem, sem transmitir dados. */}
        <button type="button">Solicitar avaliação</button>
      </form>
    </section>
  );
}
