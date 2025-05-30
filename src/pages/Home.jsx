import AboutIdea from "../components/AboutIdea";
import Banner from "../components/Banner";
import Info from "../components/Info";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Integrantes from "../components/Integrantes";
import { Link } from "react-router-dom";

const MotionLink = motion(Link); 

export default function Home() {

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  const integrantes = [
    { name: "Mateus Carvalho Granjeia", rm: "557783" },
    { name: "Daniel de Assis Lobo Tinois", rm: "555798" },
    { name: "Enzo Diógenes do Prado", rm: "555062" },
    { name: "Miguel Otto Rosa de Sousa", rm: "555947" },
    { name: "Renan Soares Costa", rm: "556550" },
  ];

  return (
    <>
      <Banner />
      <Info />

      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
        <MotionLink
          to="/city"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="
            inline-block
            bg-gradient-to-r from-green-600 to-green-400
            hover:from-green-700 hover:to-green-500
            text-white font-semibold
            px-6 sm:px-8 md:px-10 lg:px-12
            py-3 sm:py-4
            rounded-full
            text-sm sm:text-base md:text-lg
            shadow-lg
            transition-all duration-300
            text-center
          "
        >
          🔔 Ver Alertas
        </MotionLink>

        <MotionLink
          to="/refugios"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="
            inline-block
            bg-gradient-to-r from-orange-500 to-orange-400
            hover:from-orange-600 hover:to-orange-500
            text-white font-semibold
            px-6 sm:px-8 md:px-10 lg:px-12
            py-3 sm:py-4
            rounded-full
            text-sm sm:text-base md:text-lg
            shadow-lg
            transition-all duration-300
            text-center
          "
        >
          🏠 Refúgios Próximos
        </MotionLink>
      </div>

      <AboutIdea />

      <div ref={ref} className="py-12 px-6 max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8"
        >
          Integrantes
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 ">
          {integrantes.map(({ name, rm }, index) => (
            <motion.div
              key={rm}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Integrantes name={name} rm={rm} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
