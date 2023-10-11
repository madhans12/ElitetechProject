import "./App.css";
import Loginpage from "./Components/Userlogin";
import Homepage from "./Components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employelogin from "./Components/Employelogin";
import UserSignup from "./Components/UserSignup";
import EmployeSignup from "./Components/EmployeSignup";
import UserLibrary from "./Components/UserLibrary";
import EmployeLibrary from "./Components/EmployeLibrary";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Homepage />
        <Routes>
          <Route path="/userlogin" element={<Loginpage />}></Route>
          <Route path="/libriainlogin" element={<Employelogin />}></Route>
          <Route path="/newacc" element={<UserSignup />}></Route>
          <Route path="/employesignup" element={<EmployeSignup />}></Route>
          <Route path="/userlibrary" element={<UserLibrary />}></Route>
          <Route path="/employelibrary" element={<EmployeLibrary />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
