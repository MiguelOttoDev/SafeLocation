export default function Pagination({ totalPages, paginaAtual, onPaginaChange }) {
    if (totalPages <= 1) return null;

    const paginas = [];
    for (let i = 1; i <= totalPages; i++) {
        paginas.push(
            <button
                key={i}
                onClick={() => onPaginaChange(i)}
                className={`px-3 py-1 rounded border mx-1 transition ${
                    i === paginaAtual
                        ? 'bg-sky-600 text-white border-sky-600'
                        : 'bg-white text-sky-600 border-sky-600 hover:bg-sky-600 hover:text-white'
                }`}
            >
                {i}
            </button>
        );
    }

    return <div className="mt-6 flex justify-center">{paginas}</div>;
}
