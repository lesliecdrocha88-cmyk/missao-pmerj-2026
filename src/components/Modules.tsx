const modules = [
{
n: "01",
title: "Entendendo o Concurso PMERJ",
desc: "Conheça todas as etapas, requisitos, salários e como funciona o processo seletivo.",
},
{
n: "02",
title: "Estratégia dos 30 Pontos",
desc: "Aprenda a estudar de forma inteligente para atingir a nota mínima com segurança.",
},
{
n: "03",
title: "Plano de Estudos de 30 Dias",
desc: "Cronograma completo para organizar sua preparação mesmo com pouco tempo disponível.",
},
{
n: "04",
title: "Português Inteligente",
desc: "Interpretação de texto, gramática e assuntos mais cobrados em provas anteriores.",
},
{
n: "05",
title: "Matemática Sem Sofrimento",
desc: "Métodos simplificados para resolver as questões mais frequentes da banca.",
},
{
n: "06",
title: "Direitos Humanos Essenciais",
desc: "Resumo prático dos principais temas exigidos no concurso.",
},
{
n: "07",
title: "Direito Administrativo e Legislação PMERJ",
desc: "Conteúdo explicado de forma simples e objetiva.",
},
{
n: "08",
title: "Direito Penal e Processual Penal",
desc: "Os conceitos fundamentais para garantir pontos importantes na prova.",
},
{
n: "09",
title: "Flashcards Estratégicos",
desc: "Mais de 60 flashcards para revisar rapidamente os assuntos mais importantes.",
},
{
n: "10",
title: "Simulado Comentado",
desc: "Questões cuidadosamente elaboradas para testar sua preparação.",
},
{
n: "11",
title: "Plano de Ataque Final",
desc: "O que fazer nos últimos dias antes da prova para chegar preparado.",
},
{
n: "12",
title: "Mentalidade de Aprovação",
desc: "Técnicas para manter foco, disciplina e constância durante toda a preparação.",
},
];

export default function Modules() {
return (
<section className="py-20 bg-gradient-to-b from-slate-50 to-white">

  <div className="max-w-6xl mx-auto px-4">

    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-900">
      O Que Você Vai Estudar
    </h2>

    <p className="text-center text-gray-600 mb-14 max-w-3xl mx-auto">
      Um conteúdo organizado passo a passo para acelerar sua preparação e
      aumentar suas chances de aprovação no concurso da PMERJ.
    </p>

    <div className="grid md:grid-cols-2 gap-6">

      {modules.map((mod, idx) => (
        <div
          key={idx}
          className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-amber-400 transition-all duration-300"
        >
          <div className="flex gap-4">

            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-blue-900 text-amber-400 rounded-xl flex items-center justify-center font-bold text-lg">
                {mod.n}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-blue-900 text-lg mb-2">
                {mod.title}
              </h3>

              <p className="text-gray-600">
                {mod.desc}
              </p>
            </div>

          </div>
        </div>
      ))}

    </div>

    <div className="mt-16 bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">

      <h3 className="text-2xl font-bold text-blue-900 mb-4">
        Bônus Inclusos
      </h3>

      <div className="grid md:grid-cols-3 gap-6">

        <div>
          <div className="text-3xl font-bold text-amber-500">60+</div>
          <p className="text-gray-700">Flashcards Estratégicos</p>
        </div>

        <div>
          <div className="text-3xl font-bold text-amber-500">25</div>
          <p className="text-gray-700">Questões Comentadas</p>
        </div>

        <div>
          <div className="text-3xl font-bold text-amber-500">30</div>
          <p className="text-gray-700">Dias de Planejamento</p>
        </div>

      </div>

    </div>

  </div>

</section>

);
}