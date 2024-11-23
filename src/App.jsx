import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidbar01";
import Dashboard from "./page/Dashboard";

import './App.css';

const App = () => {
  return (
    <div className="dashboard">
      <BrowserRouter>
        <Sidebar />
        <div className="dashboard--content">
          <Routes>
          <Route path="Dashboard" element={<Dashboard />} />


          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
