import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Installation from "./pages/Installation";
import ServiceLogs from "./pages/ServiceLogs";
import Contracts from "./pages/Contracts";
import Alerts from "./pages/Alerts";
import Sidebar from "./components/Sidebar";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="/service" element={<ServiceLogs />} />
            <Route path="/contracts" element={<Contracts />} />
            <Route path="/alerts" element={<Alerts />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

