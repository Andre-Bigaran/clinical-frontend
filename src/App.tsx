import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PreLogin from './pages/preLogin';
import Login from './pages/login';
import Cadastro from './pages/cadastro';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/preLogin" />} />
        <Route path="/preLogin" element={<PreLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
};

export default App;