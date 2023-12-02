import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,

  LogoutOutlined,
  EditOutlined,
  DownOutlined,

  HomeOutlined,
  FolderOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Avatar, Space, Row, Divider, Table, Input, Dropdown, Modal, Form, Input as AntInput, Select } from 'antd';
import PatienteProfile from './PatienteProfile';
import menu from 'antd/es/menu';
import PatienteSearch from './PatienteSearch';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuKey, setSelectedMenuKey] = useState('1'); // Estado para rastrear a chave do item de menu selecionado
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuClick = (key: string) => {
    setSelectedMenuKey(key);
  };

  const renderContent = () => {
    switch (selectedMenuKey) {
      case '1':
        return <div>Conteúdo do Item 1</div>;
      case '2':
        return <PatienteProfile/>;
      case '3':
        return <PatienteSearch />;
      default:
        return null;
    }
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
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          selectedKeys={[selectedMenuKey]} // Definir a chave selecionada
          onClick={({ key }) => handleMenuClick(key as string)} // Lidar com o clique do menu
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: 'Home',
            },
            {
              key: '2',
              icon: <FolderOutlined />,
              label: 'Consultas',
            },
            {
              key: '3',
              icon: <UserOutlined />,
              label: 'Pacientes',
            },
          ]}
        />
      </Sider>
      <Layout style={{ minHeight: '100vh' }}>
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
              style={{ marginRight: '24px', marginTop: '0px' }}
            >
              <Avatar size="large" icon={<UserOutlined />} />
              Nome do Médico
              <Dropdown overlay={menu} placement="bottomRight">
                <Button type="text" style={{ color: '#000' }}>
                  <DownOutlined />
                </Button>
              </Dropdown>
            </Space>
          </Row>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '100vh',
            background: colorBgContainer,
          }}
        >
          {renderContent()} {/* Renderizar o conteúdo com base na chave do menu selecionado */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
