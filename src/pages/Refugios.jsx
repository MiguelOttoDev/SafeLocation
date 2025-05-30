import React, { useState } from 'react';
import SubNavBar from '../components/SubNavBar';
import RefugiosList from '../components/RefugiosList';
import MapaRota from '../components/MapaRota';

export default function Refugios() {
    const [refugioSelecionado, setRefugioSelecionado] = useState(null);
    const usuario = { lat: -23.55052, lng: -46.633308 };

    const refugios = [
        { id: 1, nome: 'Refúgio Central', endereco: 'Rua Exemplo, 123, Centro', distancia: '2 km', lat: -23.548, lng: -46.634 },
        { id: 2, nome: 'Refúgio Norte', endereco: 'Avenida Exemplo, 456, Norte', distancia: '3.5 km', lat: -23.545, lng: -46.629 },
    ];

    return (
        <div className="flex flex-col items-center min-h-screen p-4 bg-gray-50">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 p-2 mb-8 text-center my-4">
                Refúgios Próximos
            </h2>

            <RefugiosList refugios={refugios} onSelecionar={setRefugioSelecionado} />
            {refugioSelecionado && <MapaRota usuario={usuario} refugio={refugioSelecionado} />}
        </div>
    );
}
