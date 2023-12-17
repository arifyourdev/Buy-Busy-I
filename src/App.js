import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Registration from "./components/register/Registration";
import "./App.css";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
