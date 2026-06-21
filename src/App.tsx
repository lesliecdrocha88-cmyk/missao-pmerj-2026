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

// PIX, boleto ou pagamento pendente
if (window.location.pathname === "/aguardando-pagamento") {
return <AguardandoPagamento />;
}

// Cartão em análise
if (window.location.pathname === "/analise-credito") {
return <AnaliseCredito />;
}

// Landing Page Principal
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