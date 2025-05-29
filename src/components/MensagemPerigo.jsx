import { RiErrorWarningLine } from "react-icons/ri";
export default function MensagemPerigo({ visible }) {
    if (!visible) return null;

    return (
        <div className="bg-red-100 text-red-800 p-2 rounded shadow-md animate-bounce max-w-md w-full flex items-center space-x-2">
            <RiErrorWarningLine size={24} />
            <span>Sua localização foi enviada para resgate!</span>
        </div>

    );
}