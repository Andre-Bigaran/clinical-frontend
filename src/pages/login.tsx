import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import './App.css';

const App: React.FC = () => {
  const onFinish = (values: any) => {
    // Lógica de autenticação aqui
    console.log('Received values:', values);
  };

  return (
    <div className="app-container">
      <Row className="login-container" justify="center" align="middle" style={{ height: '100vh' }}>
        <Col span={8}>
          <div className="left-section" style={{ height: '100%', backgroundColor: '#1890ff' }}>
            {/* Background azul do lado esquerdo */}
          </div>
          <div className="logo-container">
            <HeartOutlined className="logo" />
          </div>
        </Col>
        <Col span={8}>
          <div className="form-container" style={{ height: '100%' }}>
            <h2>Login</h2>
            <Form name="login" onFinish={onFinish} style={{ height: '100%' }}>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: 'Por favor, insira seu email!' }]}
              >
                <Input type="email" />
              </Form.Item>
              <Form.Item
                name="password"
                label="Senha"
                rules={[{ required: true, message: 'Por favor, insira sua senha!' }]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
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

export default App;
