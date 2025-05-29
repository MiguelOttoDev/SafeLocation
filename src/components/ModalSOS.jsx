import { AiOutlineClose } from "react-icons/ai";

export default function ModalSOS({ isOpen, onClose, mensagemSOS, setMensagemSOS, onEnviarSOS }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[1050]" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative text-gray-800" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 hover:text-gray-900" aria-label="Fechar">
          <AiOutlineClose size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Enviar SOS</h2>

        <textarea
          className="w-full border border-gray-300 rounded px-3 py-2 resize-none"
          rows={4}
          placeholder="Descreva sua situação de emergência..."
          value={mensagemSOS}
          onChange={(e) => setMensagemSOS(e.target.value)}
        />

        <button
          onClick={onEnviarSOS}
          className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded transition"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
