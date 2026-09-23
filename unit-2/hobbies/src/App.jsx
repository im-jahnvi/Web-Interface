import React from "react";
import "./App.css";

function HobbyCard({ image, title, description, icon }) {
  return (
    <div className="hobby-card">
      <div className="photo">
        <img src={image} alt={title} />
        <span className="icon">{icon}</span>
      </div>

      <div className="details">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

function App() {
  const hobbies = [
    {
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600",
      title: "Reading",
      description: "Lost in pages & stories.",
      icon: "📚"
    },
    {
      image:
        "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600",
      title: "Music",
      description: "My world has a soundtrack.",
      icon: "🎶"
    },
    {
      image:
        "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600",
      title: "Football",
      description: "Play. Passion. Repeat.",
      icon: "⚽"
    },
    {
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600",
      title: "Games",
      description: "Just one more game!",
      icon: "🎮"
    },
    {
      image:
        "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=600",
      title: "Photography",
      description: "Capturing little moments.",
      icon: "📸"
    },
    {
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600",
      title: "Cooking",
      description: "Creating magic in the kitchen.",
      icon: "🍰"
    }
  ];

  return (
    <div className="page">

      <div className="top">
        <span>♡ MY LITTLE WORLD ♡</span>
        <h1>Things I Love</h1>
        <p>A few things that make me happy ✨</p>
      </div>

      <div className="hobby-grid">
        {hobbies.map((hobby, index) => (
          <HobbyCard
            key={index}
            image={hobby.image}
            title={hobby.title}
            description={hobby.description}
            icon={hobby.icon}
          />
        ))}
      </div>

    </div>
  );
}

export default App;