import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import HRDashboard from "./pages/HRDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import JobSeekerDashboard from "./pages/JobSeekerDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/hr" element={<HRDashboard />} />
              <Route path="/employee" element={<EmployeeDashboard />} />
              <Route path="/job-seeker" element={<JobSeekerDashboard />} />
          </Routes>
         
          
    </BrowserRouter>
  );
}

export default App;