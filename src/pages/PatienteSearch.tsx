import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined,
  EditOutlined,
  SearchOutlined,
  PlusOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Avatar, Space, Row, Divider, Table, Input, Dropdown, Modal, Form, Input as AntInput, Select } from 'antd';

const { Header, Sider, Content } = Layout;

const { Search } = Input;
const { Option } = Select;

const data = [
  {
    key: '1',
    name: 'Nome Paciente 1',
    email: 'paciente1@email.com',
    cpf: '123.456.789-01',
    status: 'Aberto',
  },
  {
    key: '2',
    name: 'Nome Paciente 2',
    email: 'paciente2@email.com',
    cpf: '234.567.890-12',
    status: 'Fechado',
  },
  // Adicione mais pacientes conforme necessário
];

const columns = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'CPF',
    dataIndex: 'cpf',
    key: 'cpf',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
];

const PatienteSearch: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        // Lógica para adicionar novo paciente aos dados (data)
        data.push({
          key: String(data.length + 1),
          name: values.name,
          email: values.email,
          cpf: values.cpf,
          status: values.status,
        });
        form.resetFields();
        setIsModalVisible(false);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  const menu = (
    <Menu>
      <Menu.Item key="editProfile" icon={<EditOutlined />}>
        Editar Perfil
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Home',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Pacientes',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Row justify="space-between" align="middle">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <Space
              direction="horizontal"
              align="center"
              style={{ marginRight: '24px', marginTop: '16px' }}
            >
              <Avatar size="large" icon={<UserOutlined />} />
              Nome do Médico
              <Dropdown overlay={menu} placement="bottomRight">
                <Button type="text" style={{ color: '#fff' }}>
                  <DownOutlined />
                </Button>
              </Dropdown>
            </Space>
          </Row>
        </Header>
        <Content
          style={{
            margin: 0,
            padding: 24,
            minHeight: '100%',
            background: colorBgContainer,
          }}
        >
          <Divider orientation="left">
            <Space>
              Pacientes
              <Button
                type="primary"
                icon={<PlusOutlined />}
                style={{ marginLeft: '8px' }}
                onClick={showModal}
              >
                Adicionar Paciente
              </Button>
            </Space>
          </Divider>
          <Search placeholder="Digite para buscar" style={{ marginBottom: '16px' }} />
          <Table dataSource={data} columns={columns} onRow={(record) => ({
            onClick: () => {
              // Redirecionar para a página do perfil do paciente ao clicar na linha
              window.location.href = `pages/PatientProfile/${record.key}`;
            },
          })} />

          {/* Modal para adicionar novo paciente */}
          <Modal
            title="Adicionar Paciente"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Form form={form} layout="vertical">
              <Form.Item
                label="Nome"
                name="name"
                rules={[{ required: true, message: 'Por favor, insira o nome do paciente!' }]}
              >
                <AntInput />
              </Form.Item>
              <Form.Item
                label="E-mail"
                name="email"
                rules={[{ required: true, message: 'Por favor, insira o e-mail do paciente!' }]}
              >
                <AntInput />
              </Form.Item>
              <Form.Item
                label="CPF"
                name="cpf"
                rules={[{ required: true, message: 'Por favor, insira o CPF do paciente!' }]}
              >
                <AntInput />
              </Form.Item>
              <Form.Item
                label="Status"
                name="status"
                rules={[{ required: true, message: 'Por favor, selecione o status do paciente!' }]}
              >
                <Select>
                  <Option value="Aberto">Aberto</Option>
                  <Option value="Fechado">Fechado</Option>
                </Select>
              </Form.Item>
            </Form>
          </Modal>
        </Content>
      </Layout>
      </Layout>
      );
};

      export default PatienteSearch;
