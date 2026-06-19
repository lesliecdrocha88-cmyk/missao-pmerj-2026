/* Estilo: Linha de Frente Tática — contador de urgência tático */
import { useEffect, useState } from "react";

function getNextMidnight() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  return end.getTime();
}

export default function Countdown() {
  const [target, setTarget] = useState(getNextMidnight());
  const [remaining, setRemaining] = useState(target - Date.now());

  useEffect(() => {
    const id = setInterval(() => {
      const r = target - Date.now();
      if (r <= 0) {
        const next = getNextMidnight();
        setTarget(next);
        setRemaining(next - Date.now());
      } else {
        setRemaining(r);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  const h = Math.floor(remaining / 3600000);
  const m = Math.floor((remaining % 3600000) / 60000);
  const s = Math.floor((remaining % 60000) / 1000);
  const pad = (n: number) => String(n).padStart(2, "0");

  const Box = ({ value, label }: { value: string; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-navy-950 border border-gold-500/40 rounded-lg w-16 sm:w-20 py-2 text-center">
        <span className="font-display text-2xl sm:text-3xl font-bold text-gold-400 tabular-nums">{value}</span>
      </div>
      <span className="mt-1 text-[10px] sm:text-xs uppercase tracking-widest text-white/60">{label}</span>
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4">
      <Box value={pad(h)} label="Horas" />
      <span className="font-display text-2xl text-gold-400 pb-5">:</span>
      <Box value={pad(m)} label="Min" />
      <span className="font-display text-2xl text-gold-400 pb-5">:</span>
      <Box value={pad(s)} label="Seg" />
    </div>
  );
}
