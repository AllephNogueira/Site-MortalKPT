import Image from "next/image"

const classes = [
  {
    name: "Fighter",
    type: "Mortal",
    description: "Guerreiros corpo a corpo com alta defesa e poder de ataque devastador.",
    image: "/images/warrior.jpg",
    stats: { str: 90, vit: 85, agi: 60, int: 30 },
  },
  {
    name: "Mechanician",
    type: "Mortal",
    description: "Mestres em armas de longo alcance e armadilhas mortais.",
    image: "/images/archer.jpg",
    stats: { str: 70, vit: 65, agi: 85, int: 50 },
  },
  {
    name: "Pikeman",
    type: "Mortal",
    description: "Especialistas em lanças com alcance e precisão incomparáveis.",
    image: "/images/warrior.jpg",
    stats: { str: 80, vit: 75, agi: 70, int: 40 },
  },
  {
    name: "Archer",
    type: "Mortal",
    description: "Atiradores de elite que eliminam inimigos à distância.",
    image: "/images/archer.jpg",
    stats: { str: 60, vit: 55, agi: 95, int: 45 },
  },
  {
    name: "Atalanta",
    type: "Mortal",
    description: "Guerreiras ágeis com domínio em artes marciais e javelins.",
    image: "/images/archer.jpg",
    stats: { str: 65, vit: 60, agi: 90, int: 50 },
  },
  {
    name: "Knight",
    type: "Mortal",
    description: "Cavaleiros de armadura pesada, imbatíveis na linha de frente.",
    image: "/images/warrior.jpg",
    stats: { str: 95, vit: 90, agi: 50, int: 35 },
  },
  {
    name: "Magician",
    type: "Mortal",
    description: "Conjuradores de magia elemental com poder destrutivo massivo.",
    image: "/images/mage.jpg",
    stats: { str: 30, vit: 45, agi: 55, int: 95 },
  },
  {
    name: "Priestess",
    type: "Mortal",
    description: "Sacerdotisas com poder de cura e buffs essenciais para o grupo.",
    image: "/images/mage.jpg",
    stats: { str: 35, vit: 50, agi: 50, int: 90 },
  },
]

function StatBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground w-8 uppercase">{label}</span>
      <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

export function Classes() {
  return (
    <section id="classes" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Escolha sua <span className="text-primary">Classe</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            8 classes únicas para você dominar. Cada uma com habilidades, 
            estilos de jogo e progressão distintos.
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((classItem) => (
            <div
              key={classItem.name}
              className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={classItem.image}
                  alt={classItem.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 text-xs font-medium rounded bg-primary/20 text-primary border border-primary/30">
                    {classItem.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                  {classItem.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
                  {classItem.description}
                </p>

                {/* Stats */}
                <div className="space-y-2">
                  <StatBar label="STR" value={classItem.stats.str} />
                  <StatBar label="VIT" value={classItem.stats.vit} />
                  <StatBar label="AGI" value={classItem.stats.agi} />
                  <StatBar label="INT" value={classItem.stats.int} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
