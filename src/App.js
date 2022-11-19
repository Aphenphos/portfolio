import { Route, Routes } from "react-router-dom";
import Info from "./components/Info/Info";
import "./App.sass";
import Projects from "./Projects/Projects";
import Nav from "./components/Nav/Nav";
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/info" element={<Info />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </div>
  );
}

export default App;
