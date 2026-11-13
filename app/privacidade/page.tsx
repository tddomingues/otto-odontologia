import type { Metadata } from "next";
import Link from "next/link";
import DemoBanner from "@/components/DemoBanner";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Política de privacidade (demonstrativa) | Otto Odontologia",
  description:
    "Política de privacidade demonstrativa da landing page conceitual da Otto Odontologia, clínica fictícia criada para portfólio.",
};

export default function PrivacyPage() {
  return (
    <>
      <DemoBanner />
      <main className={`section container ${styles.page}`}>
        <h1>Política de privacidade (demonstrativa)</h1>

        <p>
          Este site é um projeto de portfólio. A Otto Odontologia é uma clínica
          fictícia, e esta política descreve como esta versão demonstrativa
          trata as informações de quem a visita.
        </p>

        <h2>Dados pessoais</h2>
        <p>
          Esta versão não coleta, não envia e não armazena dados pessoais. O
          formulário de contato é apenas uma demonstração: o que for digitado
          nele permanece no seu navegador e é descartado ao sair da página.
        </p>

        <h2>Cookies e rastreamento</h2>
        <p>
          Não usamos cookies de rastreamento, ferramentas de análise de
          audiência nem anúncios. As fontes, as fotos e as ilustrações são
          servidas pelo próprio site, sem carregar arquivos de terceiros.
        </p>

        <h2>Mapa</h2>
        <p>
          O mapa da seção de localização só é carregado se você clicar em
          &ldquo;Ver mapa de Maringá&rdquo;. A partir desse clique, seu
          navegador se conecta aos servidores do OpenStreetMap, que recebem
          dados técnicos como o endereço IP, conforme a política de privacidade
          da OpenStreetMap Foundation. Sem o clique, nenhuma conexão é feita.
        </p>

        <h2>Hospedagem</h2>
        <p>
          Como qualquer site na internet, a plataforma de hospedagem pode
          registrar dados técnicos de acesso, como endereço IP e horário, para
          fins de segurança e funcionamento.
        </p>

        <h2>Uso em um site real</h2>
        <p>
          Se este projeto for adaptado para uma clínica real que colete dados,
          será necessária uma política própria, revisada por profissional
          qualificado e alinhada à LGPD, com finalidade, base legal, prazo de
          retenção e canal para o titular exercer seus direitos.
        </p>

        <p className={styles.back}>
          <Link href="/">Voltar para a página inicial</Link>
        </p>
      </main>
    </>
  );
}