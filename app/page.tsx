import { Hero } from "@/components/Home/Hero";
import { Services } from "@/components/Home/Services";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Services />
    </main>
  );
}
