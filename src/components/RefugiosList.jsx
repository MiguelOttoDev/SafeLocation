import { AiOutlineEnvironment, AiOutlineArrowRight } from 'react-icons/ai';

export default function RefugiosList({ refugios, onSelecionar }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
            {refugios.map((refugio) => (
                <div key={refugio.id} className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-bold flex items-center gap-2 mb-2 text-gray-800">
                        <AiOutlineEnvironment /> {refugio.nome}
                    </h3>
                    <p className="text-gray-700"><strong>Endereço:</strong> {refugio.endereco}</p>
                    <p className="text-gray-600"><strong>Distância:</strong> {refugio.distancia}</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.471689711539!2d-46.634!3d-23.548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c2f7e4c3fd%3A0x3c3a4d4e7e2fcb14!2sRefúgio%20Central!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    <button
                        onClick={() => onSelecionar(refugio)}
                        className="flex items-center justify-center mt-4 gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-4 py-2 rounded transition w-full"
                    >
                        Traçar Rota <AiOutlineArrowRight />
                    </button>
                </div>
            ))}
        </div>
    );
}
