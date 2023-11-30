import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  MedicineBoxFilled,
  VideoCameraOutlined, // Ícone do Ant Design para medicamento
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Card, Input } from 'antd';

const { Header, Sider, Content } = Layout;

// Exemplo de componente de card
const RecordCard: React.FC<{ title: string; content: string }> = ({ title, content }) => (
  <Card title={title} style={{ marginBottom: '8px' }}>
    <p>{content}</p>
  </Card>
);

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleCommentSubmit = () => {
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };


  // Exemplo de dados de registros
  const records = [
    { title: 'Registro 1', content: 'Conteúdo do Registro 1' },
    { title: 'Registro 2', content: 'Conteúdo do Registro 2' },
    { title: 'Registro 3', content: 'Conteúdo do Registro 3' },
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
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
            {/* Div da esquerda dividida ao meio */}
            <div style={{ flex: 1, marginRight: '8px' }}>
              <div style={{ height: '50%', marginBottom: '8px', background: 'lightblue' }}>
                {/* Resumo do perfil */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
                  <img src="URL_DA_IMAGEM" alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                  <h2>Nome do Paciente</h2>
                  <p>E-mail do Paciente</p>
                  <p>Endereço do Paciente</p>
                </div>
              </div>

              <div style={{ height: '50%', background: 'lightcoral' }}>
                {/* Cards dos últimos registros */}
                {records.map((record, index) => (
                  <RecordCard key={index} title={record.title} content={record.content} />
                ))}
              </div>
            </div>

            {/* Div da direita dividida em três partes */}
                          <div style={{ flex: 1 }}>
              <div style={{ height: '33.33%', marginBottom: '8px', background: 'lightgreen' }}>
                {/* Botões para ações */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
                  <Button type="primary" icon={<MedicineBoxFilled />} style={{ marginBottom: '8px' }}>
                    Receitar Medicamento
                  </Button>
                  {/* Adicione mais botões conforme necessário */}
                </div>
              </div>
              <div style={{ height: '33.33%', marginBottom: '8px', background: 'lightcoral' }}>
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
              <div style={{ height: '33.33%', background: 'lightskyblue' }}>
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
    </Layout>
  );
};

export default App;
