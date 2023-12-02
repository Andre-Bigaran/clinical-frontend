import React, { useState } from 'react';
import {
  UserOutlined,
  MedicineBoxFilled,
  ClockCircleOutlined,
} from '@ant-design/icons';
import { Layout, Button, theme, Card, Input, Avatar, Modal, Row, Col, Space, DatePicker, TimePicker } from 'antd';

const { Content } = Layout;

const RecordCard: React.FC<{ title: string; content: string }> = ({ title, content }) => (
  <Card title={title} style={{ marginBottom: '8px' }}>
    <p>{content}</p>
  </Card>
);

const PatienteProfile: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [prescription, setPrescription] = useState('');
  const [quantity, setQuantity] = useState('');

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

  const handleModalPre = () => {
    // Handle prescription submission logic here
    setIsModalVisible(false);
    setPrescription('');
  };

  const handleModalQnt = () => {
    // Handle prescription submission logic here
    setIsModalVisible(false);
    setQuantity('');
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const records = [
    { title: 'Registro 1', content: 'Conteúdo do Registro 1' },

  ];


  function handleTimeChange(timeString: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <Layout style={{ padding: '10px', borderRadius: '16px', minHeight: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
        {/* Div da esquerda dividida ao meio */}
        <div style={{ flex: 1, marginRight: '8px', marginBottom: '8px' }}>
          <div style={{ height: '65%', background: '#fff', borderRadius: "16px" }}>
            {/* Resumo do perfil */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px', marginBottom: '8px' }}
            >
              <Avatar size={64} icon={<UserOutlined />} />
              <h2>Nome do Paciente</h2>
              <p>E-mail do Paciente</p>
              <p>Endereço do Paciente</p>
            </div>
          </div>

          <div style={{ height: '40%', background: '#fff', borderRadius: "16px" }}>
            {/* Cards dos últimos registros */}
            {records.map((record, index) => (
              <RecordCard key={index} title={record.title} content={record.content} />
            ))}
          </div>
        </div>

        {/* Div da direita dividida em três partes */}
        <div style={{ flex: 1 }}>
          <div style={{ height: '40%', marginBottom: '8px', background: '#fff', borderRadius: "16px", display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
              <Button
                type="primary"
                style={{
                  width: '120px',
                  height: '120px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={handlePrescribeMedication}
              >
                <Space direction="vertical" size={4}>
                  <MedicineBoxFilled style={{ fontSize: '30px' }} />
                  <span>Receitar<br /> Medicamento</span>
                </Space>
              </Button>

            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
              <Button
                type="primary"
                style={{
                  width: '120px',
                  height: '120px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={handlePrescribeMedication}
              >
                <Space direction="vertical" size={4}>
                  <ClockCircleOutlined style={{ fontSize: '30px' }} />
                  <span>Agendar<br /> Consulta</span>
                </Space>
              </Button>

            </div>
          </div>
          <Modal
            title="Prescrever Medicamento"
            visible={isModalVisible}
            onOk={handleModalPre}
            onCancel={handleModalCancel}
          >
            <Row gutter={16}>
              <Col span={17}>
                <Input
                  placeholder="Nome do Medicamento"
                  value={prescription}
                  onChange={(e) => setPrescription(e.target.value)}
                />
              </Col>
              <Col span={5}>
                <Input
                  placeholder="Qnt"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </Col>
            </Row>
          </Modal>

          <Modal
            title="Agendar Consulta"
            visible={isModalVisible}
            onOk={handleModalPre}
            onCancel={handleModalCancel}
          >

            <Row gutter={16} style={{ marginTop: '16px' }}>
              <Col span={12}>
                <DatePicker
                  style={{ width: '100%' }}
                  placeholder="Selecione a data"
                  onChange={(date, dateString) => handleTimeChange(dateString)}
                />
              </Col>
              <Col span={12}>
                <TimePicker
                  style={{ width: '100%' }}
                  placeholder="Selecione a hora"
                  onChange={(time, timeString) => handleTimeChange(timeString)}
                />
              </Col>
            </Row>
          </Modal>

          <div style={{ height: '60%', marginBottom: '8px', background: '#fff', borderRadius: "16px" }}>
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

    </Layout>

  );
};

export default PatienteProfile;
