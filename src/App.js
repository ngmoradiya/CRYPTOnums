import "./App.css";
import Main from "./components/Main";
import {Routes,Route} from "react-router-dom"
import Particular from "./components/Particular";
import NavBar from "./components/Navbar";
function App() {
  return(
    <>
    <div className="container" style={{ paddingBottom: "20px" }}>

   
    <NavBar />
    <Routes>
      <Route path="/" element={ <Main />} />
      <Route path="/:name" element={<Particular/>} />
    </Routes>
   
   
    </div>
    </>
    );
}

export default App;
