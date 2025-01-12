import { Filter, MapPin } from 'lucide-react'
import FiltersSidebar from "./filters-sidebar"
import PropertyCard from "./property-card"
import img1 from "../../assets/prop1.jpg"
import img2 from "../../assets/prop2.jpg"
import img3 from "../../assets/prop3.jpg"
import img4 from "../../assets/prop4.jpg"

export default function PropertyListing() {
  const properties = [
    {
      title: "Emerald Gardens",
      location: "Hadapsar, Pune",
      price: "50.03 - 80.72 L",
      area: "13,067 sqft",
      type: "Land",
      image: img1,
      nearby: ["JSPM School", "City Hospital", "Metro Station"],
      builder: "Emerald Developers",
      isNew: true
    },
    {
      title: "Urban Oasis",
      location: "Theur, Pune",
      price: "42 L",
      area: "10,000 sqft",
      type: "Land",
      image: img2,
      nearby: ["International School", "Shopping Mall", "Park"],
      builder: "Urban Builders",
      isNew: true
    },
    {
      title: "Emerald Gardens",
      location: "Hadapsar, Pune",
      price: "50.03 - 80.72 L",
      area: "13,067 sqft",
      type: "Land",
      image: img3,
      nearby: ["JSPM School", "City Hospital", "Metro Station"],
      builder: "Emerald Developers",
      isNew: true
    },
    {
      title: "Urban Oasis",
      location: "Theur, Pune",
      price: "42 L",
      area: "10,000 sqft",
      type: "Land",
      image: img4,
      nearby: ["International School", "Shopping Mall", "Park"],
      builder: "Urban Builders",
      isNew: true
    },
    {
      title: "Emerald Gardens",
      location: "Hadapsar, Pune",
      price: "50.03 - 80.72 L",
      area: "13,067 sqft",
      type: "Land",
      image: img3,
      nearby: ["JSPM School", "City Hospital", "Metro Station"],
      builder: "Emerald Developers",
      isNew: true
    },
    {
      title: "Urban Oasis",
      location: "Theur, Pune",
      price: "42 L",
      area: "10,000 sqft",
      type: "Land",
      image: img4,
      nearby: ["International School", "Shopping Mall", "Park"],
      builder: "Urban Builders",
      isNew: true
    }
  ]

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-8 mb-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-blue-500" />
            <span className="text-sm text-gray-400">
              Get to know more about <span className="text-blue-400">Pune</span>
            </span>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">
              1923 results | Residential land & Plots in Pune for Sale
            </h1>
            <button className="flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-white hover:bg-gray-700">
              <Filter className="h-5 w-5" />
              Sort By
            </button>
          </div>
          <div className="mt-4 flex gap-4 overflow-x-auto py-2">
            {['NEW LAUNCH', 'Owner', 'Corner Property', 'East-Facing', 'North-Facing', 'Gated Society'].map(
              (filter, index) => (
                <span
                  key={index}
                  className="whitespace-nowrap rounded-full bg-gray-800 px-4 py-1.5 text-sm text-white"
                >
                  {filter}
                </span>
              )
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <FiltersSidebar />
          </div>
          <div className="lg:col-span-3">
            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
              {properties.map((property, index) => (
                <PropertyCard key={index} {...property} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

