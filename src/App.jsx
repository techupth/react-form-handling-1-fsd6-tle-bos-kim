import { useState } from "react";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("Greeting Message");
  const [newGreeting, setNewGreeting] = useState("");

  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={newGreeting}
          onChange={(event) => {
            setNewGreeting(event.target.value);
          }}
        />
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            setGreeting(newGreeting);
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
