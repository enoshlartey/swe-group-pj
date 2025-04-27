import React from "react";

const UserInfoDisplay = ({ firstName, lastName, classification, degree }) => {
  return (
    <div className="cursor-pointer user-info p-4 border rounded-2xl shadow-md border-gray-200 w-full">      <div className="flex items-center mb-2 justify-center">
        <h2 className="text-xl font-bold text-center">
          {lastName}, {firstName}
        </h2>
      </div>

      <div className="flex flex-col">
        <div className="w-full flex justify-start">
          <p>Classification: {classification}</p>
        </div>

        <div className="w-full flex justify-end">
          <p>Degree: {degree}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfoDisplay;
