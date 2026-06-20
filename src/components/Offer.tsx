import { Check, AlertCircle, ShieldCheck } from "lucide-react";

export default function Offer() {
const handleCheckout = () => {
window.open("https://pay.hotmart.com/X106384867U?checkoutMode=2", "_blank");
};

return (
<section id="offer" className="py-20 bg-slate-100">
<div className="max-w-5xl mx-auto px-4">

    <div className="bg-gradient-to-br from-blue-900 to-slate-950 text-white rounded-2xl p-8 md:p-12 shadow-2xl">

      <div className="text-center mb-10">

        <div className="inline-block bg-amber-500 text-blue-950 font-bold px-4 py-2 rounded-full mb-4">
          OFERTA DE LANÇAMENTO
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Garanta Seu Acesso Agora
        </h2>

        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Tudo o que você precisa para iniciar sua preparação para o concurso
          da PMERJ em um único material prático, direto e organizado.
        </p>

      </div>

      <div className="text-center mb-10">

        <p className="text-gray-400 text-xl line-through mb-2">
          De R$ 97,00
        </p>

        <div className="text-7xl font-extrabold text-amber-400 mb-2">
          R$ 9,90
        </div>

        <p className="text-lg text-gray-300">
          Pagamento único • Acesso imediato
        </p>

      </div>

      <div className="bg-red-500/20 border border-red-400 rounded-xl p-4 text-center mb-10">
        <p className="font-bold text-red-200">
          ⚠ Valor promocional sujeito a alteração sem aviso prévio.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5 mb-10">

        <div className="flex gap-3">
          <Check className="text-amber-400 flex-shrink-0" size={24} />
          <div>
            <h4 className="font-bold">12 Módulos Estratégicos</h4>
            <p className="text-gray-300 text-sm">
              Conteúdo organizado para acelerar sua preparação.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Check className="text-amber-400 flex-shrink-0" size={24} />
          <div>
            <h4 className="font-bold">Flashcards de Revisão</h4>
            <p className="text-gray-300 text-sm">
              Memorize mais em menos tempo.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Check className="text-amber-400 flex-shrink-0" size={24} />
          <div>
            <h4 className="font-bold">Questões Comentadas</h4>
            <p className="text-gray-300 text-sm">
              Treine exatamente o que costuma cair.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Check className="text-amber-400 flex-shrink-0" size={24} />
          <div>
            <h4 className="font-bold">Plano de Estudos</h4>
            <p className="text-gray-300 text-sm">
              Saiba o que estudar e quando estudar.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Check className="text-amber-400 flex-shrink-0" size={24} />
          <div>
            <h4 className="font-bold">Acesso Imediato</h4>
            <p className="text-gray-300 text-sm">
              Receba o material logo após a compra.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Check className="text-amber-400 flex-shrink-0" size={24} />
          <div>
            <h4 className="font-bold">Atualizações Futuras</h4>
            <p className="text-gray-300 text-sm">
              Material preparado para acompanhar o concurso.
            </p>
          </div>
        </div>

      </div>

      <button
        onClick={handleCheckout}
        className="w-full bg-amber-500 hover:bg-amber-600 text-blue-950 font-extrabold text-2xl py-5 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 mb-6"
      >
        QUERO COMEÇAR AGORA POR R$ 9,90
      </button>

      <div className="flex justify-center items-center gap-2 text-gray-300 text-sm">

        <ShieldCheck size={18} />

        <span>
          Compra protegida e processada pela Hotmart
        </span>

      </div>

    </div>

    <p className="text-center text-gray-500 text-sm mt-8">
      Este material é independente e não possui vínculo oficial com a PMERJ.
    </p>

  </div>
</section>

);
}