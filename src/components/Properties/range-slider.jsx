

import { useState } from 'react';

function RangeSlider({ min, max, label, unit = '', onChange }) {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue);
    setMinValue(value);
    onChange(value, maxValue);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue);
    setMaxValue(value);
    onChange(minValue, value);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-200">{label}</label>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <input
            type="number"
            value={minValue}
            onChange={handleMinChange}
            className="w-24 rounded-md bg-gray-800 px-2 py-1"
          />
          <span>-</span>
          <input
            type="number"
            value={maxValue}
            onChange={handleMaxChange}
            className="w-24 rounded-md bg-gray-800 px-2 py-1"
          />
          {unit}
        </div>
      </div>
      <div className="relative">
        <div className="h-2 rounded-full bg-gray-700">
          <div
            className="absolute h-2 rounded-full bg-blue-600"
            style={{
              left: `${((minValue - min) / (max - min)) * 100}%`,
              right: `${100 - ((maxValue - min) / (max - min)) * 100}%`,
            }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={handleMinChange}
          className="absolute inset-0 h-2 w-full appearance-none bg-transparent"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute inset-0 h-2 w-full appearance-none bg-transparent"
        />
      </div>
    </div>
  );
}

export default RangeSlider;
