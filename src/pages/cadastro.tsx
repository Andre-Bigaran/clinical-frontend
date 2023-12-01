import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, CalendarOutlined, IdcardOutlined, EnvironmentOutlined, HeartFilled } from '@ant-design/icons';

const Cadastro: React.FC = () => {
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
        <Col span={8} style={{paddingTop:'10vh', overflowY: "scroll", height: '70vh',  backgroundColor: '#BEE1FF', borderTopRightRadius: "16px", borderBottomRightRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="form-container" style={{ padding: "16px", textAlign: "center" }}>
            <HeartFilled className="logo" style={{ color: "#1890FF", fontSize: "5em" }} />
            <h2>Cadastro</h2>
            
            <Form name="cadastro" onFinish={onFinish} style={{ height: '100%',  }}>
              <Form.Item
                name="nome"
                rules={[{ required: true, message: 'Por favor, insira seu nome!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Nome" />
              </Form.Item>
              <Form.Item
                name="sobrenome"
                rules={[{ required: true, message: 'Por favor, insira seu sobrenome!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Sobrenome" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Por favor, insira seu email!' }]}
              >
                <Input prefix={<MailOutlined />} type="email" placeholder="Digite seu email" />
              </Form.Item>
              <Form.Item
                name="dataNascimento"
                rules={[{ required: true, message: 'Por favor, insira sua data de nascimento!' }]}
              >
                <Input prefix={<CalendarOutlined />} type="date" placeholder="Data de Nascimento" />
              </Form.Item>
              <Form.Item
                name="rg"
                rules={[{ required: true, message: 'Por favor, insira seu RG!' }]}
              >
                <Input prefix={<IdcardOutlined />} placeholder="RG" />
              </Form.Item>
              <Form.Item
                name="cidade"
                rules={[{ required: true, message: 'Por favor, insira sua cidade!' }]}
              >
                <Input prefix={<EnvironmentOutlined />} placeholder="Cidade" />
              </Form.Item>
              <Form.Item
                name="estado"
                rules={[{ required: true, message: 'Por favor, insira seu estado!' }]}
              >
                <Input prefix={<EnvironmentOutlined />} placeholder="Estado" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: '40vh' }}>
                  Cadastrar
                </Button>
              </Form.Item>
            </Form>
            
            <div className="separator"></div>
            <Button type="default" style={{ width: '100%' }}>
              Voltar
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Cadastro;
