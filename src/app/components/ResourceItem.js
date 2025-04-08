export default function ResourceItem({ image, date, title, description }) {
    return (
      <div className="flex items-start space-x-4">
        <img src={image} alt={title} className="w-20 h-20 rounded-lg" />
        <div>
          <p className="text-gray-500 text-sm">{date}</p>
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    );
  }
  