interface StickyCTAProps {
  isVisible: boolean;
}

export default function StickyCTA({ isVisible }: StickyCTAProps) {
  const handleCheckout = () => {
    window.open("https://pay.hotmart.com/X106384867U?checkoutMode=2", "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-900 text-white p-4 shadow-2xl animate-in slide-in-from-bottom-4 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div>
          <p className="font-bold text-lg">Método Estratégico PMERJ 2026</p>
          <p className="text-amber-400 font-bold">De R$ 97 por R$ 9,90</p>
        </div>
        <button
          onClick={handleCheckout}
          className="btn-secondary whitespace-nowrap"
        >
          Comprar Agora
        </button>
      </div>
    </div>
  );
}
