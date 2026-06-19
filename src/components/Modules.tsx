const modules = [
  { n: "01", title: "Entendendo o Concurso PMERJ", desc: "Edital, etapas, salário e perfil do cargo." },
  { n: "02", title: "Estratégia dos 30 Pontos", desc: "Como ser eficiente e bater o corte com segurança." },
  { n: "03", title: "Plano de Estudos de 30 Dias", desc: "Cronograma semana a semana para quem tem pouco tempo." },
  { n: "04", title: "Português Inteligente", desc: "Interpretação, gramática e os pontos que mais caem." },
  { n: "05", title: "Matemática Sem Sofrimento", desc: "Macetes e tipos clássicos de questão." },
  { n: "06", title: "Direitos Humanos Essenciais", desc: "Art. 5º, ECA, Maria da Penha e leis decisivas." },
  { n: "07", title: "Direito Administrativo e Legislação PMERJ", desc: "Princípios, poderes e normas da corporação." },
  { n: "08", title: "Direito Penal e Processual Penal", desc: "Crime, penas, prisões e procedimentos." },
  { n: "09", title: "Flashcards Estratégicos", desc: "60 flashcards de revisão rápida." },
  { n: "10", title: "Simulado Final", desc: "25 questões inéditas com gabarito comentado." },
  { n: "11", title: "Plano de Ataque Final", desc: "Checklist e cronograma de revisão." },
  { n: "12", title: "Mensagem Motivacional", desc: "O empurrão certo para não desistir." },
];

export default function Modules() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-4 text-blue-900">
          Os 12 Módulos Completos
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Tudo que você precisa do edital até o dia da prova
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((mod, idx) => (
            <div
              key={idx}
              className="flex gap-4 p-4 bg-white rounded-lg border border-slate-200 hover:border-amber-500 hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-900 text-amber-400 rounded-lg flex items-center justify-center font-bold text-lg">
                  {mod.n}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-blue-900 mb-1">{mod.title}</h3>
                <p className="text-sm text-gray-600">{mod.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
