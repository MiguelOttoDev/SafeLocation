import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import L from 'leaflet';

// Ícones personalizados
const userIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/64/64572.png',
    iconSize: [32, 32],
});
const refugioIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/167/167707.png',
    iconSize: [28, 28],
});

export default function MapaRota({ usuario, refugio }) {
    if (!usuario || !refugio) return null;

    return (
        <div className="w-full max-w-4xl mt-8 rounded shadow-lg overflow-hidden">
            <h3 className="text-center text-lg font-semibold my-2">Rota simulada até {refugio.nome}</h3>
            <MapContainer
                center={[
                    (usuario.lat + refugio.lat) / 2,
                    (usuario.lng + refugio.lng) / 2
                ]}
                zoom={16.5}
                style={{ height: "400px", width: "100%" }}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://carto.com/attributions">CARTO</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                <Marker position={[usuario.lat, usuario.lng]} icon={userIcon} />
                <Marker position={[refugio.lat, refugio.lng]} icon={refugioIcon} />
                <Polyline positions={[[usuario.lat, usuario.lng], [refugio.lat, refugio.lng]]} color="blue" />
            </MapContainer>
        </div>
    );
}
