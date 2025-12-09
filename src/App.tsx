import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Dashboard from "./pages/dashbord";
import Profile from "./pages/profile";
import Projects from "./pages/projects";
import Settings from "./pages/settings";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Sidebar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/settings" element={<Settings />} />
          {/* Optional: 404 fallback */}
          {/* <Route path="*" element={<h1>Page Not Found</h1>} /> */}
        </Routes>
      </main>
    </>
  );
};

export default App;
