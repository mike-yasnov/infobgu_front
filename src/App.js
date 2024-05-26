import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Schedule from './components/Schedule';
import Settings from './components/Settings';
import PhoneBook from './components/PhoneBook';
import Students from './components/Students';
import DiskM from './components/DiskM';
import ChangePassword from './components/ChangePassword';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token');
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="schedule" element={<Schedule />} />
          <Route path="settings" element={<Settings />} />
          <Route path="phonebook" element={<PhoneBook />} />
          <Route path="students" element={<Students />} />
          <Route path="diskm" element={<DiskM />} />
          <Route path="" element={<Navigate to="schedule" />} /> {/* Redirect to schedule by default */}
        </Route>
        <Route path="*" element={<Navigate to="/login" />} /> {/* Redirect any unknown routes to login */}
      </Routes>
    </Router>
  );
}

export default App;
