import {
Target,
Clock,
Layers,
Brain,
Scale,
Smartphone,
} from "lucide-react";

const benefits = [
{
icon: Target,
title: "Método Estratégico",
desc: "Estude exatamente o que tem maior potencial de gerar pontos na prova.",
},
{
icon: Clock,
title: "Plano de Estudos de 30 Dias",
desc: "Organização prática para quem trabalha, estuda ou possui pouco tempo disponível.",
},
{
icon: Layers,
title: "12 Módulos Organizados",
desc: "Conteúdo estruturado do início ao fim para facilitar seu aprendizado.",
},
{
icon: Brain,
title: "Flashcards Estratégicos",
desc: "Memorize os assuntos mais importantes através da revisão ativa.",
},
{
icon: Scale,
title: "Legislação Simplificada",
desc: "Direito Penal, Administrativo e conteúdos jurídicos explicados de forma objetiva.",
},
{
icon: Smartphone,
title: "Acesso em Qualquer Lugar",
desc: "Estude pelo celular, tablet, notebook ou computador quando quiser.",
},
];

export default function Benefits() {
return (
<section className="py-20 bg-white">

  <div className="max-w-6xl mx-auto px-4">

    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-900">
      O Que Você Vai Receber
    </h2>

    <p className="text-center text-gray-600 mb-14 max-w-3xl mx-auto">
      Um método completo para acelerar sua preparação e aumentar suas
      chances de aprovação no concurso de Soldado da PMERJ.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      {benefits.map((benefit, idx) => {
        const Icon = benefit.icon;

        return (
          <div
            key={idx}
            className="bg-white border border-slate-200 rounded-xl p-7 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-5">
              <Icon size={28} className="text-white" />
            </div>

            <h3 className="text-xl font-bold text-blue-900 mb-3">
              {benefit.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {benefit.desc}
            </p>
          </div>
        );
      })}

    </div>

    <div className="mt-16 bg-blue-900 text-white rounded-2xl p-8 text-center">
      <h3 className="text-3xl font-bold mb-4">
        Estude com Direção
      </h3>

      <p className="text-lg text-gray-200 max-w-3xl mx-auto">
        A maioria dos candidatos perde tempo estudando conteúdos sem
        estratégia. Este método foi criado para ajudar você a focar no que
        realmente importa para conquistar sua aprovação.
      </p>
    </div>

  </div>

</section>

);
}