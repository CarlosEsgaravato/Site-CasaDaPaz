'use client'
import { Menu } from "@/components/Menu";
import styled, { keyframes } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "@/components/Footer";

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f0f0f0; /* Fundo mais claro */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  padding: 40px 6%;
  display: flex;
  justify-content: center;
`;

const GridContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px; /* Aumentando a largura máxima */
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8); /* Fundo branco com transparência */
  padding: 40px;
  border-radius: 8px;
`;

const ImageContainer = styled.div`
  flex: 1;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VolunteerImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px; /* Espaço entre a imagem e o botão */
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: justify;
`;

const Title = styled.h2`
  color: #89b72d;
  margin-bottom: 20px;
  text-align: center;
`;

const Subtitle = styled.h3`
  color: #89b72d;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  color: #333;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const VolunteerCard = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const VolunteerList = styled.ul`
  list-style-type: disc; /* Bolinhas atrás dos itens */
  padding-left: 20px; /* Espaço para os marcadores */
`;

const VolunteerListItem = styled.li`
  color: #333;
  line-height: 1.6;
  margin-bottom: 10px;
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #89b72d;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 18px;
  text-align: center;

  &:hover {
    background-color: #76a024;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px; /* Espaço abaixo do botão */
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
`;

const AttentionCard = styled.div`
  background-color: #f5f5f5; /* Fundo cinza mais claro */
  color: #89b72d; /* Texto verde */
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  animation: ${shake} 2s ease-in-out infinite; /* Movimento mais lento */
  font-weight: bold;
  text-transform: uppercase;
`;

export default function Voluntarios() {
  return (
    <PageContainer>
      <Menu />
      <Section>
        <GridContainer>
          <ImageContainer>
            <VolunteerImage src="/imagens/voluntarios.jpg" alt="Voluntários" />
            <ButtonContainer>
              <ContactButton href="/contato">Entre em Contato</ContactButton>
            </ButtonContainer>
            <AttentionCard>
              FORNECEMOS DECLARAÇÃO, CERTIFICADO DE HORAS COMPLEMENTARES CASO VOCÊ NECESSITE PARA COMPROVAR SEU VOLUNTARIADO.
            </AttentionCard>
          </ImageContainer>
          <TextContainer>
            <Title>VOLUNTARIADO</Title>
            <Text>
              Seja um voluntário e ajude a fazer a diferença na vida de nossas crianças e adolescentes. Descubra como você pode contribuir com seu tempo e habilidades.
            </Text>
            <Subtitle>Atualmente, temos necessidade de voluntários nas seguintes áreas:</Subtitle>
            <VolunteerCard>
              <VolunteerList>
                <VolunteerListItem>Motorista</VolunteerListItem>
                <VolunteerListItem>Cozinheiro</VolunteerListItem>
                <VolunteerListItem>Professor de Matemática</VolunteerListItem>
                <VolunteerListItem>Professor de Artes</VolunteerListItem>
                <VolunteerListItem>Assistente Social</VolunteerListItem>
                <VolunteerListItem>Ajudante de Limpeza</VolunteerListItem>
              </VolunteerList>
            </VolunteerCard>
          </TextContainer>
        </GridContainer>
      </Section>
      <Footer />
    </PageContainer>
  );
}
