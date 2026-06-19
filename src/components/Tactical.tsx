/* Estilo: Linha de Frente Tática — sistema de motivos visuais recorrentes
   - StripeDivider: listras diagonais navy/gold como marcação de campo
   - ModuleSeal: selo dourado recorrente "12 MÓDULOS"
   - FieldLabel: rótulo tático com traços laterais */
import { ASSETS } from "@/lib/data";

export function StripeDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className="h-3 w-full"
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, #d4a017 0, #d4a017 14px, #0a1f3c 14px, #0a1f3c 28px)",
        transform: flip ? "scaleX(-1)" : undefined,
      }}
      aria-hidden
    />
  );
}

export function ModuleSeal({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative inline-flex flex-col items-center justify-center rounded-full bg-navy-950 border-2 border-gold-500 shadow-xl ${className}`}
      style={{ boxShadow: "0 0 0 4px rgba(212,160,23,0.15)" }}
    >
      <img src={ASSETS.logo} alt="" className="w-7 h-7 mb-0.5" aria-hidden />
      <span className="font-display font-bold text-gold-400 leading-none text-lg">12</span>
      <span className="font-display uppercase text-[7px] tracking-[0.2em] text-gold-300 leading-none mt-0.5">
        Módulos
      </span>
    </div>
  );
}

export function FieldLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  const color = dark ? "text-gold-400" : "text-gold-600";
  return (
    <div className={`flex items-center justify-center gap-3 ${color} mb-3`}>
      <span className="h-px w-8 bg-current opacity-50" />
      <span className="font-display uppercase tracking-[0.3em] text-xs sm:text-sm">{children}</span>
      <span className="h-px w-8 bg-current opacity-50" />
    </div>
  );
}
