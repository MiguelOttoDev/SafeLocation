import { AiOutlineWarning } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-4">
      <AiOutlineWarning size={80} className="text-yellow-500 mb-6" />
      <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Página não encontrada</h2>
      <p className="mb-6 text-center max-w-md">
        Ops! Parece que você tentou acessar uma página que não existe. Verifique o endereço ou volte para a página inicial.
      </p>
      <Link
        to="/"
        className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded transition"
      >
        Voltar para a Home
      </Link>
    </div>
  );
}