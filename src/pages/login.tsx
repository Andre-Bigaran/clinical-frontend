import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, message } from 'antd';
import { HeartFilled, LockOutlined, MailOutlined } from '@ant-design/icons';
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

const navigate = useNavigate();
  const onFinish = (values: any) => {
    // Lógica de autenticação simulada
    const { email, password } = values;

    // Verifique os detalhes do usuário (simulado)
    if (email === 'usuario@example.com' && password === 'senha123') {
      // Usuário autenticado com sucesso
      console.log('Usuário autenticado:', values);
      message.success('Login bem-sucedido!');
      setLoggedIn(true); // Define loggedIn como true para redirecionar
    } else {
      // Autenticação falhou
      console.log('Falha na autenticação:', values);
      message.error('Credenciais inválidas. Tente novamente.');
    }
  };

  // Redireciona para outra página se o login for bem-sucedido
  if (loggedIn) {
    navigate('/PatienteSearch');
  }



  return (
    <div className="app-container">
      <Row className="login-container" justify="center" align="middle" style={{ height: '100vh', backgroundColor: '#F8F8F8' }}>
        <Col span={8} style={{ height: '70vh', backgroundColor: '#52A8FF', borderTopLeftRadius: "16px", borderBottomLeftRadius: "16px" }}>
          <div className="left-section" style={{ height: '60%' }}>
            {/* Background azul do lado esquerdo */}
          </div>

        </Col>
        <Col span={8} style={{ height: '70vh',  backgroundColor: '#BEE1FF', borderTopRightRadius: "16px", borderBottomRightRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="form-container" style={{ padding: "16px", textAlign: "center" }}>
            <HeartFilled className="logo" style={{ color: "#1890FF", fontSize: "10em" }} />
            <h2>Login</h2>
          <Form name="login" onFinish={onFinish} style={{ height: '100%',  }}>
            <Form.Item
              name="email"
              
              rules={[{ required: true, message: 'Por favor, insira seu email!' }]}
            >
              <Input prefix={<MailOutlined />} type="email" placeholder="Digite seu email" />
            </Form.Item>
            <Form.Item
              name="password"
              
              rules={[{ required: true, message: 'Por favor, insira sua senha!' }]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Digite sua senha" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '40vh' }}>
                Login
              </Button>
            </Form.Item>
          </Form>
          <div className="separator"></div>
          <Button type="default" style={{ width: '100%' }}>
            Cadastro
          </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};


export default Login;
