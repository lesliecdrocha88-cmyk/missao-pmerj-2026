export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">PMERJ 2026</h4>
            <p className="text-gray-300 text-sm">
              Método estratégico completo para sua aprovação no concurso de Soldado da PMERJ.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <p className="text-gray-300 text-sm">
              Email: lesliecd.rocha88@gmail.com
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <p className="text-gray-300 text-sm">
              Material independente. Sem vínculo oficial com a PMERJ.
            </p>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Método Estratégico PMERJ. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
