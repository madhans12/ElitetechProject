import React, { useState } from "react";

const UserSignup = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  return (
    <div className="App">
      <h1>New User</h1>
      <input
        type="email"
        placeholder="User mail"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      ></input>
      <input
        type="password"
        value={password}
        placeholder="New password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <input
        type="password"
        value={confirmpassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm password"
      ></input>
      <button>Sign up</button>
    </div>
  );
};

export default UserSignup;
