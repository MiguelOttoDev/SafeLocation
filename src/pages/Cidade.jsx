import React, { useEffect, useState } from "react";
import AlertaBanner from "../components/AlertaBanner";
import CadastroPopUp from "../components/CadastroPopUp";
import SubNavBar from "../components/SubNavBar";
import { AiOutlineWarning } from "react-icons/ai";
import AcoesCidade from "../components/AcoesCidade";
import MapaCidade from "../components/MapaCidade";
import ModalSOS from "../components/ModalSOS";
import MensagemPerigo from "../components/MensagemPerigo";

export default function Cidade() {
  const [showCadastro, setShowCadastro] = useState(false);
  const [alertaAtivo, setAlertaAtivo] = useState(false);
  const [showMensagemPerigo, setShowMensagemPerigo] = useState(false);
  const [showModalSOS, setShowModalSOS] = useState(false);
  const [mensagemSOS, setMensagemSOS] = useState("");
  const [latitude] = useState(-23.55052);
  const [longitude] = useState(-46.633308);

  const refugios = [
    { id: 1, nome: "Refúgio Central", lat: -23.548, lng: -46.634 },
    { id: 2, nome: "Refúgio Norte", lat: -23.545, lng: -46.629 },
  ];

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (!usuario) {
      setShowCadastro(true);
    }
  }, []);

  const handleAtivarAlerta = () => setAlertaAtivo(true);

  const handleEstouEmPerigo = () => setShowModalSOS(true);

  const enviarSOS = () => {
    if (!mensagemSOS.trim()) {
      alert("Por favor, escreva uma mensagem antes de enviar.");
      return;
    }
    setShowMensagemPerigo(true);
    setShowModalSOS(false);
    setMensagemSOS("");
    setTimeout(() => setShowMensagemPerigo(false), 4000);
  };

  const handleVerRefugios = () => {
    window.location.href = "/refugios";
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-gray-50">
      <SubNavBar />

      {showCadastro && <CadastroPopUp isOpen={true} onClose={() => { }} />}

      {!showCadastro && (
        <>
          <AlertaBanner alertaAtivo={alertaAtivo} mensagem="Enchente na sua região! Fique atento!" />


          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 p-2 mb-8 text-center my-4">
            Página do Município
          </h2>

          <AcoesCidade
            onAtivarAlerta={handleAtivarAlerta}
            onEstouEmPerigo={handleEstouEmPerigo}
            onVerRefugios={handleVerRefugios}
          />

          <MensagemPerigo visible={showMensagemPerigo} />

          <MapaCidade latitude={latitude} longitude={longitude} refugios={refugios} />

          <ModalSOS
            isOpen={showModalSOS}
            onClose={() => setShowModalSOS(false)}
            mensagemSOS={mensagemSOS}
            setMensagemSOS={setMensagemSOS}
            onEnviarSOS={enviarSOS}
          />
        </>
      )}
    </div>
  );
}
