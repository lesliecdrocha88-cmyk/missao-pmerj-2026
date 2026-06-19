import { ArrowRight, Shield } from "lucide-react";

export default function Hero() {
  const scrollToOffer = () => {
    document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500 text-amber-300 px-4 py-2 rounded-full">
          <Shield size={18} />
          <span className="text-sm font-semibold">Concurso PMERJ 2026</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-oswald font-bold text-center mb-6 leading-tight">
          Saia na Frente <br />
          <span className="text-amber-400">da Concorrência</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-200 text-center max-w-2xl mb-8">
          O método estratégico completo para você passar na PMERJ 2026. 12 módulos, simulados e flashcards. De R$ 97 por apenas <span className="text-amber-400 font-bold">R$ 9,90</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button
            onClick={scrollToOffer}
            className="btn-secondary flex items-center justify-center gap-2 text-lg"
          >
            Comprar Agora <ArrowRight size={20} />
          </button>
          <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-200">
            Saiba Mais
          </button>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-amber-400">12</div>
            <div className="text-sm text-gray-300">Módulos Completos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-400">60+</div>
            <div className="text-sm text-gray-300">Flashcards</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-400">25</div>
            <div className="text-sm text-gray-300">Questões Simulado</div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 text-white">
          <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
}
