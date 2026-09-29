import React, { useEffect, useState } from "react";
import "./App.css";

const profile = {
  name: "Jahnvi",
  shortName: "Janu",
  role: "Frontend Developer",
  email: "im.jahnvi15@gmail.com",

  intro:
    "I create modern, responsive and visually engaging websites with clean code and creative user experiences.",

  about:
    "I'm Jahnvi, a passionate frontend developer who enjoys turning ideas into beautiful digital experiences. I love creating clean interfaces, experimenting with modern designs and learning new technologies.",

  skills: [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 82 },
    { name: "Java", level: 75 },
    { name: "UI / UX", level: 78 },
  ],

  projects: [
    {
      no: "01",
      title: "Creative Portfolio",
      type: "WEB DESIGN",
      description:
        "A modern personal portfolio designed with a creative interface, responsive layout and smooth interactions.",
      tech: ["React", "CSS", "JavaScript"],
    },
    {
      no: "02",
      title: "Smart Calculator",
      type: "WEB APPLICATION",
      description:
        "A clean and interactive calculator application with a simple interface and responsive design.",
      tech: ["React", "CSS"],
    },
    {
      no: "03",
      title: "Student Dashboard",
      type: "UI / FRONTEND",
      description:
        "A responsive dashboard concept focused on clean information presentation and easy navigation.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ],

  journey: [
    {
      year: "2026",
      title: "Frontend Development",
      subtitle: "Creative Web Projects",
      text: "Building modern React interfaces and exploring creative UI experiences.",
    },
    {
      year: "2025",
      title: "Web Development",
      subtitle: "Learning & Projects",
      text: "Developing projects using HTML, CSS, JavaScript and Java.",
    },
  ],
};

function App() {
  const [active, setActive] = useState("home");
  const [menu, setMenu] = useState(false);
  const [light, setLight] = useState(false);

  const sections = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenu(false);
  };

  return (
    <div className={light ? "app light" : "app"}>

      {/* BACKGROUND */}
      <div className="glow glow-purple"></div>
      <div className="glow glow-pink"></div>
      <div className="glow glow-blue"></div>

      {/* NAVBAR */}
      <header className="navbar">

        <div className="brand" onClick={() => goTo("home")}>
          <div className="brand-icon">J</div>
          <span>Jahnvi</span>
        </div>

        <nav className={menu ? "nav open" : "nav"}>
          {sections.map((item) => (
            <button
              key={item}
              className={active === item ? "nav-active" : ""}
              onClick={() => goTo(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="theme"
            onClick={() => setLight(!light)}
          >
            {light ? "☾" : "☀"}
          </button>

          <button
            className="hamburger"
            onClick={() => setMenu(!menu)}
          >
            ☰
          </button>
        </div>

      </header>


      {/* ================= HOME ================= */}

      <section id="home" className="hero section">

        <div className="hero-left">

          <div className="available">
            <span></span>
            Available for opportunities
          </div>

          <p className="hello">HELLO, I'M</p>

          <h1>
            Jahnvi
            <br />
            <span>creates.</span>
          </h1>

          <div className="role">
            <i></i>
            {profile.role}
          </div>

          <p className="hero-text">
            {profile.intro}
          </p>

          <div className="hero-buttons">

            <button
              className="main-btn"
              onClick={() => goTo("projects")}
            >
              Explore My Work
              <b>↗</b>
            </button>

            <button
              className="outline-btn"
              onClick={() => goTo("contact")}
            >
              Let's Connect
            </button>

          </div>

        </div>


        {/* CREATIVE ORBIT */}

        <div className="creative-area">

          <div className="ring ring-one"></div>
          <div className="ring ring-two"></div>
          <div className="ring ring-three"></div>

          <div className="center-orb">
            <strong>J</strong>
            <small>JANU</small>
          </div>

          <div className="floating-tag tag-one">
            ✦ Creative
          </div>

          <div className="floating-tag tag-two">
            &lt;/&gt; React
          </div>

          <div className="floating-tag tag-three">
            ◇ UI/UX
          </div>

          <div className="dot dot-one"></div>
          <div className="dot dot-two"></div>
          <div className="dot dot-three"></div>

        </div>

        <div className="scroll">
          <span></span>
          SCROLL TO EXPLORE
        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section id="about" className="section">

        <div className="heading">
          <p>01 / ABOUT</p>
          <h2>
            A little bit
            <br />
            <span>about me.</span>
          </h2>
        </div>

        <div className="about-layout">

          <div className="about-content">

            <h3>
              I build interfaces that are
              <span> simple, creative & memorable.</span>
            </h3>

            <p>
              {profile.about}
            </p>

            <div className="stats">

              <div>
                <strong>∞</strong>
                <small>Curiosity</small>
              </div>

              <div>
                <strong>24/7</strong>
                <small>Learning</small>
              </div>

              <div>
                <strong>100%</strong>
                <small>Passion</small>
              </div>

            </div>

          </div>

          <div className="about-card">

            <span className="small-label">
              CURRENTLY FOCUSED ON
            </span>

            <h3>
              Creating
              <br />
              <span>digital magic.</span>
            </h3>

            <p>
              Modern frontend development,
              responsive design, creative animations
              and meaningful user experiences.
            </p>

            <div className="chips">
              <span>DESIGN</span>
              <span>CODE</span>
              <span>CREATE</span>
            </div>

            <div className="card-shape"></div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section id="skills" className="section">

        <div className="heading">
          <p>02 / SKILLS</p>
          <h2>
            My creative
            <br />
            <span>toolbox.</span>
          </h2>
        </div>

        <div className="skills-layout">

          <div className="skill-intro">
            <strong>06</strong>

            <p>
              Technologies I use to bring ideas
              from imagination to the browser.
            </p>
          </div>

          <div className="skill-list">

            {profile.skills.map((skill, index) => (
              <div className="skill" key={skill.name}>

                <div className="skill-header">
                  <span>
                    <small>0{index + 1}</small>
                    {skill.name}
                  </span>

                  <b>{skill.level}%</b>
                </div>

                <div className="bar">
                  <div
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section">

        <div className="heading project-heading">

          <div>
            <p>03 / PROJECTS</p>
            <h2>
              Things I've
              <br />
              <span>created.</span>
            </h2>
          </div>

          <p>
            A few projects where design,
            creativity and code come together.
          </p>

        </div>


        <div className="projects">

          {profile.projects.map((project) => (
            <article
              className="project"
              key={project.no}
            >

              <div className="project-number">
                {project.no}
              </div>

              <div className="project-details">

                <span>{project.type}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech">
                  {project.tech.map((item) => (
                    <em key={item}>{item}</em>
                  ))}
                </div>

              </div>

              <div className="project-arrow">
                ↗
              </div>

            </article>
          ))}

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section id="experience" className="section">

        <div className="heading">
          <p>04 / EXPERIENCE</p>
          <h2>
            My learning
            <br />
            <span>journey.</span>
          </h2>
        </div>

        <div className="timeline">

          {profile.journey.map((item, index) => (
            <div className="timeline-item" key={index}>

              <div className="year">
                {item.year}
              </div>

              <div className="timeline-line">
                <span></span>
              </div>

              <div className="journey-content">

                <small>{item.subtitle}</small>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section id="contact" className="section contact">

        <div className="contact-card">

          <div className="contact-glow"></div>

          <p>05 / CONTACT</p>

          <h2>
            Let's create
            <br />
            something <span>beautiful.</span>
          </h2>

          <p className="contact-text">
            Have an idea or want to connect?
            My inbox is always open.
          </p>

          <a
            className="email"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
            <span>↗</span>
          </a>

          <div className="contact-bottom">

            <div>
              <small>NAME</small>
              <strong>Jahnvi</strong>
            </div>

            <div>
              <small>ROLE</small>
              <strong>Frontend Developer</strong>
            </div>

            <div>
              <small>STATUS</small>
              <strong>Open to Opportunities</strong>
            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer>

        <div className="footer-brand">
          <span>J</span>
          Jahnvi
        </div>

        <p>
          Designed & developed by Jahnvi ✦
        </p>

        <button onClick={() => goTo("home")}>
          ↑
        </button>

      </footer>

    </div>
  );
}

export default App;