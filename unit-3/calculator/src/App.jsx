import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setDisplay("");
    } 
    else if (value === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay("Error");
      }
    } 
    else {
      setDisplay((prev) => prev + value);
    }
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;

      if (
        /[0-9+\-*/.]/.test(key)
      ) {
        setDisplay((prev) => prev + key);
      }

      if (key === "Enter") {
        handleClick("=");
      }

      if (key === "Escape") {
        handleClick("C");
      }

      if (key === "Backspace") {
        setDisplay((prev) => prev.slice(0, -1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const buttons = [
    "C", "⌫", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
  ];

  return (
    <div className="page">
      <div className="calculator">

        <div className="title">
          <span>CALCULATOR</span>
          <small>Simple & Smart</small>
        </div>

        <div className="display-box">
          <div className="display">
            {display || "0"}
          </div>
        </div>

        <div className="buttons">
          {buttons.map((button) => (
            <button
              key={button}
              onClick={() => {
                if (button === "⌫") {
                  setDisplay((prev) => prev.slice(0, -1));
                } else if (button === "%") {
                  setDisplay((prev) => prev + "%");
                } else {
                  handleClick(button);
                }
              }}
              className={
                button === "C"
                  ? "clear"
                  : button === "="
                  ? "equal"
                  : ["+", "-", "*", "/"].includes(button)
                  ? "operator"
                  : ""
              }
            >
              {button}
            </button>
          ))}
        </div>

        <p className="hint">
          Type numbers using your keyboard
        </p>

      </div>
    </div>
  );
}

export default App;