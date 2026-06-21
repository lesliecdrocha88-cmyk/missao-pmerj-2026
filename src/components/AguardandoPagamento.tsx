export default function AguardandoPagamento() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">

        <div className="text-6xl mb-6">
          ⏳
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6">
          Pagamento Pendente
        </h1>

        <p className="text-xl text-gray-200 mb-4">
          Recebemos seu pedido com sucesso.
        </p>

        <p className="text-lg text-gray-300 mb-4">
          Estamos aguardando a confirmação do pagamento para liberar seu acesso ao material.
        </p>

        <p className="text-lg text-gray-300 mb-8">
          Assim que o pagamento for identificado, você receberá automaticamente um e-mail da Hotmart.
        </p>

        <a
          href="https://app.hotmart.com"
          className="inline-block bg-amber-500 hover:bg-amber-600 text-blue-900 font-bold text-xl px-8 py-4 rounded-xl"
        >
          Acompanhar Pedido
        </a>

      </div>
    </div>
  );
}