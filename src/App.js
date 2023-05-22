import { Route, Routes } from "react-router-dom";
import Info from "./components/Info/Info";
import "./App.sass";
import Projects from "./Projects/Projects";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Info />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
