import Card from "./Card";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { GoAlertFill, GoLocation } from "react-icons/go";

export default function Info() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, inView]);

    return (
        <div ref={ref} className="text-center py-12">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                transition={{ duration: 1 }}
                className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2"
            >
                Segurança e Abrigos
            </motion.h1>

            <motion.h4
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-600"
            >
                Alertas em tempo real e refúgios próximos para sua proteção.
            </motion.h4>

            <div className="max-w-4xl mx-auto mt-12 px-4 grid gap-10 grid-cols-1 md:grid-cols-2">
                <div className="flex justify-center">
                    <Card
                        icon={GoAlertFill}
                        title="Alertas"
                        description="Receba avisos de emergência para sua segurança."
                    />
                </div>
                <div className="flex justify-center">
                    <Card
                        icon={GoLocation}
                        title="Refúgios"
                        description="Encontre os refúgios mais próximos rapidamente."
                    />
                </div>
            </div>
        </div>
    );
}
