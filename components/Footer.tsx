import Link from "next/link";
import { navLinks } from "@/content/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <p className={styles.brand}>otto odontologia</p>
            <p className={styles.tagline}>
              Cuidado sem pressa. Sorriso em equilíbrio.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <p className={styles.notice}>
            <strong>Aviso:</strong> a Otto Odontologia é uma clínica fictícia.
            Equipe, endereço, números, avaliações e depoimentos foram criados
            para este projeto de portfólio e não representam pessoas ou
            estabelecimentos reais. As informações sobre tratamentos são gerais e
            não substituem a avaliação de um cirurgião-dentista.
          </p>
        </div>

        <div className={styles.bottom}>
          <p>
            <Link href="/privacidade">Política de privacidade (demonstrativa)</Link>
          </p>
          <p>
            <small>
              Fontes: Fraunces e Source Sans 3 (SIL Open Font License). Créditos
              de imagens: serão adicionados na Etapa 4.
            </small>
          </p>
          <p>
            <small>Projeto de portfólio desenvolvido por tgdomingues.</small>
          </p>
        </div>
      </div>
    </footer>
  );
}
