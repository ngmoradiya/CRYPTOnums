import "./App.css";
import Main from "./components/mainPage/Main";
import { Routes, Route } from "react-router-dom";
import Particular from "./components/internalPage/Particular";
import DefiRate from "./components/defiRatePage/DefiRate";
import NavBar from "./components/Navbar";
function App() {
  return (
    <>
      <div className="container" style={{ paddingBottom: "20px" }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:name" element={<Particular />} />
          <Route path="/rate" element={<DefiRate />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
