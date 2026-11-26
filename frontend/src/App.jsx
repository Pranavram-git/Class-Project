import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Project from "./pages/project";
import Task from "./pages/task";


function App() {
  return (
    <BrowserRouter>
      <Routes>
    
        <Route path="/login" element={<Login />} />
        <Route path="/projects" element={<Project />} /> 
        <Route path="/task" element={<Task />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
