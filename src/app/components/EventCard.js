export default function EventCard({ image, title, date }) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase">Programmation</p>
          <h3 className="font-bold text-md mt-1">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{date}</p>
        </div>
      </div>
    );
  }
  