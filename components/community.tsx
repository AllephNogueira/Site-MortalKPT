import { Button } from "@/components/ui/button"
import { MessageCircle, Users, Youtube, Instagram } from "lucide-react"

const socialLinks = [
  {
    icon: MessageCircle,
    name: "Discord",
    description: "Entre no nosso servidor oficial",
    href: "#",
    members: "2.5k+ membros",
  },
  {
    icon: Users,
    name: "Fórum",
    description: "Discussões, guias e suporte",
    href: "#",
    members: "5k+ posts",
  },
  {
    icon: Youtube,
    name: "YouTube",
    description: "Vídeos, tutoriais e gameplays",
    href: "#",
    members: "10k+ inscritos",
  },
  {
    icon: Instagram,
    name: "Instagram",
    description: "Novidades e bastidores",
    href: "#",
    members: "3k+ seguidores",
  },
]

export function Community() {
  return (
    <section id="comunidade" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Junte-se à <span className="text-primary">Comunidade</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-pretty">
              O KPT sempre foi mais que um servidor - é uma comunidade de jogadores 
              apaixonados. Conecte-se conosco nas redes sociais, participe de discussões 
              no fórum e faça parte dessa família.
            </p>

            {/* Social Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{social.name}</div>
                      <div className="text-xs text-muted-foreground">{social.members}</div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* CTA Card */}
          <div className="relative">
            <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30">
              <div className="text-center">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Pronto para Retornar?
                </h3>
                <p className="text-muted-foreground mb-8">
                  Baixe o cliente, crie sua conta e embarque nessa aventura épica. 
                  A lenda do KPT está apenas começando novamente.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" className="w-full sm:w-auto">
                    Baixar Cliente
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Criar Conta
                  </Button>
                </div>

                {/* Launch Info */}
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="text-sm text-muted-foreground mb-2">
                    Data de Lançamento
                  </div>
                  <div className="font-serif text-xl font-bold text-primary">
                    Em Breve
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
