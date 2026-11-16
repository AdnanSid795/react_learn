
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Connecting...");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => {
        console.error(error);
        setMessage("Backend connection failed!");
      });
  }, []);

  return (
    <div>
      <h1>React + Node.js Application</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
