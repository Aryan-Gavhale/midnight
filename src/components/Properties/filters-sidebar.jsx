import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { useState } from 'react';
import RangeSlider from './range-slider';

export default function FiltersSidebar() {
  const [expandedSections, setExpandedSections] = useState({
    type: true,
    area: true,
    budget: true,
    posted: true,
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className={`lg:w-72 w-full space-y-6 rounded-lg bg-gray-900 p-4 ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Applied Filters</h2>
        <button className="text-sm text-blue-400 hover:text-blue-500">Clear All</button>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="flex items-center gap-1 rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-400">
          Residential Land
          <button className="ml-1">
            <X className="h-4 w-4" />
          </button>
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <button
            onClick={() => toggleSection('type')}
            className="flex w-full items-center justify-between py-2"
          >
            <span className="font-medium text-white">Type of property</span>
            {expandedSections.type ? (
              <ChevronUp className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-400" />
            )}
          </button>
          {expandedSections.type && (
            <div className="mt-2 space-y-2">
              {['Residential Apartment', 'Residential Land', 'Independent House/Villa'].map(
                (type, index) => (
                  <label key={index} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-600 bg-gray-700 text-blue-500"
                    />
                    <span className="text-sm text-gray-300">{type}</span>
                  </label>
                )
              )}
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => toggleSection('area')}
            className="flex w-full items-center justify-between py-2"
          >
            <span className="font-medium text-white">Area</span>
            {expandedSections.area ? (
              <ChevronUp className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-400" />
            )}
          </button>
          {expandedSections.area && (
            <div className="mt-2">
              <RangeSlider
                min={0}
                max={4000}
                label="Area Range"
                unit="sq.ft"
                onChange={(min, max) => console.log(min, max)}
              />
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => toggleSection('budget')}
            className="flex w-full items-center justify-between py-2"
          >
            <span className="font-medium text-white">Budget</span>
            {expandedSections.budget ? (
              <ChevronUp className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-400" />
            )}
          </button>
          {expandedSections.budget && (
            <div className="mt-2">
              <RangeSlider
                min={0}
                max={100}
                label="Budget Range"
                unit="Cr"
                onChange={(min, max) => console.log(min, max)}
              />
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => toggleSection('posted')}
            className="flex w-full items-center justify-between py-2"
          >
            <span className="font-medium text-white">Posted by</span>
            {expandedSections.posted ? (
              <ChevronUp className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-400" />
            )}
          </button>
          {expandedSections.posted && (
            <div className="mt-2 space-y-2">
              {['Owner', 'Builder', 'Dealer', 'Featured Dealer'].map((type, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-600 bg-gray-700 text-blue-500"
                  />
                  <span className="text-sm text-gray-300">{type}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Toggle Sidebar for mobile */}
      <div className="lg:hidden flex justify-between items-center mt-6">
        <button
          className="text-white"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? 'Close Filters' : 'Open Filters'}
        </button>
      </div>
    </div>
  );
}
