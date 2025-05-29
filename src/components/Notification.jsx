export default function Notification({ moradorSelecionado, mostrarMensagem }) {
    return (
        <div
            className={`w-full max-w-md mt-6 p-4 border rounded transition-all duration-500 ${
                mostrarMensagem
                    ? 'opacity-100 bg-green-100 border-green-400 text-green-800'
                    : 'opacity-0 h-0 overflow-hidden'
            }`}
        >
            {moradorSelecionado && (
                <p>
                    <strong>{moradorSelecionado.nome}</strong> foi localizado na área de{' '}
                    <strong>{moradorSelecionado.localizacao}</strong>! A equipe foi notificada.
                </p>
            )}
        </div>
    );
}
