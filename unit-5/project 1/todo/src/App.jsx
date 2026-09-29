import { useEffect, useMemo, useState } from "react";
import "./App.css";

const initialTasks = [
  {
    id: 1,
    title: "Complete React Project",
    date: "2026-09-29",
    priority: "High",
    category: "College",
    completed: false,
  },
  {
    id: 2,
    title: "Study DSA Concepts",
    date: "2026-09-29",
    priority: "Medium",
    category: "Study",
    completed: true,
  },
  {
    id: 3,
    title: "Design Presentation",
    date: "2026-09-30",
    priority: "Low",
    category: "Project",
    completed: false,
  },
];

function App() {
  const [page, setPage] = useState("Dashboard");

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("focusflowTasks");
    return saved ? JSON.parse(saved) : initialTasks;
  });

  const [search, setSearch] = useState("");

  const [newTask, setNewTask] = useState({
    title: "",
    date: "2026-09-29",
    priority: "Medium",
    category: "Personal",
  });

  useEffect(() => {
    localStorage.setItem("focusflowTasks", JSON.stringify(tasks));
  }, [tasks]);

  const completed = tasks.filter((task) => task.completed).length;
  const pending = tasks.length - completed;

  const progress =
    tasks.length === 0
      ? 0
      : Math.round((completed / tasks.length) * 100);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [tasks, search]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = () => {
    if (!newTask.title.trim()) {
      alert("Please enter a task!");
      return;
    }

    const task = {
      id: Date.now(),
      ...newTask,
      completed: false,
    };

    setTasks([task, ...tasks]);

    setNewTask({
      title: "",
      date: "2026-09-29",
      priority: "Medium",
      category: "Personal",
    });
  };

  const menuItems = [
    ["Dashboard", "⌂"],
    ["Calendar", "▣"],
    ["All Tasks", "☷"],
    ["Completed", "✓"],
    ["About", "ⓘ"],
  ];

  return (
    <div className="app">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="brand">
          <div className="brand-logo">✦</div>

          <div>
            <h2>FocusFlow</h2>
            <span>Productivity Space</span>
          </div>
        </div>

        <div className="menu-title">WORKSPACE</div>

        <nav>
          {menuItems.map(([name, icon]) => (
            <button
              key={name}
              className={`menu-item ${
                page === name ? "active" : ""
              }`}
              onClick={() => setPage(name)}
            >
              <span>{icon}</span>
              {name}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">

          <div className="mini-progress">
            <div className="progress-header">
              <span>Today's Progress</span>
              <b>{progress}%</b>
            </div>

            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <p>Keep going ✨</p>
          </div>

          <div className="user-card">
            <div className="avatar">J</div>

            <div>
              <strong>Jahnvi</strong>
              <small>My Workspace</small>
            </div>

            <span>•••</span>
          </div>

        </div>
      </aside>


      {/* MAIN */}
      <main className="main">

        <header className="topbar">

          <div>
            <p className="small-label">MY WORKSPACE</p>

            <h1>
              {page === "Dashboard" && "Good Morning, Jahnvi 👋"}
              {page === "Calendar" && "Your Schedule"}
              {page === "All Tasks" && "All Your Tasks"}
              {page === "Completed" && "Completed Tasks"}
              {page === "About" && "About FocusFlow"}
            </h1>

            <p className="subtitle">
              Organize your day. Focus on what matters.
            </p>
          </div>

          <div className="date-box">
            📅 29 Sep 2026
          </div>

        </header>


        {/* DASHBOARD */}
        {page === "Dashboard" && (
          <Dashboard
            tasks={tasks}
            completed={completed}
            pending={pending}
            progress={progress}
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        )}


        {/* ALL TASKS */}
        {page === "All Tasks" && (
          <AllTasks
            tasks={filteredTasks}
            search={search}
            setSearch={setSearch}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        )}


        {/* COMPLETED */}
        {page === "Completed" && (
          <CompletedTasks
            tasks={tasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        )}


        {/* CALENDAR */}
        {page === "Calendar" && (
          <Calendar
            tasks={tasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        )}


        {/* ABOUT */}
        {page === "About" && <About />}

      </main>
    </div>
  );
}


/* ================= DASHBOARD ================= */

function Dashboard({
  tasks,
  completed,
  pending,
  progress,
  newTask,
  setNewTask,
  addTask,
  toggleTask,
  deleteTask,
}) {
  return (
    <section>

      {/* HERO */}
      <div className="hero">

        <div>
          <span className="hero-tag">
            ✦ YOUR PRODUCTIVITY SPACE
          </span>

          <h2>
            Plan your day.
            <br />
            Make it happen.
          </h2>

          <p>
            Turn your small plans into meaningful progress.
          </p>
        </div>

        <div className="hero-circle">
          ✓
        </div>

      </div>


      {/* STATS */}
      <div className="stats">

        <Stat
          icon="☷"
          title="Total Tasks"
          value={tasks.length}
          type="purple"
        />

        <Stat
          icon="◷"
          title="Pending"
          value={pending}
          type="orange"
        />

        <Stat
          icon="✓"
          title="Completed"
          value={completed}
          type="green"
        />

        <Stat
          icon="↗"
          title="Progress"
          value={`${progress}%`}
          type="blue"
        />

      </div>


      {/* ADD TASK + PROGRESS */}
      <div className="dashboard-grid">

        <div className="panel add-panel">

          <div className="panel-title">

            <div>
              <span className="section-label">
                NEW TASK
              </span>

              <h3>Create something productive</h3>
            </div>

            <span className="plus">+</span>

          </div>


          <input
            className="task-input"
            placeholder="What do you want to accomplish?"
            value={newTask.title}
            onChange={(e) =>
              setNewTask({
                ...newTask,
                title: e.target.value,
              })
            }
          />


          <div className="form-row">

            <div className="field">
              <label>Date</label>

              <input
                type="date"
                value={newTask.date}
                onChange={(e) =>
                  setNewTask({
                    ...newTask,
                    date: e.target.value,
                  })
                }
              />
            </div>


            <div className="field">
              <label>Priority</label>

              <select
                value={newTask.priority}
                onChange={(e) =>
                  setNewTask({
                    ...newTask,
                    priority: e.target.value,
                  })
                }
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>


            <div className="field">
              <label>Category</label>

              <select
                value={newTask.category}
                onChange={(e) =>
                  setNewTask({
                    ...newTask,
                    category: e.target.value,
                  })
                }
              >
                <option>Personal</option>
                <option>College</option>
                <option>Study</option>
                <option>Project</option>
              </select>
            </div>


            <button className="add-btn" onClick={addTask}>
              + Add Task
            </button>

          </div>

        </div>


        {/* PROGRESS */}
        <div className="panel progress-panel">

          <div className="section-label">
            YOUR PROGRESS
          </div>

          <div
            className="circle-progress"
            style={{
              "--progress": `${progress * 3.6}deg`,
            }}
          >
            <div>
              <strong>{progress}%</strong>
              <span>done</span>
            </div>
          </div>

          <h3>
            {progress === 100
              ? "Amazing work! 🎉"
              : "You're doing great!"}
          </h3>

          <p>
            {completed} of {tasks.length} tasks completed.
          </p>

        </div>

      </div>


      {/* RECENT TASKS */}
      <div className="panel recent-panel">

        <div className="recent-heading">

          <div>
            <span className="section-label">
              RECENT ACTIVITY
            </span>

            <h3>Your tasks</h3>
          </div>

          <span className="view-text">
            {tasks.length} tasks
          </span>

        </div>


        {tasks.slice(0, 5).map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}


        {tasks.length === 0 && (
          <div className="empty">
            No tasks yet. Create your first task ✨
          </div>
        )}

      </div>

    </section>
  );
}


/* ================= STAT ================= */

function Stat({ icon, title, value, type }) {
  return (
    <div className="stat-card">

      <div className={`stat-icon ${type}`}>
        {icon}
      </div>

      <div>
        <span>{title}</span>
        <strong>{value}</strong>
      </div>

    </div>
  );
}


/* ================= TASK ITEM ================= */

function TaskItem({
  task,
  toggleTask,
  deleteTask,
}) {
  return (
    <div
      className={`task-item ${
        task.completed ? "done" : ""
      }`}
    >

      <button
        className={`check ${
          task.completed ? "checked" : ""
        }`}
        onClick={() => toggleTask(task.id)}
      >
        {task.completed ? "✓" : ""}
      </button>


      <div className="task-info">

        <h4>{task.title}</h4>

        <div className="task-meta">

          <span>📅 {task.date}</span>

          <span>◈ {task.category}</span>

          <span
            className={`priority ${
              task.priority.toLowerCase()
            }`}
          >
            {task.priority}
          </span>

        </div>

      </div>


      <button
        className="delete"
        onClick={() => deleteTask(task.id)}
      >
        🗑
      </button>

    </div>
  );
}


/* ================= ALL TASKS ================= */

function AllTasks({
  tasks,
  search,
  setSearch,
  toggleTask,
  deleteTask,
}) {
  return (
    <section>

      <div className="page-heading">

        <div className="big-icon">
          ☷
        </div>

        <div>
          <h2>Everything in one place</h2>
          <p>
            Search, manage and organize your tasks.
          </p>
        </div>

      </div>


      <div className="search-box">
        🔍

        <input
          placeholder="Search your tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>


      <div className="panel task-list">

        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}

        {tasks.length === 0 && (
          <div className="empty">
            No matching tasks found 🔎
          </div>
        )}

      </div>

    </section>
  );
}


/* ================= COMPLETED ================= */

function CompletedTasks({
  tasks,
  toggleTask,
  deleteTask,
}) {
  const completedTasks = tasks.filter(
    (task) => task.completed
  );

  return (
    <section>

      <div className="completed-banner">

        <div className="trophy">
          🏆
        </div>

        <div>
          <h2>Achievement Zone</h2>

          <p>
            Look at everything you've already accomplished!
          </p>
        </div>

      </div>


      <div className="panel task-list">

        {completedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}

        {completedTasks.length === 0 && (
          <div className="empty">
            Complete a task and it will appear here 🎯
          </div>
        )}

      </div>

    </section>
  );
}


/* ================= CALENDAR ================= */

function Calendar({
  tasks,
  toggleTask,
  deleteTask,
}) {
  const selectedDate = "2026-09-29";

  const todayTasks = tasks.filter(
    (task) => task.date === selectedDate
  );

  return (
    <section>

      <div className="calendar-card">

        <div className="calendar-top">

          <div>

            <span className="section-label">
              SEPTEMBER 2026
            </span>

            <h2>29</h2>

            <p>
              Tuesday · Today's schedule
            </p>

          </div>

          <div className="calendar-symbol">
            📅
          </div>

        </div>


        <div className="week">

          <div>
            MON
            <span>28</span>
          </div>

          <div className="today">
            TUE
            <span>29</span>
          </div>

          <div>
            WED
            <span>30</span>
          </div>

          <div>
            THU
            <span>01</span>
          </div>

          <div>
            FRI
            <span>02</span>
          </div>

          <div>
            SAT
            <span>03</span>
          </div>

          <div>
            SUN
            <span>04</span>
          </div>

        </div>

      </div>


      <div className="panel">

        <div className="recent-heading">

          <div>
            <span className="section-label">
              TODAY
            </span>

            <h3>
              Tasks for September 29
            </h3>
          </div>

          <span className="view-text">
            {todayTasks.length} tasks
          </span>

        </div>


        {todayTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}


        {todayTasks.length === 0 && (
          <div className="empty">
            No tasks scheduled for today.
          </div>
        )}

      </div>

    </section>
  );
}


/* ================= ABOUT ================= */

function About() {
  return (
    <section>

      <div className="about-hero">

        <div className="about-logo">
          ✦
        </div>

        <h2>FocusFlow</h2>

        <p>
          A simple and modern productivity workspace
          designed to help you organize tasks,
          track progress and stay focused.
        </p>

      </div>


      <div className="feature-grid">

        <Feature
          icon="📅"
          title="Smart Planning"
          text="Organize tasks according to date and priority."
        />

        <Feature
          icon="🎯"
          title="Stay Focused"
          text="Keep important tasks visible and manageable."
        />

        <Feature
          icon="📊"
          title="Track Progress"
          text="See your completed task percentage instantly."
        />

        <Feature
          icon="💾"
          title="Auto Save"
          text="Your tasks remain saved even after refresh."
        />

      </div>


      <div className="about-note">

        <strong>
          💡 Built for productivity
        </strong>

        <p>
          FocusFlow helps students and professionals
          turn everyday plans into completed goals.
        </p>

      </div>

    </section>
  );
}


/* ================= FEATURE ================= */

function Feature({ icon, title, text }) {
  return (
    <div className="feature">

      <span>{icon}</span>

      <h3>{title}</h3>

      <p>{text}</p>

    </div>
  );
}

export default App;