const HowTo = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Main Content */}
      <main className="flex-grow p-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">How to Use EMDG-SWE</h2>
          <p className="text-lg text-gray-300 mb-12 text-center">
            Follow these simple steps to recruit top student talent on our platform.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-2">1. Search for Students</h3>
              <p className="text-gray-400">Search by Name, Major, and more to discover top talent.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-2">2. View Different Schools</h3>
              <p className="text-gray-400">Check out multiple universities and colleges participating in the platform.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-2">3. Click the Next Page Button</h3>
              <p className="text-gray-400">Easily browse 10 students at a time using the pagination system.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-2">4. Home/EMDG-SWE Button</h3>
              <p className="text-gray-400">After searching for a student, click the EMDG-SWE button to return to the search.</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-2xl font-bold animate-pulse">Find the next best talent today!</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HowTo;
