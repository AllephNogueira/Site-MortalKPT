import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, Users, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Priston Tale Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">O Retorno da Lenda</span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
          <span className="text-primary">MortalKombat</span>
          <br />
          Priston Tale
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
          O lendário servidor <span className="text-primary font-semibold">KPT</span> está de volta! 
          Reviva a nostalgia, reencontre velhos amigos e escreva novas histórias neste mundo épico.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="w-full sm:w-auto gap-2 text-base">
            <Download className="h-5 w-5" />
            Baixar Cliente
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 text-base">
            <Users className="h-5 w-5" />
            Criar Conta
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "500+", label: "Jogadores Online" },
            { value: "10+", label: "Anos de História" },
            { value: "24/7", label: "Suporte Ativo" },
            { value: "99.9%", label: "Uptime" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary font-serif">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
