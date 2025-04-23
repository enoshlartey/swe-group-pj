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
      // Static fallback university data
      const data = {
        "Universities": [
          {
            "id": 1,
            "name": "Alabama A&M University",
            "location": "Normal, AL",
            "type": "Public"
          },
          {
            "id": 2,
            "name": "Alabama State University",
            "location": "Montgomery, AL",
            "type": "Public"
          },
          {
            "id": 3,
            "name": "Albany State University",
            "location": "Albany, GA",
            "type": "Public"
          },
          {
            "id": 4,
            "name": "Alcorn State University",
            "location": "Lorman, MS",
            "type": "Public"
          },
          {
            "id": 5,
            "name": "Allen University",
            "location": "Columbia, SC",
            "type": "Private"
          },
          {
            "id": 6,
            "name": "American Baptist College",
            "location": "Nashville, TN",
            "type": "Private"
          },
          {
            "id": 7,
            "name": "Arkansas Baptist College",
            "location": "Little Rock, AR",
            "type": "Private"
          },
          {
            "id": 8,
            "name": "Benedict College",
            "location": "Columbia, SC",
            "type": "Private"
          },
          {
            "id": 9,
            "name": "Bennett College",
            "location": "Greensboro, NC",
            "type": "Private"
          },
          {
            "id": 10,
            "name": "Bethune-Cookman University",
            "location": "Daytona Beach, FL",
            "type": "Private"
          },
          {
            "id": 11,
            "name": "Bishop State Community College",
            "location": "Mobile, AL",
            "type": "Public"
          },
          {
            "id": 12,
            "name": "Bluefield State University",
            "location": "Bluefield, WV",
            "type": "Public"
          },
          {
            "id": 13,
            "name": "Bowie State University",
            "location": "Bowie, MD",
            "type": "Public"
          },
          {
            "id": 14,
            "name": "Central State University",
            "location": "Wilberforce, OH",
            "type": "Public"
          },
          {
            "id": 15,
            "name": "Cheyney University of Pennsylvania",
            "location": "Cheyney, PA",
            "type": "Public"
          },
          {
            "id": 16,
            "name": "Claflin University",
            "location": "Orangeburg, SC",
            "type": "Private"
          },
          {
            "id": 17,
            "name": "Clark Atlanta University",
            "location": "Atlanta, GA",
            "type": "Private"
          },
          {
            "id": 18,
            "name": "Coppin State University",
            "location": "Baltimore, MD",
            "type": "Public"
          },
          {
            "id": 19,
            "name": "Delaware State University",
            "location": "Dover, DE",
            "type": "Public"
          },
          {
            "id": 20,
            "name": "Denmark Technical College",
            "location": "Denmark, SC",
            "type": "Public"
          },
          {
            "id": 21,
            "name": "Dillard University",
            "location": "New Orleans, LA",
            "type": "Private"
          },
          {
            "id": 22,
            "name": "Edward Waters University",
            "location": "Jacksonville, FL",
            "type": "Private"
          },
          {
            "id": 23,
            "name": "Elizabeth City State University",
            "location": "Elizabeth City, NC",
            "type": "Public"
          },
          {
            "id": 24,
            "name": "Fayetteville State University",
            "location": "Fayetteville, NC",
            "type": "Public"
          },
          {
            "id": 25,
            "name": "Fisk University",
            "location": "Nashville, TN",
            "type": "Private"
          },
          {
            "id": 26,
            "name": "Florida A&M University",
            "location": "Tallahassee, FL",
            "type": "Public"
          },
          {
            "id": 27,
            "name": "Florida Memorial University",
            "location": "Miami Gardens, FL",
            "type": "Private"
          },
          {
            "id": 28,
            "name": "Fort Valley State University",
            "location": "Fort Valley, GA",
            "type": "Public"
          },
          {
            "id": 29,
            "name": "Grambling State University",
            "location": "Grambling, LA",
            "type": "Public"
          },
          {
            "id": 30,
            "name": "Hampton University",
            "location": "Hampton, VA",
            "type": "Private"
          },
          {
            "id": 31,
            "name": "Harris-Stowe State University",
            "location": "St. Louis, MO",
            "type": "Public"
          },
          {
            "id": 32,
            "name": "Howard University",
            "location": "Washington, DC",
            "type": "Private"
          },
          {
            "id": 33,
            "name": "Huston-Tillotson University",
            "location": "Austin, TX",
            "type": "Private"
          },
          {
            "id": 34,
            "name": "Interdenominational Theological Center",
            "location": "Atlanta, GA",
            "type": "Private"
          },
          {
            "id": 35,
            "name": "Jackson State University",
            "location": "Jackson, MS",
            "type": "Public"
          },
          {
            "id": 36,
            "name": "Jarvis Christian University",
            "location": "Hawkins, TX",
            "type": "Private"
          },
          {
            "id": 37,
            "name": "Johnson C. Smith University",
            "location": "Charlotte, NC",
            "type": "Private"
          },
          {
            "id": 38,
            "name": "Kentucky State University",
            "location": "Frankfort, KY",
            "type": "Public"
          },
          {
            "id": 40,
            "name": "Langston University",
            "location": "Langston, OK",
            "type": "Public"
          },
          {
            "id": 41,
            "name": "Lawson State Community College",
            "location": "Birmingham, AL",
            "type": "Public"
          },
          {
            "id": 42,
            "name": "LeMoyne-Owen College",
            "location": "Memphis, TN",
            "type": "Private"
          },
          {
            "id": 43,
            "name": "Lincoln University of Missouri",
            "location": "Jefferson City, MO",
            "type": "Public"
          },
          {
            "id": 44,
            "name": "Lincoln University of Pennsylvania",
            "location": "Lincoln University, PA",
            "type": "Public"
          },
          {
            "id": 45,
            "name": "Livingstone College",
            "location": "Salisbury, NC",
            "type": "Private"
          },
          {
            "id": 46,
            "name": "Meharry Medical College",
            "location": "Nashville, TN",
            "type": "Private"
          },
          {
            "id": 47,
            "name": "Miles College",
            "location": "Fairfield, AL",
            "type": "Private"
          },
          {
            "id": 48,
            "name": "Mississippi Valley State University",
            "location": "Itta Bena, MS",
            "type": "Public"
          },
          {
            "id": 49,
            "name": "Morehouse College",
            "location": "Atlanta, GA",
            "type": "Private"
          },
          {
            "id": 50,
            "name": "Morehouse School of Medicine",
            "location": "Atlanta, GA",
            "type": "Private"
          },
          {
            "id": 51,
            "name": "Morgan State University",
            "location": "Baltimore, MD",
            "type": "Public"
          },
          {
            "id": 52,
            "name": "Morris Brown College",
            "location": "Atlanta, GA",
            "type": "Private"
          },
          {
            "id": 53,
            "name": "Morris College",
            "location": "Sumter, SC",
            "type": "Private"
          },
          {
            "id": 54,
            "name": "Norfolk State University",
            "location": "Norfolk, VA",
            "type": "Public"
          },
          {
            "id": 55,
            "name": "North Carolina A&T State University",
            "location": "Greensboro, NC",
            "type": "Public"
          },
          {
            "id": 56,
            "name": "North Carolina Central University",
            "location": "Durham, NC",
            "type": "Public"
          },
          {
            "id": 57,
            "name": "Oakwood University",
            "location": "Huntsville, AL",
            "type": "Private"
          },
          {
            "id": 58,
            "name": "Paine College",
            "location": "Augusta, GA",
            "type": "Private"
          },
          {
            "id": 59,
            "name": "Paul Quinn College",
            "location": "Dallas, TX",
            "type": "Private"
          },
          {
            "id": 60,
            "name": "Philander Smith College",
            "location": "Little Rock, AR",
            "type": "Private"
          },
          {
            "id": 61,
            "name": "Prairie View A&M University",
            "location": "Prairie View, TX",
            "type": "Public"
          },
          {
            "id": 62,
            "name": "Rust College",
            "location": "Holly Springs, MS",
            "type": "Private"
          },
          {
            "id": 63,
            "name": "Savannah State University",
            "location": "Savannah, GA",
            "type": "Public"
          },
          {
            "id": 64,
            "name": "Selma University",
            "location": "Selma, AL",
            "type": "Private"
          },
          {
            "id": 65,
            "name": "Shaw University",
            "location": "Raleigh, NC",
            "type": "Private"
          },
          {
            "id": 66,
            "name": "Shorter College",
            "location": "North Little Rock, AR",
            "type": "Private"
          },
          {
            "id": 67,
            "name": "Simmons College of Kentucky",
            "location": "Louisville, KY",
            "type": "Private"
          },
          {
            "id": 68,
            "name": "South Carolina State University",
            "location": "Orangeburg, SC",
            "type": "Public"
          },
          {
            "id": 69,
            "name": "Southern University and A&M College",
            "location": "Baton Rouge, LA",
            "type": "Public"
          },
          {
            "id": 70,
            "name": "Southern University at New Orleans",
            "location": "New Orleans, LA",
            "type": "Public"
          },
          {
            "id": 71,
            "name": "Southern University at Shreveport",
            "location": "Shreveport, LA",
            "type": "Public"
          },
          {
            "id": 72,
            "name": "Spelman College",
            "location": "Atlanta, GA",
            "type": "Private"
          },
          {
            "id": 73,
            "name": "St. Augustine's University",
            "location": "Raleigh, NC",
            "type": "Private"
          },
          {
            "id": 74,
            "name": "St. Philip's College",
            "location": "San Antonio, TX",
            "type": "Public"
          },
          {
            "id": 75,
            "name": "Stillman College",
            "location": "Tuscaloosa, AL",
            "type": "Private"
          },
          {
            "id": 76,
            "name": "Talladega College",
            "location": "Talladega, AL",
            "type": "Private"
          },
          {
            "id": 77,
            "name": "Tennessee State University",
            "location": "Nashville, TN",
            "type": "Public"
          },
          {
            "id": 78,
            "name": "Texas College",
            "location": "Tyler, TX",
            "type": "Private"
          },
          {
            "id": 79,
            "name": "Texas Southern University",
            "location": "Houston, TX",
            "type": "Public"
          },
          {
            "id": 80,
            "name": "Tougaloo College",
            "location": "Tougaloo, MS",
            "type": "Private"
          },
          {
            "id": 81,
            "name": "Tuskegee University",
            "location": "Tuskegee, AL",
            "type": "Private"
          },
          {
            "id": 82,
            "name": "University of Arkansas at Pine Bluff",
            "location": "Pine Bluff, AR",
            "type": "Public"
          },
          {
            "id": 83,
            "name": "University of Maryland Eastern Shore",
            "location": "Princess Anne, MD",
            "type": "Public"
          },
          {
            "id": 84,
            "name": "University of the District of Columbia",
            "location": "Washington, DC",
            "type": "Public"
          },
          {
            "id": 85,
            "name": "Virginia State University",
            "location": "Petersburg, VA",
            "type": "Public"
          },
          {
            "id": 86,
            "name": "Virginia Union University",
            "location": "Richmond, VA",
            "type": "Private"
          },
          {
            "id": 87,
            "name": "Virginia University of Lynchburg",
            "location": "Lynchburg, VA",
            "type": "Private"
          },
          {
            "id": 88,
            "name": "Voorhees University",
            "location": "Denmark, SC",
            "type": "Private"
          },
          {
            "id": 89,
            "name": "West Virginia State University",
            "location": "Institute, WV",
            "type": "Public"
          },
          {
            "id": 90,
            "name": "Wilberforce University",
            "location": "Wilberforce, OH",
            "type": "Private"
          },
          {
            "id": 91,
            "name": "Wiley College",
            "location": "Marshall, TX",
            "type": "Private"
          },
          {
            "id": 92,
            "name": "Winston-Salem State University",
            "location": "Winston-Salem, NC",
            "type": "Public"
          },
          {
            "id": 93,
            "name": "Xavier University of Louisiana",
            "location": "New Orleans, LA",
            "type": "Private"
          }
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
