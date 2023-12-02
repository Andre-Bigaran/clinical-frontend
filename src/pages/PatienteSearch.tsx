import React, { useState } from 'react';
import {UserAddOutlined,} from '@ant-design/icons';
import { Layout,  Button, theme,  Space,  Divider, Table, Input,  Modal, Form, Input as AntInput, Select } from 'antd';

const { Search } = Input;
const { Option } = Select;

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

  

  const [data, setData] = useState([
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
]);

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const newPatient = {
          key: String(data.length + 1),
          name: values.name,
          email: values.email,
          cpf: values.cpf,
          status: values.status,
        };

        // Atualizar o estado da tabela
        setData([...data, newPatient]);

        form.resetFields();
        setIsModalVisible(false);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Layout style={{ padding: '10px', borderRadius: '16px', minHeight: '100vh' }}>
      <Layout>
        <Divider orientation="left">
          <Space>
            Pacientes
            <Button
              type="primary"
              icon={<UserAddOutlined />}
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
            window.location.href = `/PatienteProfile/`;
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

      </Layout>
    </Layout>
  );
};

export default PatienteSearch;
