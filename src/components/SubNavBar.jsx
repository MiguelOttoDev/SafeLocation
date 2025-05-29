// SubNavbar.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SubNavBar() {
    const [usuario, setUsuario] = useState({ nome: "", cidade: "" });

    useEffect(() => {
        const dados = JSON.parse(localStorage.getItem("usuario"));
        if (dados) setUsuario(dados);
    }, []);

    return (
        <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-sky-100 text-sky-900 py-2 px-4 text-center shadow-sm"
        >
            <p className="text-sm font-medium">
                Bem-vindo, <span className="font-bold">{usuario.nome}</span> - {usuario.cidade}
            </p>
        </motion.div>
    );
}
