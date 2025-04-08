export default function ArticleCard({ image, date, category, title, description }) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="p-6">
          <p className="text-xs text-gray-500 uppercase">{date} • {category}</p>
          <h3 className="font-bold text-lg mt-2">{title}</h3>
          <p className="text-sm text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    );
  }
  