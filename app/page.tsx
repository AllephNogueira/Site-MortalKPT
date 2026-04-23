import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Classes } from "@/components/classes"
import { Features } from "@/components/features"
import { Community } from "@/components/community"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Classes />
        <Features />
        <Community />
      </main>
      <Footer />
    </>
  )
}
