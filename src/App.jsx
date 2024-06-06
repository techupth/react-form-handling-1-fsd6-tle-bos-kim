import "./App.css";
import { useState } from "react";

function App() {
  const firstGreeting = "greeting Message";
  const [isGreeting, setGreeting] = useState(firstGreeting);
  
  const [getText, setText] = useState("");
  
  const updateText = () => {
    setGreeting(getText);
    setTimeout(() => {setGreeting(firstGreeting),setText("");}, 1500);

  }
  return (
    <div className="App">
      <div className="greeting-container">{isGreeting}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" value={getText} onChange={(event) => setText(event.target.value)}/>
      </div>

      <div className="buttons">
        <button onClick={updateText}>Update text</button>
      </div>
    </div>
  );
}

export default App;
