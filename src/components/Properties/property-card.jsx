import { Heart } from 'lucide-react'

function PropertyCard({
  title,
  location,
  price,
  area,
  type,
  image,
  nearby,
  builder,
  isNew
}) {
  return (
    <div className="overflow-hidden rounded-lg bg-gray-800 shadow-lg">
      <div className="relative">
        <img src={image} alt={title} className="h-48 w-full object-cover" />
        <button className="absolute right-2 top-2 rounded-full bg-gray-900/50 p-2 text-white hover:bg-gray-900">
          <Heart className="h-5 w-5" />
        </button>
        {isNew && (
          <span className="absolute left-2 top-2 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
            NEW BOOKING
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-400">{location}</p>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-xl font-bold text-white">₹{price}</p>
            <p className="text-sm text-gray-400">{type}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-white">{area}</p>
            <p className="text-sm text-gray-400">Plot Area</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-300">Nearby:</p>
          <div className="mt-1 flex flex-wrap gap-2">
            {nearby.map((place, index) => (
              <span
                key={index}
                className="rounded-full bg-gray-700 px-2 py-1 text-xs text-gray-300"
              >
                {place}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">Builder</p>
            <p className="text-sm font-medium text-gray-300">{builder}</p>
          </div>
          <div className="flex gap-2">
            <button className="rounded-md border border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-500 hover:text-white">
              Brochure
            </button>
            <button className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">
              View Number
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
