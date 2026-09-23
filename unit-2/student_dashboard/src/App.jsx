import React from "react";
import "./App.css";

function App() {
  return (
    <div className="page">

      <header className="header">
        <h1>STUDENT DASHBOARD</h1>
        <p>Welcome to My Portfolio</p>
      </header>

      <section className="profile">
        <h2>Profile</h2>

        <div className="profile-details">
          <p><b>Name:</b> Jahnvi R</p>
          <p><b>Age:</b> 18</p>
          <p>
            <b>College:</b> Prince Dr. K. Vasudevan College of
            Engineering and Technology
          </p>
          <p>
            <b>Department:</b> B.E Computer Science Engineering
          </p>
        </div>
      </section>

      <div className="two-section">

        <section className="card about">
          <h2>About Me</h2>
          <p>
            I am a passionate Computer Science Engineering student
            with a strong interest in web development, UI/UX design,
            Java and Python. I enjoy learning new technologies and
            improving my problem-solving skills.
          </p>
        </section>

        <section className="card skills">
          <h2>Technical Skills</h2>

          <div className="skill-list">
            <span>Java</span>
            <span>Python</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </section>

      </div>

      <section className="card goals">
        <h2>Goals</h2>

        <p>
          My career objective is to become a skilled Full Stack Developer
          and UI/UX Designer while continuously improving my technical
          and problem-solving skills.
        </p>
      </section>

      <section className="card contact">
        <h2>Contact Details</h2>

        <p><b>Email:</b> jahnvi@example.com</p>
        <p><b>Phone:</b> 9876543210</p>
        <p><b>GitHub:</b> github.com/jahnvi</p>
      </section>

      <footer>
        <p>Thank you for visiting my personal introduction page.</p>
      </footer>

    </div>
  );
}

export default App;