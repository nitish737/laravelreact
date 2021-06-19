import React, { useState } from "react";
import "./signup.scss";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submitSignup() {
    let item = { name, email, password };
    let result = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();

    localStorage.setItem("user-info", JSON.stringify(result));
  }
  return (
    <React.Fragment>
      <div className="signup">
        <div className="wrapper">
          <div className="form-signup">
            <h2>signup</h2>
            <input
              type="text"
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />{" "}
            <br />
            <input
              type="text"
              placeholder="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />{" "}
            <br />
            <button onClick={submitSignup}>Signup</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
