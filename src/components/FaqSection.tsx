/* Estilo: Linha de Frente Tática — accordion sóbrio com detalhes dourados */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/lib/data";

export default function FaqSection() {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-display uppercase tracking-[0.3em] text-gold-600 text-sm mb-2">
            Tire suas dúvidas
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-navy-900">
            Perguntas Frequentes
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {FAQ.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-slate-200 rounded-xl px-5 bg-white shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-navy-900 hover:text-gold-600 hover:no-underline py-5">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
