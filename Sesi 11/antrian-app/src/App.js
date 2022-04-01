import "./App.css";
import React, { useState } from "react";

function App() {
  const [antrian, setAntrian] = useState([]);
  const [userInput, setUserInput] = useState("");
  const handleAntrikan = (e) => {
    e.preventDefault();
    if (userInput.length === 0) {
      alert("Please input the value");
    } else {
      setAntrian((oldArray) => [userInput, ...oldArray]);
      setUserInput("");
    }
  };
  const handleMajukan = () => {
    setAntrian(antrian.slice(0, antrian.length - 1));
  };
  return (
    <div className="App">
      <div className="heading-1">
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Simulasi Antrian
        </h1>
      </div>
      <div className="btn-style">
        <input
          type="text"
          autoFocus
          style={{ width: "300px" }}
          placeholder="Masukkan Nama"
          value={userInput}
          required
          onChange={(e) => setUserInput(e.target.value)}
        />
      </div>

      <div className="btn-style">
        <button onClick={handleAntrikan}>Antrikan</button>
        <button onClick={handleMajukan}>Majukan</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {antrian.length
          ? antrian.map((item, index) => {
              return (
                <div key={index}>
                  <div style={{ display: "flex" }}>
                    <p>{item}</p>
                    {index !== antrian.length - 1 ? <p> =&gt; </p> : null}
                  </div>
                </div>
              );
            })
          : "Antrian Kosong!"}
      </div>
    </div>
  );
}

export default App;
