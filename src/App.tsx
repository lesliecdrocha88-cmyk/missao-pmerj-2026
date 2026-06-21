import { useState, useEffect } from "react";

import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Modules from "./components/Modules";
import Offer from "./components/Offer";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";

import Obrigado from "./components/Obrigado";
import AguardandoPagamento from "./components/AguardandoPagamento";
import AnaliseCredito from "./components/AnaliseCredito";
import PoliticaPrivacidade from "./components/PoliticaPrivacidade";
import TermosUso from "./components/TermosUso";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compra aprovada
  if (window.location.pathname === "/obrigado") {
    return <Obrigado />;
  }

  // Pagamento pendente
  if (window.location.pathname === "/aguardando-pagamento") {
    return <AguardandoPagamento />;
  }

  // Análise de crédito
  if (window.location.pathname === "/analise-credito") {
    return <AnaliseCredito />;
  }

  // Política de Privacidade
  if (window.location.pathname === "/politica-de-privacidade") {
    return <PoliticaPrivacidade />;
  }

  // Termos de Uso
  if (window.location.pathname === "/termos-de-uso") {
    return <TermosUso />;
  }

  // Landing Page
  return (
    <div className="min-h-screen bg-white">
      <Hero />

      <Benefits />

      <Modules />

      <FAQ />

      <Offer />

      <Footer />

      <StickyCTA isVisible={isScrolled} />
    </div>
  );
}