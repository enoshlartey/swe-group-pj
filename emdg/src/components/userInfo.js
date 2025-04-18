import React, { useState } from "react";
import UserInfoDisplay from "./userInfoDisplay";
import studentData from "../data/studentData";
import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";

const InfoCard = () => {
    const [selectedStudent, setSelectedStudent] = useState(null);

    const handleCardClick = (student) => {
        setSelectedStudent(student);
    };

    const PDFDocument = () => (
        <Document>
            <Page>
                <Text style={{ fontSize: 18, marginBottom: 10 }}>Student Profile</Text>
                {selectedStudent ? (
                    <div className="user-info-detail">
                        <Text style={{ fontSize: 16 }}>Name: {selectedStudent.first_name} {selectedStudent.last_name}</Text>
                        <Text>Classification: {selectedStudent.degree_classification}</Text>
                        <Text>Degree: {selectedStudent.degree_program}</Text>
                        <Text>Email: {selectedStudent.email}</Text>
                        <Text>Gender: {selectedStudent.gender}</Text>
                    </div>
                ) : (
                    <Text>No student selected</Text>
                )}
            </Page>
        </Document>
    );

    return (
        <div className="max-w-lg mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">Who's your next pick?</h1>

            {selectedStudent ? (
                <div className="user-info-detail">
                    <h2 className="text-xl font-bold">{selectedStudent.first_name} {selectedStudent.last_name}</h2>
                    <p>Classification: {selectedStudent.degree_classification}</p>
                    <p>Degree: {selectedStudent.degree_program}</p>
                    <p>Email: {selectedStudent.email}</p>
                    <p>Gender: {selectedStudent.gender}</p>
                    <PDFDownloadLink document={<PDFDocument />} fileName="student_profile.pdf">
                        {({ loading }) =>
                            loading ? "Loading PDF..." : "Download PDF"
                        }
                    </PDFDownloadLink>a
                    <button onClick={() => setSelectedStudent(null)} className="mt-4 text-blue-500">Back to list</button>
                </div>
            ) : (
                studentData.map((student) => (
                    <UserInfoDisplay
                        key={student.id}
                        firstName={student.first_name}
                        lastName={student.last_name}
                        classification={student.degree_classification}
                        degree={student.degree_program}
                        onClick={() => handleCardClick(student)} 
                    />
                ))
            )}

            <p className="text-sm text-gray-500 mt-4 text-center">Click on a student card to see more details</p>
        </div>
    );
};

export default InfoCard;
