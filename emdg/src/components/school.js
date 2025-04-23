"use client";
import { useState, useEffect } from 'react';

export default function UniversityList({ initialData = null }) {
  const [universities, setUniversities] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (initialData) {
      setUniversities(initialData.Universities || []);
      setLoading(false);
    } else {
      const data = {
        "Universities": [
          // (Data remains the same as in your original post)
        ]
      };
      setUniversities(data.Universities || []);
      setLoading(false);
    }
  }, [initialData]);

  const handleUniversityClick = (university) => {
    setSelectedUniversity(university);
  };

  const handleBack = () => {
    setSelectedUniversity(null);
  };

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  const filteredUniversities = universities.filter(university => {
    if (filter === 'all') return true;
    return university.type === filter;
  });

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading universities...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      {selectedUniversity ? (
        <div className="bg-white rounded-lg shadow p-6">
          <button 
            onClick={handleBack}
            className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded"
          >
            ← Back to List
          </button>
          <h1 className="text-3xl font-bold mb-2 text-black">{selectedUniversity.name}</h1>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              selectedUniversity.type === 'Public' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
            }`}>
              {selectedUniversity.type}
            </span>
            <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm font-medium">
              {selectedUniversity.location}
            </span>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-black">Location</h2>
            <p className="text-black">{selectedUniversity.location}</p>
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6 text-center text-white">
            Historically Black Colleges and Universities
          </h1>

          {/* Filter Buttons */}
          <div className="mb-6 flex justify-center">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              {['all', 'Public', 'Private'].map(type => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleFilterChange(type)}
                  className={`px-4 py-2 text-sm font-medium ${
                    filter === type 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-black hover:bg-gray-100'
                  } ${type === 'all' ? 'rounded-l-lg' : type === 'Private' ? 'rounded-r-lg' : ''}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* University Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredUniversities.map((university) => (
              <div 
                key={university.id}
                onClick={() => handleUniversityClick(university)}
                className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow"
              >
                <h2 className="text-lg font-semibold mb-2 text-black">{university.name}</h2>
                <div className="flex justify-between items-center">
                  <p className="text-black text-sm">{university.location}</p>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    university.type === 'Public' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                  }`}>
                    {university.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
