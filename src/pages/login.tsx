import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { HeartFilled, HeartOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';


const Login: React.FC = () => {
  const onFinish = (values: any) => {
    // Lógica de autenticação aqui
    console.log('Received values:', values);
  };

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
