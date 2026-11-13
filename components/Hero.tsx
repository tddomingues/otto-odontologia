export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-titulo">
      <p>Odontologia em Maringá · PR</p>

      <h1 id="hero-titulo">Cuidado sem pressa. Sorriso em equilíbrio.</h1>

      <p>
        Na Otto, cada consulta começa com uma conversa. Explicamos o que
        observamos, mostramos as opções e você decide o próximo passo com calma.
      </p>

      <div>
        {/* Na Etapa 6, este botão abrirá o aviso de WhatsApp demonstrativo */}
        <a href="#contato">Conversar pelo WhatsApp</a>
        <a href="#contato">Solicitar avaliação</a>
      </div>

      <p>Atendimento de segunda a sábado</p>

      {/* Imagem de destaque: entra na Etapa 4 */}
    </section>
  );
}