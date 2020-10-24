import React from 'react';
import { useLocation } from 'react-router-dom'
// import { Container } from './styles';

function NovoPaciente() {

    const location = useLocation()

    const setor = (location.state.setor)

  return(<>
    <p>{setor}</p>
  </>)
}

export default NovoPaciente;