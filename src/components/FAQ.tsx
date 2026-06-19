import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Como recebo o e-book após a compra?",
    a: "O acesso é 100% digital e imediato. Assim que o pagamento é confirmado, você recebe o e-book no seu e-mail e na área de membros da Hotmart.",
  },
  {
    q: "Preciso de algum conhecimento prévio?",
    a: "Não. O material foi feito para quem tem ensino médio e quer estudar de forma estratégica, do zero até a reta final.",
  },
  {
    q: "Em quais aparelhos consigo ler?",
    a: "Em qualquer um: celular, tablet, notebook ou computador. O arquivo é em PDF e abre em todos os dispositivos.",
  },
  {
    q: "O conteúdo está atualizado para o concurso 2026?",
    a: "Sim. O método foi estruturado com base no modelo recente do concurso de Soldado da PMERJ.",
  },
  {
    q: "Por que o preço é tão baixo?",
    a: "O objetivo é colocar um método de estudo de qualidade na mão do maior número possível de candidatos.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-4 text-blue-900">
          Perguntas Frequentes
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Tudo que você precisa saber sobre o e-book
        </p>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
              >
                <h3 className="text-left font-bold text-blue-900">{faq.q}</h3>
                <ChevronDown
                  size={20}
                  className={`text-amber-500 transition-transform ${
                    openIdx === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIdx === idx && (
                <div className="px-4 pb-4 text-gray-600 border-t border-slate-200">
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
