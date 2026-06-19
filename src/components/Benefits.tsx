import { Target, Clock, Layers, Brain, Scale, Smartphone } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Método Prático",
    desc: "Foco no que mais cai e gera acerto rápido.",
  },
  {
    icon: Clock,
    title: "Plano de 30 Dias",
    desc: "Estude com foco mesmo tendo pouco tempo.",
  },
  {
    icon: Layers,
    title: "12 Módulos",
    desc: "Do edital ao dia da prova, tudo organizado.",
  },
  {
    icon: Brain,
    title: "Flashcards + Simulado",
    desc: "Revisão ativa com gabarito comentado.",
  },
  {
    icon: Scale,
    title: "Direito Descomplicado",
    desc: "Penal, Administrativo em linguagem direta.",
  },
  {
    icon: Smartphone,
    title: "Acesso Imediato",
    desc: "Estude no celular, tablet ou computador.",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-4 text-blue-900">
          Por Que Escolher Este E-book?
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Tudo que você precisa para sair na frente de 90% dos candidatos
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg border border-blue-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
