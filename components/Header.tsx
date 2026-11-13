import { navLinks } from "@/content/site";

export default function Header() {
  return (
    <header>
      <a href="#inicio">otto odontologia</a>

      <nav aria-label="Navegação principal">
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <a href="#contato">Agendar avaliação</a>
    </header>
  );
}