import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/64/64572.png",
  iconSize: [32, 32],
});

const refugioIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/167/167707.png",
  iconSize: [28, 28],
});

export default function MapaCidade({ latitude, longitude, refugios }) {
  const bounds = refugios.length > 0 ? [
    [Math.min(latitude, ...refugios.map(r => r.lat)), Math.min(longitude, ...refugios.map(r => r.lng))],
    [Math.max(latitude, ...refugios.map(r => r.lat)), Math.max(longitude, ...refugios.map(r => r.lng))]
  ] : [[latitude, longitude]];

  return (
    <div className="w-full max-w-4xl mt-8 rounded overflow-hidden shadow-lg relative z-0">
      <MapContainer bounds={bounds} style={{ height: "600px", width: "100%" }} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[latitude, longitude]} icon={userIcon}>
          <Popup>Você está aqui</Popup>
        </Marker>

        {refugios.map((r) => (
          <Marker key={r.id} position={[r.lat, r.lng]} icon={refugioIcon}>
            <Popup>{r.nome}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
