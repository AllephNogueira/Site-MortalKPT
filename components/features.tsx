import { 
  Zap, 
  Trophy, 
  Shield, 
  Users, 
  Sword, 
  Gift,
  Map,
  Star
} from "lucide-react"

const serverFeatures = [
  {
    icon: Zap,
    title: "EXP Rates",
    value: "500x",
    description: "Experiência equilibrada para progressão rápida mas desafiadora",
  },
  {
    icon: Trophy,
    title: "Drop Rates",
    value: "50x",
    description: "Drops ajustados para manter a economia do servidor saudável",
  },
  {
    icon: Shield,
    title: "Anti-Hack",
    value: "Ativo",
    description: "Sistema avançado de proteção contra cheaters e bots",
  },
  {
    icon: Users,
    title: "Max Level",
    value: "200",
    description: "Progressão estendida com conteúdo endgame exclusivo",
  },
]

const highlights = [
  {
    icon: Sword,
    title: "PvP Competitivo",
    description: "Arenas 1v1, 5v5 e guerras de clã épicas com rankings e recompensas semanais.",
  },
  {
    icon: Map,
    title: "Mapas Exclusivos",
    description: "Áreas custom desenvolvidas com novos monstros, quests e desafios únicos.",
  },
  {
    icon: Gift,
    title: "Eventos Diários",
    description: "Boss Invasions, Hide & Seek, Quiz, CTF e muito mais todos os dias.",
  },
  {
    icon: Star,
    title: "Sistema VIP",
    description: "Benefícios exclusivos para apoiadores com itens cosméticos únicos.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Features do <span className="text-primary">Servidor</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Configurações cuidadosamente balanceadas para proporcionar 
            a melhor experiência de Priston Tale.
          </p>
        </div>

        {/* Server Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {serverFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="text-center p-6 rounded-xl bg-card border border-border"
              >
                <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="font-serif text-2xl md:text-3xl font-bold text-primary mb-1">
                  {feature.value}
                </div>
                <div className="text-sm font-medium text-foreground mb-1">
                  {feature.title}
                </div>
                <div className="text-xs text-muted-foreground">
                  {feature.description}
                </div>
              </div>
            )
          })}
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((highlight) => {
            const Icon = highlight.icon
            return (
              <div
                key={highlight.title}
                className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
