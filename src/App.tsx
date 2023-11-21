import React, { useState } from 'react';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined,
  EditOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Avatar, Space, Row, Divider, Table, Input, Dropdown } from 'antd';




import { DownOutlined } from '@ant-design/icons';
import menu from 'antd/es/menu';
import PatientProfile from './pages/PatienteProfile';


const { Header, Sider, Content } = Layout;

const { Search } = Input;

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

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
              <SearchOutlined />
            </Space>
          </Divider>
          <Search
            placeholder="Digite para buscar"
            style={{ marginBottom: '16px' }}
          />
           <Table dataSource={data} columns={columns} onRow={(record) => ({
            onClick: () => {
              // Redirecionar para a página do perfil do paciente ao clicar na linha
              window.location.href = `pages/PatienteProile/${record.key}`;
            },
          })} />
          
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
