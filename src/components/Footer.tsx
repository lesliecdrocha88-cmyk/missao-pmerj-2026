export default function Footer() {
return (
<footer className="bg-slate-950 text-white py-12 pb-24">
<div className="max-w-6xl mx-auto px-4">

    <div className="grid md:grid-cols-3 gap-10 mb-10">

      {/* Marca */}
      <div>
        <h4 className="text-2xl font-bold text-amber-400 mb-4">
          MISSÃO PMERJ 2026
        </h4>

        <p className="text-gray-300 text-sm leading-relaxed">
          Método Estratégico de Aprovação desenvolvido para candidatos que
          desejam conquistar uma vaga no concurso de Soldado da PMERJ com
          planejamento, foco e estudo inteligente.
        </p>
      </div>

      {/* Atendimento */}
      <div>
        <h4 className="text-xl font-bold mb-4">
          Atendimento
        </h4>

        <p className="text-gray-300 text-sm mb-2">
          📧 atendimento@metodosconcursos.com.br
        </p>

        <p className="text-gray-300 text-sm">
          🌐 www.metodopmerj.com.br
        </p>

        <p className="text-gray-300 text-sm mt-2">
          Resposta em até 48 horas úteis.
        </p>
      </div>

      {/* Aviso Legal */}
      <div>
        <h4 className="text-xl font-bold mb-4">
          Aviso Legal
        </h4>

        <p className="text-gray-300 text-sm leading-relaxed">
          Este material possui finalidade educacional e preparatória.
          Não possui vínculo, parceria ou afiliação com a Polícia Militar
          do Estado do Rio de Janeiro (PMERJ) ou qualquer órgão público.
        </p>
      </div>

    </div>

    <div className="border-t border-slate-800 pt-8">

      <div className="text-center text-gray-400 text-sm space-y-2">

        <p>
          © 2026 MISSÃO PMERJ - Método Estratégico de Aprovação.
        </p>

        <p>
          Todos os direitos reservados.
        </p>

        <div className="py-3">

          <a
            href="/politica-de-privacidade"
            className="text-amber-400 font-medium block"
          >
            Política de Privacidade
          </a>

          <a
            href="/termos-de-uso"
            className="text-amber-400 font-medium block mt-2"
          >
            Termos de Uso
          </a>

        </div>

        <p className="text-xs text-gray-500">
          O desempenho individual depende da dedicação, disciplina e rotina
          de estudos de cada candidato.
        </p>

      </div>

    </div>

  </div>
</footer>

);
}