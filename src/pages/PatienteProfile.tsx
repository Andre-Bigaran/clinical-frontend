import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  MedicineBoxFilled,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Card, Input, Avatar, Modal } from 'antd';

const { Header, Sider, Content } = Layout;

const RecordCard: React.FC<{ title: string; content: string }> = ({ title, content }) => (
  <Card title={title} style={{ marginBottom: '8px' }}>
    <p>{content}</p>
  </Card>
);

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [prescription, setPrescription] = useState('');

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleCommentSubmit = () => {
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };
  const handlePrescribeMedication = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    // Handle prescription submission logic here
    setIsModalVisible(false);
    setPrescription('');
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const records = [
    { title: 'Registro 1', content: 'Conteúdo do Registro 1' },

  ];


  return (
    <Layout>
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
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
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
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '100vh',
            background: colorBgContainer,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
            {/* Div da esquerda dividida ao meio */}
            <div style={{ flex: 1, marginRight: '8px', marginBottom: '8px' }}>
              <div style={{ height: '40%', background: '#f3f3f3', borderRadius: "16px" }}>
                {/* Resumo do perfil */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px', marginBottom: '8px' }}
                >
                  <Avatar size={64} icon={<UserOutlined />} />
                  <h2>Nome do Paciente</h2>
                  <p>E-mail do Paciente</p>
                  <p>Endereço do Paciente</p>
                </div>
              </div>

              <div style={{ height: '40%', background: '#f3f3f3', borderRadius: "16px" }}>
                {/* Cards dos últimos registros */}
                {records.map((record, index) => (
                  <RecordCard key={index} title={record.title} content={record.content} />
                ))}
              </div>
            </div>

            {/* Div da direita dividida em três partes */}
            <div style={{ flex: 1 }}>
              <div style={{ height: '20%', marginBottom: '8px', background: '#f3f3f3', borderRadius: "16px" }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
                  <Button type="primary" icon={<MedicineBoxFilled />} style={{ marginBottom: '8px' }} onClick={handlePrescribeMedication}>
                    Receitar Medicamento
                  </Button>
                </div>
              </div>
              <Modal
                title="Prescrever Medicamento"
                visible={isModalVisible}
                onOk={handleModalOk}
                onCancel={handleModalCancel}
              >
                <Input
                  placeholder="Nome do Medicamento e Quantidade"
                  value={prescription}
                  onChange={(e) => setPrescription(e.target.value)}
                />
              </Modal>
            
            <div style={{ height: '20%', marginBottom: '8px', background: '#f3f3f3', borderRadius: "16px" }}>
              {/* Input para escrever comentário */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
                <Input
                  placeholder="Escreva um comentário"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  style={{ marginBottom: '8px' }}
                />
                <Button type="primary" onClick={handleCommentSubmit}>
                  Enviar Comentário
                </Button>
              </div>
            </div>
            <div style={{ height: '33.33%', background: '#f3f3f3', borderRadius: "16px" }}>
              {/* Comentários */}
              <div style={{ padding: '16px' }}>
                <h3>Comentários:</h3>
                <ul>
                  {comments.map((c, index) => (
                    <li key={index}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
    </Layout >
  );
};

export default App;
