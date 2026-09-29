import React from "react";
import "./App.css";

const semester1Subjects = [
  {
    code: "24CS101",
    name: "Programming for Problem Solving",
    credits: "3",
    grade: "A+",
    result: "P",
  },
  {
    code: "24MA101",
    name: "Engineering Mathematics - I",
    credits: "4",
    grade: "A",
    result: "P",
  },
  {
    code: "24EN101",
    name: "Technical English - I",
    credits: "3",
    grade: "A+",
    result: "P",
  },
  {
    code: "24PH101",
    name: "Engineering Physics",
    credits: "3",
    grade: "A",
    result: "P",
  },
  {
    code: "24CH101",
    name: "Engineering Chemistry",
    credits: "3",
    grade: "A+",
    result: "P",
  },
  {
    code: "24CS151",
    name: "Programming Laboratory",
    credits: "2",
    grade: "S",
    result: "P",
  },
  {
    code: "24HS101",
    name: "Heritage of Tamils",
    credits: "1",
    grade: "S",
    result: "P",
  },
  {
    code: "24AC101",
    name: "Indian Constitution and Freedom Movement",
    credits: "0",
    grade: "A",
    result: "P",
  },
];

function App() {
  return (
    <div className="page">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        {/* Logo + Portal Name */}
        <div className="brand">

          <div className="brandLogo">
            <span>▣</span>
          </div>

          <div className="brandText">
            <h2>ACADEMIC PORTAL</h2>
            <p>Student results &amp; records</p>
          </div>

        </div>


        {/* Navigation */}
        <nav className="navLinks">

          <a className="active">
            Overview
          </a>

          <a>
            Semester 1
          </a>

          <a>
            Semester 2
          </a>

          <a>
            Full report
          </a>

        </nav>


        {/* Student User */}
        <div className="userArea">

          <div className="userDetails">
            <strong>JAHNVI R</strong>
            <span>411625149015</span>
          </div>

          <button className="logoutButton">
            ↪
          </button>

        </div>

      </header>


      {/* ================= MAIN ================= */}

      <main className="container">

        {/* Back */}
        <button className="backButton">
          ← &nbsp; Back to dashboard
        </button>


        {/* Page Heading */}
        <div className="pageHeading">

          <span>ACADEMIC RECORD</span>

          <h1>
            Student report card
          </h1>

        </div>


        {/* ================= COLLEGE CARD ================= */}

        <section className="collegeCard">

          <p className="official">
            OFFICIAL STUDENT RECORD
          </p>

          <h2>
            PRINCE DR. K. VASUDEVAN COLLEGE OF ENGINEERING AND TECHNOLOGY
          </h2>

          <span>
            Student Academic Report Card
          </span>

        </section>


        {/* ================= STUDENT DETAILS ================= */}

        <section className="studentDetails">

          <div className="detail">
            <label>Student name</label>
            <strong>JAHNVI R</strong>
          </div>

          <div className="detail">
            <label>Register number</label>
            <strong>411625149015</strong>
          </div>

          <div className="detail department">
            <label>Department</label>
            <strong>CSE Cyber Security</strong>
          </div>

          <div className="detail">
            <label>Year</label>
            <strong>2nd Year</strong>
          </div>

          <div className="detail">
            <label>Date of birth</label>
            <strong>15/11/2007</strong>
          </div>

        </section>


        {/* ================= SEMESTER 1 ================= */}

        <section className="semesterCard">

          <div className="semesterHeader">

            <h2>
              Semester 1
            </h2>

            <span className="passBadge">
              PASS
            </span>

          </div>


          {/* Table */}

          <div className="tableWrapper">

            <table>

              <thead>

                <tr>

                  <th>
                    SEMESTER
                  </th>

                  <th>
                    COURSE CODE
                  </th>

                  <th>
                    COURSE NAME
                  </th>

                  <th>
                    CREDITS
                  </th>

                  <th>
                    GRADE
                  </th>

                  <th>
                    RESULT
                  </th>

                </tr>

              </thead>


              <tbody>

                {semester1Subjects.map((subject, index) => (

                  <tr key={index}>

                    <td>
                      1SEM
                    </td>

                    <td>
                      {subject.code}
                    </td>

                    <td className="courseName">
                      {subject.name}
                    </td>

                    <td>
                      {subject.credits}
                    </td>

                    <td>
                      <span className="grade">
                        {subject.grade}
                      </span>
                    </td>

                    <td>
                      <span className="result">
                        {subject.result}
                      </span>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </section>


        {/* ================= SEMESTER 2 ================= */}

        <section className="semesterCard">

          <div className="semesterHeader">

            <h2>
              Semester 2
            </h2>

            <span className="notAvailable">
              NOT AVAILABLE
            </span>

          </div>

          <div className="semesterEmpty">

            Semester 2 results have not been published yet.

          </div>

        </section>


        {/* ================= FOOTER ================= */}

        <footer>

          <span>
            Academic Portal
          </span>

          <span>
            © 2026 Student Academic Records
          </span>

        </footer>

      </main>

    </div>
  );
}

export default App;