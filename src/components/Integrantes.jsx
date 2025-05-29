import { FaUser } from "react-icons/fa";

export default function Integrantes({ name, rm }) {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center space-y-4 min-w-[150px] min-h-[180px]">
            <div className="text-5xl text-blue-600">
                <FaUser />
            </div>
            <p className="text-lg font-semibold text-gray-900">{name}</p>
            <p className="text-sm text-gray-500">RM: {rm}</p>
        </div>
    )
}