import { useState } from 'react';
import SubNavBar from '../components/SubNavBar';
import moradoresData from '../../moradores.json';

import SearchForm from '../components/SearchForm';
import MoradorList from '../components/MoradorList';
import Pagination from '../components/Pagination';
import Notification from '../components/Notification';

export default function Busca() {
    const ITEMS_PER_PAGE = 10;

    const [moradores, setMoradores] = useState(moradoresData);
    const [nomeBusca, setNomeBusca] = useState('');
    const [moradorSelecionado, setMoradorSelecionado] = useState(null);
    const [mostrarMensagem, setMostrarMensagem] = useState(false);

    const [paginaAtual, setPaginaAtual] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(Math.ceil(moradores.length / ITEMS_PER_PAGE));

    const buscarMoradores = async (query) => {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1200));
        const queryLower = query.toLowerCase();
        const filtrados = moradoresData.filter(m =>
            m.nome.toLowerCase().split(' ').some(palavra => palavra.startsWith(queryLower))
        );

        setMoradores(filtrados);
        setPaginaAtual(1);
        setTotalPages(Math.ceil(filtrados.length / ITEMS_PER_PAGE));
        setMoradorSelecionado(null);
        setMostrarMensagem(false);
        setLoading(false);
    };

    const handleBuscar = (e) => {
        e.preventDefault();
        buscarMoradores(nomeBusca);
    };

    const handleSelecionar = (morador) => {
        setMoradorSelecionado(morador);
        setMostrarMensagem(true);
        setTimeout(() => {
            setMoradores(prev => prev.filter(m => m.id !== morador.id));
            setMostrarMensagem(false);

            const novosTotalPages = Math.ceil((moradores.length - 1) / ITEMS_PER_PAGE);
            setTotalPages(novosTotalPages);

            if (paginaAtual > novosTotalPages && novosTotalPages > 0) {
                setPaginaAtual(novosTotalPages);
            }
        }, 3000);
    };

    const reiniciarLista = () => {
        setMoradores(moradoresData);
        setPaginaAtual(1);
        setTotalPages(Math.ceil(moradoresData.length / ITEMS_PER_PAGE));
        setNomeBusca('');
        setMoradorSelecionado(null);
        setMostrarMensagem(false);
    };

    const moradoresPagina = moradores.slice(
        (paginaAtual - 1) * ITEMS_PER_PAGE,
        paginaAtual * ITEMS_PER_PAGE
    );

    return (
        <div className="flex flex-col items-center min-h-screen p-4 bg-gray-50">
            <SubNavBar />
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 p-2 mb-6 text-center">
                Busca de Pessoas
            </h2>

            <SearchForm
                nomeBusca={nomeBusca}
                setNomeBusca={setNomeBusca}
                onBuscar={handleBuscar}
                loading={loading}
            />

            <button
                onClick={reiniciarLista}
                className="mb-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
                disabled={loading}
            >
                Reiniciar Lista
            </button>

            <p className="mb-4 text-gray-700">
                Moradores restantes: <strong>{moradores.length}</strong>
            </p>

            <MoradorList moradores={moradoresPagina} onSelecionar={handleSelecionar} />

            <Pagination
                totalPages={totalPages}
                paginaAtual={paginaAtual}
                onPaginaChange={setPaginaAtual}
            />

            <Notification moradorSelecionado={moradorSelecionado} mostrarMensagem={mostrarMensagem} />
        </div>
    );
}
