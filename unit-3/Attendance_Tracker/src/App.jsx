import React, { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Jahnvi", status: "Absent" },
    { id: 2, name: "Priya", status: "Absent" },
    { id: 3, name: "Harini", status: "Absent" },
    { id: 4, name: "Gowtham", status: "Absent" },
    { id: 5, name: "Dharan", status: "Absent" },
    { id: 6, name: "Reya", status: "Absent" },
    { id: 7, name: "Aneesh", status: "Absent" },
    { id: 8, name: "Kavya", status: "Absent" },
    { id: 9, name: "Anjali", status: "Absent" },
    { id: 10, name: "Nandhini", status: "Absent" },
    { id: 11, name: "Pavithra", status: "Absent" },
    { id: 12, name: "Aishwarya", status: "Absent" },
    { id: 13, name: "Sneha", status: "Absent" },
    { id: 14, name: "Nethra", status: "Absent" },
    { id: 15, name: "Sanjana", status: "Absent" },
    { id: 16, name: "Vaishnavi", status: "Absent" },
    { id: 17, name: "Dakshini", status: "Absent" },
    { id: 18, name: "Shalini", status: "Absent" },
    { id: 19, name: "Meera", status: "Absent" },
    { id: 20, name: "Abinaya", status: "Absent" }
  ]);

  function markAttendance(id, status) {
    setStudents(
      students.map(function (student) {
        if (student.id === id) {
          return {
            ...student,
            status: status
          };
        }

        return student;
      })
    );
  }

  const presentCount = students.filter(
    (student) => student.status === "Present"
  ).length;

  const absentCount = students.filter(
    (student) => student.status === "Absent"
  ).length;

  return (
    <div className="container">

      <h1>Student Attendance Tracker</h1>
      <p className="subtitle">Mark today's attendance</p>

      {/* Summary */}

      <div className="summary">

        <div className="summary-card">
          <h3>Total Students</h3>
          <h2>{students.length}</h2>
        </div>

        <div className="summary-card present-card">
          <h3>Present</h3>
          <h2>{presentCount}</h2>
        </div>

        <div className="summary-card absent-card">
          <h3>Absent</h3>
          <h2>{absentCount}</h2>
        </div>

      </div>

      {/* Student List */}

      <div className="student-container">

        {students.map(function (student) {

          return (
            <div className="student-card" key={student.id}>

              <div className="student-info">

                <div className="icon">
                  👤
                </div>

                <div>
                  <h2>{student.name}</h2>

                  <p>
                    Status:{" "}
                    <span
                      className={
                        student.status === "Present"
                          ? "present"
                          : "absent"
                      }
                    >
                      {student.status}
                    </span>
                  </p>
                </div>

              </div>

              <div className="buttons">

                <button
                  className="present-btn"
                  onClick={() =>
                    markAttendance(student.id, "Present")
                  }
                >
                  ✓ Present
                </button>

                <button
                  className="absent-btn"
                  onClick={() =>
                    markAttendance(student.id, "Absent")
                  }
                >
                  ✕ Absent
                </button>

              </div>

            </div>
          );

        })}

      </div>

    </div>
  );
}

export default App;