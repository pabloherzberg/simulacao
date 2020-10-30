import React from 'react';

import { Container } from './styles';

import stethoscopeRed from '../../assets/stethoscopeRed.svg'
import stethoscopeGreen from '../../assets/stethoscopeGreen.svg'

function Loading() {
  return <Container>
      <p>Carregando pacientes...</p>
      <img id='red' src={stethoscopeRed}/>
      <img id='green'src={stethoscopeGreen}/>
  </Container>
}

export default Loading;