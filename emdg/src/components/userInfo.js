import React from "react";
import { PDFDownloadLink, Document, Page, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 30, fontFamily: "Helvetica" },
  title: { fontSize: 20, marginBottom: 10, textAlign: "center" },
  section: { marginBottom: 8 },
  label: { fontWeight: "bold" }
});

const UserInfo = ({ student, onBack }) => {
  if (!student) return <div className="max-w-lg mx-auto p-6">No student selected</div>;

  const PDFDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Student Profile</Text>
        <Text style={styles.section}><Text style={styles.label}>Name:</Text> {student.first_name} {student.last_name}</Text>
        <Text style={styles.section}><Text style={styles.label}>Degree:</Text> {student.degree_program}</Text>
        <Text style={styles.section}><Text style={styles.label}>Classification:</Text> {student.degree_classification}</Text>
        <Text style={styles.section}><Text style={styles.label}>Email:</Text> {student.email}</Text>
        <Text style={styles.section}><Text style={styles.label}>Gender:</Text> {student.gender}</Text>
      </Page>
    </Document>
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex justify-center">
        <h1 className="text-2xl font-bold text-center">Student Information</h1>
      </div>
      <div className="user-info-detail max-w-lg mx-auto p-6 flex flex-col items-center text-center">
      {student.avatar_url ? (
  <img
    src={student.avatar_url}
    alt="Avatar"
    className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white"
  />
) : (
  <div className="w-24 h-24 rounded-full bg-gray-700 mb-4 border-4 border-white flex items-center justify-center text-white text-sm">
    No Image
  </div>
)}

        <h2 className="text-xl font-bold">{student.first_name} {student.last_name}</h2>
        <p>Classification: {student.degree_classification}</p>
        <p>Degree: {student.degree_program}</p>
        <p>Email: {student.email}</p>
        <p>Gender: {student.gender}</p>

        <div className="mt-4 flex gap-2">
          <PDFDownloadLink
            document={<PDFDocument />}
            fileName="student_profile.pdf"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            {({ loading }) => loading ? "Loading PDF..." : "Download PDF"}
          </PDFDownloadLink>
          <button
            onClick={onBack}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Back to list
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;