import React from 'react';

import { Container } from './styles';

import logoImg from '../../assets/logo.svg';
import landingImg from '../../assets/landing.svg';

const Landing: React.FC = () => {
  return (
   <Container>
      <h2>Sua plataforma de estudos online</h2>

      <img src={landingImg} alt="Plataforma de estudos" className="hero-image"/>
   </Container>
  );
};

export default Landing;
