import UniversityList from '/Users/danielle/Downloads/swe-group-pj-2/emdg/src/components/school.js';


const UniversityPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-bold mb-4 text-center">Schools Page</h1>
      <p className="text-lg text-gray-600 mb-10 text-center">
        Browse a list of Historically Black Colleges and Universities. Click a school to view details and filter by type.
      </p>
      <UniversityList />
    </div>
  );
};

export default UniversityPage;
