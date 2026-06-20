import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
{
q: "Como recebo o material após a compra?",
a: "O acesso é totalmente digital. Após a confirmação do pagamento, você recebe o material imediatamente por e-mail e também pela área do aluno da Hotmart.",
},
{
q: "O material serve para quem está começando agora?",
a: "Sim. O conteúdo foi desenvolvido tanto para iniciantes quanto para candidatos que já estudaram anteriormente e desejam organizar melhor sua preparação.",
},
{
q: "Posso acessar pelo celular?",
a: "Sim. Você pode acessar pelo celular, tablet, notebook ou computador. O material foi pensado para facilitar seus estudos em qualquer lugar.",
},
{
q: "O conteúdo foi criado para o concurso PMERJ?",
a: "Sim. O método foi estruturado considerando o perfil do concurso de Soldado da PMERJ e os conteúdos mais importantes para a preparação.",
},
{
q: "Recebo os flashcards junto com o material?",
a: "Sim. Os flashcards fazem parte do conteúdo e foram desenvolvidos para acelerar a memorização dos assuntos mais cobrados.",
},
{
q: "O pagamento é seguro?",
a: "Sim. Todo o processamento é realizado pela Hotmart, uma das maiores plataformas de produtos digitais da América Latina.",
},
{
q: "Existe prazo para acessar o material?",
a: "Após a compra você terá acesso imediato ao conteúdo conforme as condições disponibilizadas na plataforma de entrega.",
},
{
q: "Por que o valor está tão baixo?",
a: "Esta é uma oferta promocional de lançamento criada para ajudar mais candidatos a iniciarem sua preparação sem precisar investir valores elevados.",
},
];

export default function FAQ() {
const [openIdx, setOpenIdx] = useState<number | null>(0);

return (
<section className="py-20 bg-slate-50">
<div className="max-w-4xl mx-auto px-4">

    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-900">
      Perguntas Frequentes
    </h2>

    <p className="text-center text-gray-600 mb-12">
      Tire suas dúvidas antes de garantir seu acesso.
    </p>

    <div className="space-y-4">

      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm"
        >
          <button
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            className="w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors"
          >
            <h3 className="text-left font-bold text-blue-900">
              {faq.q}
            </h3>

            <ChevronDown
              size={22}
              className={`text-amber-500 transition-transform ${
                openIdx === idx ? "rotate-180" : ""
              }`}
            />
          </button>

          {openIdx === idx && (
            <div className="px-5 pb-5 border-t border-slate-200 text-gray-700 leading-relaxed">
              {faq.a}
            </div>
          )}
        </div>
      ))}

    </div>

  </div>
</section>

);
}