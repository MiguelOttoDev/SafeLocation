export default function SearchForm({ nomeBusca, setNomeBusca, onBuscar, loading }) {
    return (
        <form onSubmit={onBuscar} className="w-full max-w-md flex gap-2 mb-4">
            <input
                type="text"
                value={nomeBusca}
                onChange={(e) => setNomeBusca(e.target.value)}
                placeholder="Digite o nome ou parte do nome"
                className="flex-1 border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-sky-500"
                disabled={loading}
            />
            <button
                type="submit"
                disabled={loading}
                className={`bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition disabled:opacity-50`}
            >
                {loading ? 'Buscando...' : 'Buscar'}
            </button>
        </form>
    );
}
