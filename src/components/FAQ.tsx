import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
{
q: "Como recebo o material após a compra?",
a: "Após a confirmação do pagamento, o acesso é liberado automaticamente. Você recebe o material por e-mail e também poderá acessá-lo diretamente pela plataforma Hotmart.",
},
{
q: "O material serve para quem está começando do zero?",
a: "Sim. O conteúdo foi desenvolvido para iniciantes e também para candidatos que desejam organizar melhor seus estudos e revisar os principais assuntos da prova.",
},
{
q: "Posso estudar pelo celular?",
a: "Sim. O material pode ser acessado pelo celular, tablet, notebook ou computador, permitindo que você estude onde e quando quiser.",
},
{
q: "O conteúdo é focado no concurso da PMERJ?",
a: "Sim. Todo o material foi estruturado considerando o perfil do concurso de Soldado da PMERJ e os conteúdos mais importantes para sua preparação.",
},
{
q: "Os flashcards já estão inclusos?",
a: "Sim. Os flashcards estratégicos fazem parte do material e ajudam na revisão rápida e na memorização dos assuntos mais cobrados.",
},
{
q: "O pagamento é seguro?",
a: "Sim. O pagamento é processado pela Hotmart, uma das maiores plataformas de produtos digitais da América Latina, com ambiente protegido e diversas formas de pagamento.",
},
{
q: "Quanto tempo terei acesso ao material?",
a: "O acesso será disponibilizado conforme as condições informadas na plataforma de entrega no momento da compra.",
},
{
q: "Por que o valor está tão baixo?",
a: "Esta é uma oferta promocional de lançamento. O objetivo é permitir que mais candidatos tenham acesso a um método de estudo organizado e acessível.",
},
{
q: "Preciso comprar algum material complementar?",
a: "Não. O método foi organizado para que você tenha uma base completa de preparação utilizando o próprio conteúdo disponibilizado.",
},
{
q: "Quando posso começar a estudar?",
a: "Imediatamente após a confirmação do pagamento. Você poderá acessar o conteúdo no mesmo dia.",
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
          className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all"
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