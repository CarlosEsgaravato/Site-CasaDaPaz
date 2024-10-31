'use client'
import { Menu } from "@/components/Menu";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "@/components/Footer";

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url('/imagens/teste.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  background-color: rgba(255, 255, 255, 0.8); /* Fundo branco com transparência */
  padding: 40px;
  border-radius: 8px;
  margin: 20px;
  text-align: center;
`;

const Title = styled.h2`
  color: #89b72d;
  margin-bottom: 20px;
  text-align: center;
`;

const Text = styled.p`
  color: #333;
  line-height: 1.6;
  text-align: justify;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const Card = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  width: 45%;
  text-align: center;
`;

const CardTitle = styled.h3`
  color: #89b72d;
  margin-bottom: 10px;
  text-align: center;
`;

const CardText = styled.p`
  color: #333;
  background-color: #f9f9f9;
  line-height: 1.6;
  text-align: justify;
`;

const DonationButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #89b72d;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background-color: #76a024;
  }
`;

export default function Home() {
  return (
    <PageContainer>
      <Menu />
      <ContentContainer>
        <h1 style={{ color: '#89b72d', fontSize: '48px' }}>Bem-vindo à Casa da Paz</h1>
        <Title>Quem somos?</Title>
        <Text>
          A Associação Assistencial e Promocional Casa da Paz é uma entidade sem fins lucrativos que oferece apoio integral a crianças e adolescentes no município de Umuarama, Paraná. Mantida por doações, parcerias, convênios e voluntários, nossa missão é garantir um ambiente seguro e acolhedor.
        </Text>
        <Text>
          Nosso objetivo é proporcionar um ambiente onde cada jovem possa ter acesso a oportunidades de aprendizado, apoio psicossocial e atividades enriquecedoras. Trabalhamos para oferecer um futuro melhor, garantindo que nossas crianças e adolescentes tenham as ferramentas necessárias para crescer com dignidade e esperança.
        </Text>
        <Title>Como Ajudar?</Title>
        <CardContainer>
          <Card>
            <CardTitle>Doação</CardTitle>
            <CardText>
              Contribua com nossa missão através de doações financeiras ou materiais. Cada contribuição ajuda a oferecer suporte essencial, como uniformes, material escolar e alimentação de qualidade para nossos jovens.
            </CardText>
            <DonationButton href="/doacoes">Faça uma Doação</DonationButton>
          </Card>
          <Card>
            <CardTitle>Voluntariar-se</CardTitle>
            <CardText>
              Seja um voluntário e ajude a fazer a diferença na vida de nossas crianças e adolescentes. Descubra como você pode contribuir com seu tempo e habilidades. Sua ajuda é essencial para nossas crianças.
            </CardText>
            <DonationButton href="/voluntarios">Seja um Voluntário</DonationButton>
          </Card>
        </CardContainer>
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}
