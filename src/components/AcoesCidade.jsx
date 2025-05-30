import { AiOutlineWarning, AiOutlineSend, AiOutlineHome } from "react-icons/ai";

export default function AcoesCidade({ onAtivarAlerta, onEstouEmPerigo }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center my-6">
      <button
        onClick={onAtivarAlerta}
        className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded transition"
      >
        <AiOutlineWarning size={24} />
        Ativar Alerta
      </button>

      <button
        onClick={onEstouEmPerigo}
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded transition"
      >
        <AiOutlineSend size={24} />
        Estou em Perigo
      </button>
      <a href="/refugios">
        <button
          className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded transition"
        >
          <AiOutlineHome size={24} />
          Ver Refúgios
        </button>
      </a>
    </div>
  );
}
