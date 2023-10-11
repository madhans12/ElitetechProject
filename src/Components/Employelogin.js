import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Employelogin = () => {
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(false);
  const EmployeSignin = () => {
    if (UserName.trim() !== "username" && password.trim !== "password") {
      alert("incorrect username or password");
    } else {
      setActive(true);
    }
    setUserName("");
    setPassword("");
  };
  return (
    <div className="App">
      <h1>LIBRIAIN LOGIN</h1>
      <input
        type="text"
        placeholder="username"
        value={UserName}
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={EmployeSignin}>sign in</button>
      <p>
        New User?<Link to="/employesignup">Sign up</Link> using employee details
      </p>
      {active ? <Link to="/employelibrary">Employe Library</Link> : ""}
    </div>
  );
};

export default Employelogin;
