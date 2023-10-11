import React from "react";

const EmployeSignup = () => {
  return (
    <div className="App">
      <h1>New Admin</h1>
      <input type="text" placeholder="Employee ID No.,"></input>
      <input type="email" placeholder="Employee mail"></input>
      <input type="password" placeholder="password"></input>
      <input type="password" placeholder="confirm password"></input>
      <button>Sign up</button>
    </div>
  );
};

export default EmployeSignup;
