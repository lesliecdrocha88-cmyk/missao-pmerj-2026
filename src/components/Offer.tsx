import { Check, AlertCircle } from "lucide-react";

export default function Offer() {
  const handleCheckout = () => {
    window.open("https://pay.hotmart.com/X106384867U?checkoutMode=2", "_blank");
  };

  return (
    <section id="offer" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-2xl p-8 md:p-12 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-4">
              Oferta Especial PMERJ 2026
            </h2>
            <p className="text-xl text-gray-200">
              Acesso completo a todos os 12 módulos + flashcards + simulado
            </p>
          </div>

          {/* Pricing */}
          <div className="text-center mb-8">
            <div className="inline-block">
              <div className="text-sm text-gray-300 line-through">De R$ 97,00</div>
              <div className="text-6xl font-bold text-amber-400 mb-2">R$ 9,90</div>
              <div className="text-gray-300">ou 1x no PIX/Cartão</div>
            </div>
          </div>

          {/* Discount badge */}
          <div className="bg-amber-500/20 border border-amber-500 rounded-lg p-4 mb-8 text-center">
            <p className="text-amber-300 font-semibold">
              ⏰ Oferta por tempo limitado - Aproveita enquanto tiver disponível!
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="flex gap-3">
              <Check className="text-amber-400 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold mb-1">12 Módulos Completos</h4>
                <p className="text-gray-300 text-sm">Do edital ao dia da prova</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Check className="text-amber-400 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold mb-1">60+ Flashcards</h4>
                <p className="text-gray-300 text-sm">Revisão rápida e eficiente</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Check className="text-amber-400 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold mb-1">Simulado com 25 Questões</h4>
                <p className="text-gray-300 text-sm">Gabarito comentado</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Check className="text-amber-400 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold mb-1">Acesso Imediato</h4>
                <p className="text-gray-300 text-sm">Comece a estudar hoje</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleCheckout}
            className="w-full bg-amber-500 hover:bg-amber-600 text-blue-900 font-bold text-xl py-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 mb-6"
          >
            COMPRAR AGORA - R$ 9,90
          </button>

          {/* Security badge */}
          <div className="flex items-center justify-center gap-2 text-gray-300 text-sm">
            <AlertCircle size={16} />
            <span>Pagamento seguro via Hotmart | 100% garantido</span>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Material independente. Sem vínculo oficial com a PMERJ.
        </p>
      </div>
    </section>
  );
}
