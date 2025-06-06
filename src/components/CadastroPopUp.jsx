import React, { useState } from "react";
import cidades from "../../cidades.json";
import { useNavigate } from "react-router-dom";

export default function CadastroPopUp({ isOpen, onClose }) {
    const [nome, setNome] = useState("");
    const [cidade, setCidade] = useState("");
    const [autorizaLocalizacao, setAutorizaLocalizacao] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validar = () => {
        let newErrors = {};
        if (!nome.trim()) newErrors.nome = "Nome é obrigatório";
        if (!cidade) newErrors.cidade = "Cidade é obrigatória";
        if (!autorizaLocalizacao)
            newErrors.autorizaLocalizacao = "É necessário autorizar o uso da localização";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validar()) return;

        const novoUsuario = { nome, cidade, autorizaLocalizacao };
        localStorage.setItem("usuario", JSON.stringify(novoUsuario));
        onClose(novoUsuario);
        navigate("/city");
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div
                className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative text-gray-800"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Cadastro</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-semibold mb-1 text-start" htmlFor="nome">Nome</label>
                        <input
                            id="nome"
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className={`w-full border rounded px-3 py-2 ${errors.nome ? "border-red-500" : "border-gray-300"}`}
                        />
                        {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}
                    </div>

                    <div>
                        <label className="block font-semibold mb-1 text-start" htmlFor="cidade">Cidade</label>
                        <select
                            id="cidade"
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                            className={`w-full border rounded px-3 py-2 ${errors.cidade ? "border-red-500" : "border-gray-300"}`}
                        >
                            <option value="">-- Selecione a cidade --</option>
                            {cidades.map((c, i) => (
                                <option key={i} value={c}>{c}</option>
                            ))}
                        </select>
                        {errors.cidade && <p className="text-red-500 text-sm mt-1">{errors.cidade}</p>}
                    </div>

                    <div className="flex items-center">
                        <input
                            id="autorizaLocalizacao"
                            type="checkbox"
                            checked={autorizaLocalizacao}
                            onChange={(e) => setAutorizaLocalizacao(e.target.checked)}
                            className={`mr-2 ${errors.autorizaLocalizacao ? "border-red-500" : ""}`}
                        />
                        <label htmlFor="autorizaLocalizacao" className="select-none font-medium">
                            Autorizo o uso da minha localização em emergências.
                        </label>
                    </div>
                    {errors.autorizaLocalizacao && (
                        <p className="text-red-500 text-sm mt-1">{errors.autorizaLocalizacao}</p>
                    )}

                    <p className="text-xs text-gray-500 mt-2">
                        Seus dados são usados apenas para emergências e não serão compartilhados.
                    </p>

                    <button
                        type="submit"
                        className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded mt-4 transition"
                    >
                        Cadastrar
                    </button>
                </form>
                <a href="/">
                    <button

                        onClick={() => onClose(null)}
                        className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 cursor-pointer"
                        aria-label="Fechar"
                        
                    >
                        &#10005;
                    </button>
                </a>

            </div>
        </div>
    );
}
