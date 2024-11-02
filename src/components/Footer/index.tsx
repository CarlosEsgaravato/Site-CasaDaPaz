"use client"
import React from 'react';
import { FooterContainer, IconLink, BootstrapIcon } from './style';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <FooterContainer>
      <p>Desenvolvido em parceria com a Faculdade ALFA Umuarama, Curso de Sistemas para Internet.</p>
      <div>
        <IconLink href="https://www.instagram.com/casadapaz_umuarama/" target="_blank">
          <BootstrapIcon className="bi bi-instagram" />
        </IconLink>
        <IconLink href="https://wa.me/5544999760543" target="_blank">
          <BootstrapIcon className="bi bi-whatsapp" />
        </IconLink>
      </div>
    </FooterContainer>
  );
};

export default Footer;
