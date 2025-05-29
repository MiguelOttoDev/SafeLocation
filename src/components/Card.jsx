export default function Card({ icon: Icon, title, description }) {
    return (
      <div className="bg-white bg-opacity-95 shadow-md rounded-xl p-6 flex items-center space-x-6
        hover:shadow-xl transition-shadow duration-300 cursor-pointer max-w-md mx-auto">
        
        <div className="text-blue-600 text-5xl flex-shrink-0">
          <Icon />
        </div>
        
        <div className="text-left">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    );
  }
  