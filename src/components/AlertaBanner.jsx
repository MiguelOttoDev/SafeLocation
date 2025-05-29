import { AiOutlineWarning } from "react-icons/ai";
export default function AlertaBanner({ alertaAtivo, mensagem }) {
    if (!alertaAtivo) return null;

    return (
        <div className="bg-red-600 rounded-xl text-white text-center p-3 mt-4 font-bold text-lg animate-pulse flex items-center gap-2">
            <AiOutlineWarning size={24} />
            <span>
                {mensagem}
            </span>
        </div>


    );
}
