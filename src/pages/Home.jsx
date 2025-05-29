import AboutIdea from "../components/AboutIdea";
import Banner from "../components/Banner";
import Info from "../components/Info";
import { motion } from "framer-motion";

export default function Home() {

    return (
        <>
            <Banner />
            <Info />

            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
      <motion.a
        href="#alertas"
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
      </motion.a>

      <motion.a
        href="#refugios"
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
      </motion.a>
    </div>

      <AboutIdea/>

        </>
    )

}