import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PreLogin from './pages/preLogin';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import PatienteProfile from './pages/PatienteProfile';
import PatienteSearch from './pages/PatienteSearch';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      
      <Route path="/" element={<Navigate to="/preLogin" />} />
        <Route path="/preLogin" element={<PreLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/PatienteProfile" element={<PatienteProfile />} />
        <Route path="/PatienteSearch" element={<PatienteSearch />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;