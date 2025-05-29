import { motion } from "framer-motion";

export default function AboutIdea() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16 text-gray-800">
            <motion.h2
                className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 text-center "
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Sobre a Ideia
            </motion.h2>

            <div className="grid gap-10 md:grid-cols-2 ">
                {[
                    {
                        title: "🎯 Objetivo",
                        content: "Criar um aplicativo de emergência para ajudar moradores e autoridades a lidarem com desastres naturais, melhorando a comunicação, localização de pessoas e direcionamento para refúgios.",
                    },
                    {
                        title: "📱 Como Funciona",
                        content: (
                            <>
                                <p>Cada município tem um perfil e os moradores se cadastram nele.</p>
                                <p className="mt-2">Ao se cadastrar, o usuário concorda em compartilhar sua localização apenas em situações de risco.</p>
                            </>
                        ),
                    },
                    {
                        title: "🔧 Funcionalidades",
                        isFull: true,
                        content: (
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li><strong>Alerta de Emergência:</strong> Envio de alertas em situações de risco.</li>
                                <li><strong>Localização em Tempo Real:</strong> Ativada com permissão para monitoramento e resgate.</li>
                                <li><strong>Refúgios Próximos:</strong> Exibe abrigos mais próximos e rota até eles.</li>
                                <li><strong>Botão "Estou em Perigo":</strong> Envia a localização para autoridades.</li>
                                <li><strong>Busca de Pessoas:</strong> Ajuda a localizar desaparecidos com base na última localização.</li>
                            </ul>
                        ),
                    },
                    {
                        title: "🔐 Segurança e Privacidade",
                        content: (
                            <>
                                <p>A localização é usada apenas em emergências com consentimento.</p>
                                <p className="mt-2">Todos os dados são protegidos e utilizados apenas para segurança.</p>
                            </>
                        ),
                    },
                    {
                        title: "✅ Benefícios",
                        content: (
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Reduz mortes e desaparecimentos.</li>
                                <li>Melhora a resposta a desastres.</li>
                                <li>Facilita o acesso a abrigos seguros.</li>
                                <li>Ajuda equipes de resgate com informações em tempo real.</li>
                            </ul>
                        ),
                    },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        className={`hover:shadow-xl transition-shadow duration-300 bg-white shadow-md rounded-xl p-6 ${item.isFull ? 'md:col-span-2 hover:shadow-xl transition-shadow duration-300' : ''}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <div className="flex items-center mb-4 ">
                            <h3 className="text-2xl font-semibold">{item.title}</h3>
                        </div>
                        <div>{item.content}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
