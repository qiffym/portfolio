import Hero from '@/components/section/Hero';
import About from '@/components/section/About';
import Portfolio from '@/components/section/Portfolio';
import TaT from '@/components/section/TaT';

export default function Home() {
  return (
    <main className="pt-24">
      <Hero />
      <About />
      <Portfolio />
      <TaT />
    </main>
  );
}
