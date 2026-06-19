/* Estilo: Linha de Frente Tática — barra fixa dourada com CTA imperativo */
import { useEffect, useState } from "react";
import { CHECKOUT_URL, PRICE } from "@/lib/data";
import { ShieldCheck } from "lucide-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-navy-950/95 backdrop-blur-md border-t-2 border-gold-500 px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
          <div className="hidden sm:flex items-center gap-2 text-gold-300">
            <ShieldCheck className="w-5 h-5" />
            <span className="font-display uppercase tracking-wide text-sm text-white/90">
              Garanta seu acesso por apenas <span className="text-gold-400 font-bold">R$ {PRICE.current}</span>
            </span>
          </div>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none text-center bg-gold-500 hover:bg-gold-400 text-navy-950 font-display font-bold uppercase tracking-wider text-base px-8 py-3 rounded-lg transition-all duration-150 active:scale-[0.97] shadow-lg"
          >
            Comprar Agora — R$ {PRICE.current}
          </a>
        </div>
      </div>
    </div>
  );
}
