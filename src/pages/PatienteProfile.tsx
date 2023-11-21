
import React from 'react';
import { useParams } from 'react-router-dom';

const PatientProfile: React.FC = () => {
  const { patientId } = useParams<{ patientId: string }>();

  // Lógica para carregar os detalhes do paciente com base no patientId

  return (
    <div>
      <h2>Perfil do Paciente {patientId}</h2>
      {/* Renderize os detalhes do paciente aqui */}
    </div>
  );
};

export default PatientProfile;
