/* =====================================================================
   PÁGINA DE VENDAS — MÉTODO ESTRATÉGICO DE APROVAÇÃO PMERJ 2026
   Estilo: "Linha de Frente Tática" (Tactical Field Manual)
   - Azul-marinho profundo (#0a1f3c) + dourado tático (#d4a017)
   - Tipografia: Oswald (display, uppercase) + Inter (corpo)
   - Sistema de motivos recorrentes: listras táticas, selo "12 MÓDULOS",
     rótulos de campo, hierarquia numerada estilo "manual de briefing"
   - CTAs dourados sempre com texto navy para contraste máximo
   ===================================================================== */
import { ASSETS, BENEFITS, MODULES, PRICE, CHECKOUT_URL, SUPPORT_EMAIL } from "@/lib/data";
import StickyCTA from "@/components/StickyCTA";
import Countdown from "@/components/Countdown";
import FaqSection from "@/components/FaqSection";
import { StripeDivider, ModuleSeal, FieldLabel } from "@/components/Tactical";
import {
  Target, Clock, Layers, Brain, Scale, Smartphone,
  ShieldCheck, CheckCircle2, Star, ArrowRight, Lock, Zap, Award,
} from "lucide-react";

const ICONS: Record<string, any> = { Target, Clock, Layers, Brain, Scale, Smartphone };

function CtaButton({ className = "", label }: { className?: string; label: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-display font-bold uppercase tracking-wider rounded-xl transition-all duration-150 ease-out active:scale-[0.97] shadow-xl shadow-gold-500/20 ${className}`}
    >
      {label}
      <ArrowRight className="w-5 h-5" />
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-navy-900 font-body overflow-x-hidden">
      {/* ============ HEADER ============ */}
      <header className="absolute top-0 inset-x-0 z-30">
        <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img src={ASSETS.logo} alt="Insígnia Método PMERJ" className="w-11 h-11 sm:w-12 sm:h-12 drop-shadow" />
            </div>
            <div className="leading-tight border-l border-gold-500/40 pl-3">
              <span className="block font-display font-bold uppercase tracking-wider text-white text-sm sm:text-base">
                Método PMERJ
              </span>
              <span className="block text-gold-400 text-[10px] sm:text-xs uppercase tracking-[0.25em]">
                Linha de Frente · 2026
              </span>
            </div>
          </div>
          <CtaButton label={`R$ ${PRICE.current}`} className="text-xs sm:text-sm px-4 sm:px-6 py-2.5" />
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16">
        <div className="absolute inset-0">
          <img src={ASSETS.hero} alt="Policial Militar do Rio de Janeiro observando o horizonte" className="w-full h-full object-cover object-right" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
          <div className="max-w-2xl animate-fade-up">
            <div className="inline-flex items-center gap-3 bg-white/95 border border-gold-500/40 rounded-md pl-2 pr-4 py-1.5 mb-6 shadow-lg">
              <img src={ASSETS.brasao} alt="Brasão da Polícia Militar do Estado do Rio de Janeiro" className="h-8 w-auto" />
              <span className="text-navy-900 text-xs sm:text-sm font-bold uppercase tracking-wider">
                Concurso Soldado PMERJ 2026
              </span>
            </div>

            <h1 className="font-display font-bold uppercase text-white leading-[0.95] text-4xl sm:text-6xl lg:text-7xl">
              Estude com <span className="text-gold-400">método</span> e saia na frente dos seus concorrentes
            </h1>

            <p className="mt-6 text-slate-200 text-lg sm:text-xl leading-relaxed max-w-xl">
              Enquanto eles estudam no escuro, você estuda com estratégia. O guia direto que organiza
              <strong className="text-white"> tudo o que mais cai</strong> na prova da PMERJ — do edital ao dia da prova.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <CtaButton label={`Comprar Agora — R$ ${PRICE.current}`} className="text-base sm:text-lg px-8 py-4 animate-gold-pulse" />
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <Lock className="w-4 h-4 text-gold-400" />
                Acesso imediato e digital
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {["12 Módulos completos", "60 Flashcards", "Simulado comentado"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-slate-200 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" /> {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Selo recorrente no canto */}
        <div className="hidden lg:block absolute bottom-12 right-8 z-10 animate-fade-up">
          <ModuleSeal className="w-24 h-24" />
        </div>
      </section>

      <StripeDivider />

      {/* ============ FAIXA DE DOR / IDENTIFICAÇÃO ============ */}
      <section className="relative bg-navy-900 py-16 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(135deg, #d4a017 0, #d4a017 3px, transparent 3px, transparent 18px)" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <FieldLabel dark>Diagnóstico de Campo</FieldLabel>
          <h2 className="font-display uppercase text-2xl sm:text-3xl font-bold text-white leading-tight">
            Você não precisa ser <span className="text-gold-400">perfeito</span>.<br className="hidden sm:block" /> Precisa ser <span className="text-gold-400">estratégico</span>.
          </h2>
          <p className="mt-5 text-slate-300 text-lg leading-relaxed">
            A maioria dos candidatos se perde estudando muita coisa sem direção, deixa a legislação para o fim
            e subestima a redação. O resultado? Cansaço, ansiedade e reprovação. O <strong className="text-white">Método
            Estratégico de Aprovação</strong> resolve isso: foco no que rende ponto, revisão inteligente e um plano
            que cabe na sua rotina.
          </p>
        </div>
      </section>

      <StripeDivider flip />

      {/* ============ BENEFÍCIOS — estilo manual de campo numerado ============ */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <FieldLabel>Por que funciona</FieldLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-navy-900">
              Um método prático, do edital à aprovação
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-900/10 border border-navy-900/10 rounded-2xl overflow-hidden">
            {BENEFITS.map((b, i) => {
              const Icon = ICONS[b.icon];
              return (
                <div key={b.title} className="group relative bg-white p-7 hover:bg-navy-900 transition-colors duration-200">
                  <span className="absolute top-5 right-6 font-display font-bold text-3xl text-navy-900/10 group-hover:text-gold-500/30 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-12 h-12 rounded-lg bg-navy-900 border border-gold-500/30 flex items-center justify-center mb-5 group-hover:bg-gold-500 transition-colors duration-200">
                    <Icon className="w-6 h-6 text-gold-400 group-hover:text-navy-950 transition-colors duration-200" />
                  </div>
                  <h3 className="font-display uppercase font-semibold text-lg text-navy-900 group-hover:text-white transition-colors">{b.title}</h3>
                  <p className="mt-2 text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <StripeDivider />

      {/* ============ MOCKUP + O QUE VEM DENTRO ============ */}
      <section className="relative bg-navy-950 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #d4a017 0, #d4a017 2px, transparent 2px, transparent 24px)" }} />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center">
            <img src={ASSETS.mockup} alt="E-book PMERJ 2026 em tablet e capa" className="w-full max-w-md drop-shadow-2xl" />
            <div className="absolute -top-2 -right-2 sm:top-4 sm:right-4">
              <ModuleSeal className="w-20 h-20" />
            </div>
          </div>
          <div>
            <FieldLabel dark>O que você recebe</FieldLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white leading-tight">
              12 módulos organizados na ordem certa
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Cada módulo foi pensado para te levar passo a passo: entender o concurso, montar a estratégia,
              dominar as matérias e chegar afiado no dia da prova.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {MODULES.map((m) => (
                <div key={m.n} className="flex gap-3 items-start bg-white/5 border-l-2 border-gold-500/50 border-y border-r border-white/10 rounded-r-lg p-4 hover:bg-white/10 hover:border-l-gold-400 transition-all">
                  <span className="font-display font-bold text-gold-400 text-lg leading-none shrink-0">{m.n}</span>
                  <div>
                    <h3 className="text-white font-semibold text-sm leading-snug">{m.title}</h3>
                    <p className="text-slate-400 text-xs mt-1 leading-snug">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StripeDivider flip />

      {/* ============ OFERTA / PREÇO ============ */}
      <section id="oferta" className="bg-slate-50 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <FieldLabel>Ordem de missão</FieldLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-navy-900">Garanta seu acesso</h2>
          </div>
          <div className="relative bg-navy-900 rounded-3xl overflow-hidden shadow-2xl border border-navy-700">
            <div className="bg-gold-500 text-navy-950 text-center py-3 font-display font-bold uppercase tracking-widest text-sm">
              Oferta por tempo limitado
            </div>
            <div className="p-8 sm:p-12 text-center relative">
              <div className="absolute top-6 right-6 hidden sm:block">
                <ModuleSeal className="w-20 h-20" />
              </div>
              <div className="flex flex-col items-center mb-4">
                <div className="bg-white rounded-lg p-2 mb-4 inline-flex">
                  <img src={ASSETS.brasao} alt="Brasão oficial da PMERJ" className="h-14 w-auto" />
                </div>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />)}
                </div>
              </div>
              <h2 className="font-display uppercase text-2xl sm:text-3xl font-bold text-white">
                Método Estratégico de Aprovação
              </h2>
              <p className="text-slate-300 mt-2">E-book completo + Flashcards + Simulado comentado</p>

              <div className="my-8">
                <p className="text-slate-400 line-through text-lg">De R$ {PRICE.original}</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <span className="text-gold-400 font-display text-xl pt-3">R$</span>
                  <span className="text-gold-400 font-display font-bold text-7xl leading-none">{PRICE.current.split(",")[0]}</span>
                  <span className="text-gold-400 font-display text-3xl pt-2">,{PRICE.current.split(",")[1]}</span>
                </div>
                <p className="text-slate-300 mt-2 text-sm">{PRICE.installment}</p>
              </div>

              <div className="mb-6">
                <p className="text-slate-300 text-sm mb-3 uppercase tracking-wider font-display">A oferta termina em:</p>
                <Countdown />
              </div>

              <CtaButton label="Quero garantir meu acesso" className="w-full text-lg py-4 animate-gold-pulse" />

              <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-slate-300 text-sm">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-gold-400" /> Compra segura</span>
                <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-gold-400" /> Acesso imediato</span>
                <span className="flex items-center gap-1.5"><Smartphone className="w-4 h-4 text-gold-400" /> Estude no celular</span>
              </div>
            </div>
          </div>
          <p className="text-center text-slate-500 text-sm mt-6 flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" /> Pagamento processado em ambiente seguro pela plataforma.
          </p>
        </div>
      </section>

      <StripeDivider />

      {/* ============ FRASE DE AUTORIDADE — briefing ============ */}
      <section className="relative bg-navy-950 py-20 px-4 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-1.5 bg-gold-500" />
        <div className="absolute inset-y-0 right-0 w-1.5 bg-gold-500" />
        <div className="relative max-w-3xl mx-auto text-center">
          <Award className="w-12 h-12 text-gold-400 mx-auto mb-6" />
          <blockquote className="font-display uppercase text-2xl sm:text-3xl font-bold text-white leading-tight">
            "A sua aprovação na PMERJ não começa no dia da prova. Começa no dia em que você decide levar o objetivo a sério."
          </blockquote>
          <p className="mt-6 text-gold-400 font-display uppercase tracking-[0.3em] text-sm">Missão dada é missão cumprida</p>
        </div>
      </section>

      <StripeDivider flip />

      {/* ============ FAQ ============ */}
      <FaqSection />

      <StripeDivider />

      {/* ============ CTA FINAL ============ */}
      <section className="relative bg-navy-900 py-20 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(135deg, #d4a017 0, #d4a017 3px, transparent 3px, transparent 18px)" }} />
        <div className="relative max-w-2xl mx-auto text-center">
          <ModuleSeal className="w-20 h-20 mx-auto mb-6" />
          <h2 className="font-display uppercase text-3xl sm:text-4xl font-bold text-white leading-tight">
            Sua farda começa com uma <span className="text-gold-400">decisão</span>
          </h2>
          <p className="mt-4 text-slate-300 text-lg">
            Por menos do que um lanche, você tem em mãos o método que organiza seus estudos e te coloca à frente.
          </p>
          <div className="mt-8">
            <CtaButton label={`Comprar Agora — R$ ${PRICE.current}`} className="text-lg px-10 py-4 animate-gold-pulse" />
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-navy-950 py-10 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={ASSETS.logo} alt="Insígnia" className="w-9 h-9" />
            <span className="font-display uppercase tracking-wider text-white text-sm">Método PMERJ 2026</span>
          </div>
          <p className="text-slate-400 text-sm text-center">
            Contato: <a href={`mailto:${SUPPORT_EMAIL}`} className="text-gold-400 hover:underline">{SUPPORT_EMAIL}</a>
          </p>
        </div>
        <p className="max-w-6xl mx-auto text-slate-600 text-xs mt-6 leading-relaxed text-center sm:text-left">
          Este é um material de estudo independente e não possui vínculo oficial com a Polícia Militar do Estado do Rio de Janeiro (PMERJ)
          ou com a banca organizadora do concurso. O conteúdo tem caráter educativo e de apoio à preparação do candidato.
        </p>
      </footer>

      <StickyCTA />
    </div>
  );
}
