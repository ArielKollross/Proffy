import React from 'react';

import {  Link } from 'react-router-dom';
// import { Container } from './styles';
import './styles.css';

import logoImg from '../../assets/logo.svg';
import landingImg from '../../assets/landing.svg';
import studyIcon from '../../assets/icons/study.svg';
import giveClassesIcon from '../../assets/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/icons/purple-heart.svg';

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
    <div id="page-landing-content" className="container">
        <div className="logo-container">
            <img src={logoImg} alt="Proffy"/>
            <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img
        src={landingImg}
        alt="estudos"
        className="hero-image"
        />
        <div className="buttons-container">
            <Link to="/study" className="study">
            <img src={studyIcon} alt="estudar"/>
            Estudar
            </Link>

            <Link to="class" className="give-classes">
            <img src={giveClassesIcon} alt="estudar"/>
            Dar aulas
            </Link>

        </div>

        <span className="total-connections">
        total de 200 conexões realizadas <img src={purpleHeartIcon} alt="coração roxo"/>
        </span>
    </div>
</div>
  );
};

export default Landing;
