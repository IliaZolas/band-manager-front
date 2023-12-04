import Navbar from "./components/nav"
import Hero from "./components/hero"
import Footer from "./components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </main>
  )
}
