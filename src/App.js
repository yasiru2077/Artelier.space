import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";


function App() {
  return (
   <Router>
    <Routes>
    <Route path="/" element={<Welcome/>}/>
      <Route path="/login" element={<Login/>}/>
      
    </Routes>
   </Router>
  );
}

export default App;
