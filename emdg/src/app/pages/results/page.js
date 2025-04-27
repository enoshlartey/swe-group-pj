"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import UserInfoDisplay from "../../../components/userInfoDisplay";
import UserInfo from "../../../components/userInfo";
import studentData from "../../../database/db.json";

const ResultsPage = () => {
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get('query') || "";
  
  const students = studentData.students;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchQuery, setSearchQuery] = useState(urlQuery);
  const resultsPerPage = 10;
  // Filter students based on search query first
  const filteredStudents = students.filter((student) =>
    `${student.first_name} ${student.last_name}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.degree_program.toLowerCase().includes(searchQuery.toLowerCase())
  )
  // Sort students alphabetically by last name, then first name
  .sort((a, b) => {
    // First compare by last name
    const lastNameComparison = a.last_name.localeCompare(b.last_name);
    
    // If last names are the same, compare by first name
    if (lastNameComparison === 0) {
      return a.first_name.localeCompare(b.first_name);
    }
    
    return lastNameComparison;
  });

  // Then paginate the filtered results
  const totalPages = Math.ceil(filteredStudents.length / resultsPerPage);
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = filteredStudents.slice(indexOfFirstResult, indexOfLastResult);
  
  // Reset to first page when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  const handleBackToList = () => {
    setSelectedStudent(null);
  };

  if (selectedStudent) {
    return <UserInfo student={selectedStudent} onBack={handleBackToList} />;
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex justify-center">
        <h1 className="text-2xl font-bold text-center">Who's your next pick?</h1>
      </div>

      <div className="flex justify-center p-4">
        <input
          type="text"
          placeholder="Search by name or degree..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded w-full max-w-lg"
        />
      </div>

      <div className="results grid grid-cols-1 gap-4 items-center justify-center px-8 pb-20">
        {currentResults.length > 0 ? (
          currentResults.map((student) => (
            <div key={student.id} onClick={() => handleStudentClick(student)} className="cursor-pointer hover:opacity-80">
              <UserInfoDisplay
                firstName={student.first_name}
                lastName={student.last_name}
                classification={student.degree_classification}
                degree={student.degree_program}
                avatarUrl={student.avatar_url}
              />
            </div>
          ))
        ) : (
          <div className="text-center py-8">No results found for "{searchQuery}"</div>
        )}

        {filteredStudents.length > 0 && (
          <div>
            <div className="pagination-controls w-full flex justify-between items-center mt-4">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="bg-gray-200 p-2 rounded-2xl px-3 cursor-pointer text-black disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="bg-gray-200 p-2 rounded-2xl px-3 cursor-pointer text-black disabled:opacity-50"
              >
                Next
              </button>
            </div>
            <div className="w-full flex justify-center mt-2">
              <span>Page {currentPage} of {totalPages}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsPage;
