import "./App.css";
import Navbar from "./Navbar";
import Textarea from "./Textarea";
import About from "./About";
import React, { useState } from "react";
import Alert from "./Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  let heading = "MyTextUtils";
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        {/* <Navbar mode={mode} toggleMode={toggleMode} /> */}
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          key={new Date()}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              exact
              path="/"
              element={
                <Textarea showAlert={showAlert} mode={mode} heading={heading} />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
