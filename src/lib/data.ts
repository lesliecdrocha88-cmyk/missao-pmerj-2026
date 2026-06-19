// Configuração central da página de vendas PMERJ 2026
// IMPORTANTE: Substitua CHECKOUT_URL pelo seu link real de checkout do Hotmart
// quando o produto for cadastrado na plataforma.

export const CHECKOUT_URL = "https://pay.hotmart.com/X106384867U?checkoutMode=2";
export const SUPPORT_EMAIL = "lesliecd.rocha88@gmail.com";

export const PRICE = {
  original: "97,00",
  current: "9,90",
  installment: "ou R$ 9,90 à vista no PIX",
};

export const ASSETS = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663770057216/UEjFF4hqsvifonqQ8j9AyK/hero-bg-ez8DrC6YdgXtmkjmdAiaiS.webp",
  mockup:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663770057216/UEjFF4hqsvifonqQ8j9AyK/ebook-mockup-NDW2p7P6Lc6iz2UTmtEaup.webp",
  logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663770057216/UEjFF4hqsvifonqQ8j9AyK/logo-3RiWMmJ6ZogmLyAY2t5vkn.webp",
  brasao: "https://d2xsxph8kpxj0f.cloudfront.net/310519663770057216/UEjFF4hqsvifonqQ8j9AyK/brasao-pmerj-169213123.webp",
};

export const MODULES = [
  { n: "01", title: "Entendendo o Concurso PMERJ", desc: "Edital, etapas, salário e perfil do cargo destrinchados." },
  { n: "02", title: "Estratégia dos 30 Pontos", desc: "Como ser eficiente em vez de perfeito e bater o corte com segurança." },
  { n: "03", title: "Plano de Estudos de 30 Dias", desc: "Cronograma semana a semana para quem tem pouco tempo." },
  { n: "04", title: "Português Inteligente", desc: "Interpretação, gramática e os pontos que mais caem." },
  { n: "05", title: "Matemática Sem Sofrimento", desc: "Macetes e tipos clássicos de questão sem complicação." },
  { n: "06", title: "Direitos Humanos Essenciais", desc: "Art. 5º, ECA, Maria da Penha e leis decisivas." },
  { n: "07", title: "Direito Administrativo e Legislação PMERJ", desc: "Princípios, poderes e normas próprias da corporação." },
  { n: "08", title: "Direito Penal e Processual Penal", desc: "Crime, penas, prisões e procedimentos sem enrolação." },
  { n: "09", title: "Flashcards Estratégicos", desc: "60 flashcards de revisão rápida (Português, Matemática e Direito)." },
  { n: "10", title: "Simulado Final", desc: "25 questões inéditas com gabarito comentado." },
  { n: "11", title: "Plano de Ataque Final", desc: "Checklist e cronograma de revisão para a reta final." },
  { n: "12", title: "Mensagem Motivacional Final", desc: "O empurrão certo para não desistir quando mais importa." },
];

export const BENEFITS = [
  { icon: "Target", title: "Método Prático de Aprovação", desc: "Nada de teoria infinita. Foco no que mais cai e gera acerto rápido." },
  { icon: "Clock", title: "Plano de 30 Dias", desc: "Estude com foco mesmo tendo pouco tempo livre por dia." },
  { icon: "Layers", title: "12 Módulos Completos", desc: "Do edital ao dia da prova, tudo organizado em sequência lógica." },
  { icon: "Brain", title: "Flashcards + Simulado", desc: "Revisão ativa e treino real com gabarito comentado." },
  { icon: "Scale", title: "Direito Descomplicado", desc: "Penal, Administrativo e Direitos Humanos em linguagem direta." },
  { icon: "Smartphone", title: "Acesso Imediato no Celular", desc: "Receba na hora e estude de onde estiver, no computador ou no celular." },
];

export const FAQ = [
  { q: "Como recebo o e-book após a compra?", a: "O acesso é 100% digital e imediato. Assim que o pagamento é confirmado, você recebe o e-book no seu e-mail e na área de membros da plataforma." },
  { q: "Preciso de algum conhecimento prévio?", a: "Não. O material foi feito para quem tem ensino médio e quer estudar de forma estratégica, do zero até a reta final." },
  { q: "Em quais aparelhos consigo ler?", a: "Em qualquer um: celular, tablet, notebook ou computador. O arquivo é em PDF e abre em todos os dispositivos." },
  { q: "O conteúdo está atualizado para o concurso 2026?", a: "Sim. O método foi estruturado com base no modelo recente do concurso de Soldado da PMERJ, incluindo prova objetiva, redação e demais etapas." },
  { q: "Por que o preço é tão baixo?", a: "O objetivo é colocar um método de estudo de qualidade na mão do maior número possível de candidatos. Por isso o valor promocional de R$ 9,90." },
];
