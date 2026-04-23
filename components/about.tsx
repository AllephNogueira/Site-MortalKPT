import { Shield, Flame, Clock, Heart } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Nostalgia Pura",
    description: "Reviva os melhores momentos do Priston Tale original com o servidor que marcou época.",
  },
  {
    icon: Shield,
    title: "Gameplay Balanceado",
    description: "Sistema de PvP e PvE cuidadosamente equilibrado para uma experiência justa e divertida.",
  },
  {
    icon: Flame,
    title: "Eventos Épicos",
    description: "Guerras de clã, boss raids, eventos sazonais e muito mais para manter a adrenalina.",
  },
  {
    icon: Heart,
    title: "Comunidade Ativa",
    description: "Uma comunidade apaixonada e acolhedora, pronta para receber novos e antigos jogadores.",
  },
]

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Por que <span className="text-primary">KPT</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            O MortalKombat Priston Tale não é apenas um servidor - é uma família. 
            Depois de anos, estamos de volta para reviver a magia que nos uniu.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Story Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Nossa História
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                O <span className="text-primary font-semibold">MortalKombat Priston Tale</span> nasceu 
                da paixão de jogadores que queriam criar algo especial. Durante anos, fomos mais 
                do que um servidor - éramos uma comunidade unida.
              </p>
              <p>
                Agora, após um período de silêncio, estamos voltando com força total. 
                Mesma essência, mesma dedicação, mas com melhorias que vão tornar 
                sua experiência ainda mais épica.
              </p>
              <p>
                Se você é veterano, seja bem-vindo de volta ao lar. Se é novato, 
                prepare-se para conhecer o verdadeiro Priston Tale.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border flex items-center justify-center">
              <div className="text-center p-8">
                <div className="font-serif text-6xl md:text-8xl font-bold text-primary mb-2">
                  KPT
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest">
                  Since 2010
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
