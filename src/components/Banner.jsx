import { motion } from "framer-motion";
import React, { useState } from "react";
import CadastroPopUp from "./CadastroPopUp";
export default function Banner() {
    const [modalAberto, setModalAberto] = useState(false);
    return (
        <section
            className="relative w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/desastre.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6 sm:px-8 md:px-12 lg:px-16">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="
                    text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                    font-extrabold tracking-tight leading-tight mb-4 drop-shadow-lg
                  "
                >
                    Safe Location
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="
                    max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl
                    text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
                    font-medium leading-relaxed mb-8 drop-shadow-md
                  "
                >
                    Ajude a proteger vidas em desastres naturais.<br />
                    Encontre refúgios seguros, acesse informações em tempo real<br />
                    e fortaleça a rede de proteção para todos.
                </motion.p>

                <motion.a
                    onClick={() => setModalAberto(true)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="
                    inline-block
                    bg-gradient-to-r from-blue-600 to-blue-400
                    hover:from-blue-700 hover:to-blue-500
                    text-white font-semibold
                    px-6 sm:px-8 md:px-10 lg:px-12
                    py-3 sm:py-4
                    rounded-full
                    text-sm sm:text-base md:text-lg
                    shadow-lg
                    transition-all duration-300
                  "
                >
                    🌟 Começar Agora
                </motion.a>
                <CadastroPopUp isOpen={modalAberto} onClose={() => setModalAberto(false)} />
            </div>
        </section>

    )
}