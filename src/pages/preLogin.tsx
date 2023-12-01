import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import { HeartFilled } from '@ant-design/icons';

const PreLogin: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Navegar para a página de login
    navigate('/login');
  };

  const handleCadastro = () => {
    // Navegar para a página de cadastro
    navigate('/cadastro');
  };

  return (
    <div className="app-container">
      <Row className="login-container" justify="center" align="middle" style={{ height: '100vh', backgroundColor: '#F8F8F8' }}>
        <Col span={8} style={{ height: '70vh', backgroundColor: '#52A8FF', borderTopLeftRadius: "16px", borderBottomLeftRadius: "16px" }}>
          <div className="left-section" style={{ height: '60%' }}>
            {/* Background azul do lado esquerdo */}
          </div>
        </Col>
        <Col span={8} style={{ height: '70vh', backgroundColor: '#BEE1FF', borderTopRightRadius: "16px", borderBottomRightRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="form-container" style={{ padding: "16px", textAlign: "center" }}>
            <HeartFilled className="logo" style={{ color: "#1890FF", fontSize: "10em" }} />
            <h2>Login</h2>
            
            <Button type="primary" onClick={handleLogin} style={{ width: '40vh', marginBottom: '16px' }}>
              Login
            </Button>
            
            <div className="separator"></div>
            
            <Button type="default" onClick={handleCadastro} style={{ width: '40vh' }}>
              Cadastro
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PreLogin;
