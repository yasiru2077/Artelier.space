import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
import HomePage from "./pages/home-page/HomePage";
import IndoorPlantsArticle from "./pages/indoor-plants/IndoorPlantsArticle";
import ArticalPage from "./pages/artial/ArticalPage";


function App() {

  
  return (
   <Router>
    <Routes>
    <Route path="/" element={<Welcome/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/HomePage" element={<HomePage/>}/>
    <Route path="/indoor-plants" element={<IndoorPlantsArticle/>}/>
    <Route path="/indoor-plants/spider-plant" element={<ArticalPage/>}></Route>
    
    </Routes>
   </Router>
  );
}

export default App;
