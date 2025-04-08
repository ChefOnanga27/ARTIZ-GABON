export default function HighlightItem({ image, organization, title, description }) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-60 object-cover" />
        <div className="p-6 text-center">
          <p className="text-xs text-gray-500 uppercase">{organization}</p>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm mt-2">{description}</p>
          <button className="mt-4 px-4 py-2 text-xs font-bold border border-black rounded-md uppercase">
            {organization}
          </button>
        </div>
      </div>
    );
  }

