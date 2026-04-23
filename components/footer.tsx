import Link from "next/link"
import { Swords } from "lucide-react"

const footerLinks = {
  servidor: [
    { label: "Download", href: "#" },
    { label: "Criar Conta", href: "#" },
    { label: "Ranking", href: "#" },
    { label: "Status", href: "#" },
  ],
  comunidade: [
    { label: "Discord", href: "#" },
    { label: "Fórum", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Instagram", href: "#" },
  ],
  suporte: [
    { label: "FAQ", href: "#" },
    { label: "Regras", href: "#" },
    { label: "Contato", href: "#" },
    { label: "Denúncias", href: "#" },
  ],
  legal: [
    { label: "Termos de Uso", href: "#" },
    { label: "Privacidade", href: "#" },
    { label: "Cookies", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="py-12 md:py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Swords className="h-8 w-8 text-primary" />
              <span className="font-serif text-xl font-bold text-primary">KPT</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              MortalKombat Priston Tale - O servidor que marcou época está de volta.
            </p>
          </div>

          {/* Servidor */}
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Servidor</h4>
            <ul className="space-y-2">
              {footerLinks.servidor.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Comunidade */}
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Comunidade</h4>
            <ul className="space-y-2">
              {footerLinks.comunidade.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Suporte</h4>
            <ul className="space-y-2">
              {footerLinks.suporte.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 KPT - MortalKombat Priston Tale. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Priston Tale é uma marca registrada da Yedang Online. Este é um servidor privado não oficial.
          </p>
        </div>
      </div>
    </footer>
  )
}
