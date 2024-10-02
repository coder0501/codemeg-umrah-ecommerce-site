import React from 'react';
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import EmailConfirmation from './components/EmailConfirmation';
import ResetPassword from './components/ResetPassword';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/EmailConfirmation" element={<EmailConfirmation />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
