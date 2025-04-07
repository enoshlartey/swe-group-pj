"use client";

import React, { useState } from "react";
import UserInfoDisplay from "../../../components/userInfoDisplay";
import studentsData from "../../../database/db.json";

const ResultsPage = () => {
  const students = studentsData.students;
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = students.slice(indexOfFirstResult, indexOfLastResult);

  const totalPages = Math.ceil(students.length / resultsPerPage);

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

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex justify-center">
        <h1 className="text-2xl font-bold text-center">
          Who's your next pick?
        </h1>
      </div>
      <div className="results grid grid-cols-1 gap-4 items-center justify-center p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {currentResults.map((student) => (
          <UserInfoDisplay
            key={student.id}
            firstName={student.first_name}
            lastName={student.last_name}
            classification={student.degree_classification}
            degree={student.degree_program}
          />
        ))}

        <div>
          <div className="pagination-controls w-full flex justify-between items-center mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="bg-gray-200 p-2 rounded-2xl px-3 cursor-pointer text-black"
            >
              Previous
            </button>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="bg-gray-200 p-2 rounded-2xl px-3 cursor-pointer text-black"
            >
              Next
            </button>
          </div>
          <div className="w-full flex justify-center mt-2">
            <span>
              Page {currentPage} of {totalPages}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
