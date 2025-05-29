import { AiOutlineEnvironment } from 'react-icons/ai';

export default function MoradorList({ moradores, onSelecionar }) {
    if (moradores.length === 0) {
        return <p className="text-gray-600 text-center">Nenhum morador encontrado.</p>;
    }

    return (
        <ul className="w-full max-w-md space-y-4">
            {moradores.map((morador) => (
                <li
                    key={morador.id}
                    className="p-4 bg-white rounded shadow hover:bg-gray-100 cursor-pointer flex items-start gap-2"
                    onClick={() => onSelecionar(morador)}
                >
                    <AiOutlineEnvironment className="text-2xl text-sky-600" />
                    <div>
                        <h3 className="text-lg font-semibold">{morador.nome}</h3>
                        <p className="text-gray-600">
                            <strong>Última localização:</strong> {morador.localizacao}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    );
}
