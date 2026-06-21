export default function Obrigado() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">

        <div className="text-6xl mb-6">
          🎉
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6">
          Compra Realizada com Sucesso!
        </h1>

        <p className="text-xl text-gray-200 mb-4">
          Parabéns pela sua decisão de investir na sua aprovação.
        </p>

        <p className="text-lg text-gray-300 mb-4">
          Seu pagamento foi confirmado e o acesso ao material foi enviado para o e-mail cadastrado na Hotmart.
        </p>

        <p className="text-lg text-gray-300 mb-4">
          Caso não encontre o e-mail, verifique também as pastas:
          <span className="font-bold text-amber-400">
            {" "}Spam, Promoções ou Lixeira.
          </span>
        </p>

        <p className="text-lg text-gray-300 mb-8">
          Agora é hora de iniciar sua preparação e dar o primeiro passo rumo à sua aprovação.
        </p>

        <a
          href="https://app.hotmart.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-amber-500 hover:bg-amber-600 text-blue-900 font-bold text-xl px-8 py-4 rounded-xl transition-all duration-200"
        >
          Acessar Hotmart
        </a>

        <div className="mt-10 border-t border-white/20 pt-6">
          <p className="text-gray-300 text-sm mb-2">
            Precisa de ajuda?
          </p>

          <p className="text-amber-400 font-semibold">
            atendimento@metodosconcursos.com.br
          </p>

          <p className="text-xs text-gray-400 mt-2">
            Resposta em até 48 horas úteis.
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          MISSÃO PMERJ 2026 • Método Estratégico de Aprovação
        </p>

      </div>
    </div>
  );
}