import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserLibrary from "./UserLibrary";

const Loginpage = () => {
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(false);
  const UserSignin = () => {
    if (UserName.trim() !== "username" && password.trim !== "password") {
      alert("incorrect username or password");
      setUserName("");
      setPassword("");
    } else {
      setActive(true);
      setUserName("");
      setPassword("");
    }
  };
  return (
    <div className="App">
      <h1>USER LOGIN</h1>
      <input
        type="text"
        value={UserName}
        placeholder="username"
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={UserSignin}>signin</button>
      <p>
        New user?<Link to="/newacc">Create Account</Link>
      </p>
      {active ? <Link to="/userlibrary">BOOKS</Link> : ""}
    </div>
  );
};

export default Loginpage;
