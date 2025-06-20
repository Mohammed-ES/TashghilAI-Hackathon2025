import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import ProfilePage from './components/ProfilePage';
import MissionsPage from './components/MissionsPage';
import MissionDetailPage from './components/MissionDetailPage';
import TasksPage from './components/TasksPage';
import SettingsPage from './components/SettingsPage';
import InterviewSimulatorPage from './components/InterviewSimulatorPage';
import ContactUsPage from './components/ContactUsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/missions" element={<MissionsPage />} />
            <Route path="/missions/:id" element={<MissionDetailPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/interview-simulator" element={<InterviewSimulatorPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

