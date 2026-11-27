import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Task from "./pages/task";
import Project from "./pages/project";
import Calender from "./pages/calender";
import Clients from "./pages/clients";
import Dashboard from "./pages/dashboard";
import Settings from "./pages/settings";
import Team from "./pages/team";
import Register from "./pages/register";
import Admin from "./pages/Admin/adminlayout";
import Details from "./pages/Admin/userdetails";
import AdminDashboard from "./pages/Admin/admindashboard";
import UserSettings from "./pages/Admin/settings";


function App() {
  return (
        <BrowserRouter>
        <Routes>
         <Route path="/login" element = {<Login />} />
         <Route path="/task" element = {<Task />} />
         <Route path="/project" element= {<Project />} />
         <Route path="/calender" element= {<Calender />} />
         <Route path="/clients" element= {<Clients />} />
         <Route path="/dashboard" element= {<Dashboard />} />
         <Route path="/settings" element= {<Settings />} />
         <Route path="/team" element= {<Team/>} />
         <Route path="/register" element= {<Register/>} />
         <Route path="/admin" element= {<Admin/>} >
         <Route path="dashboard" element={<AdminDashboard/>}/>
         <Route path="settings" element={<UserSettings/>}/>
         <Route path="details" element={<Details/>}/>
         </Route>
        </Routes>
        </BrowserRouter>
        );
}

export default App;
