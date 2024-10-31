'use client'
import { Menu } from "@/components/Menu";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "@/components/Footer";

const Banner = styled.div`
  width: 100%;
  height: 400px;
  background-image: url('/imagens/imagemcasadapaz.jpeg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Section = styled.div`
  padding: 40px 6%;
`;

const Title = styled.h2`
  color: #89b72d;
  margin-bottom: 20px;
`;

const Text = styled.p`
  color: #333;
  line-height: 1.6;
`;

const DonationHighlight = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  text-align: center;
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
    <>
      <Menu />
      <Banner>
        <h1 style={{ color: '#fff', fontSize: '48px' }}>Bem-vindo à Casa da Paz</h1>
      </Banner>
      <Section>
        <Title>Sobre a Casa da Paz</Title>
        <Text>
          A Associação Assistencial e Promocional Casa da Paz é uma entidade sem fins lucrativos que oferece apoio integral a crianças e adolescentes no município de Umuarama, Paraná. Mantida por doações, parcerias, convênios e voluntários, nossa missão é garantir um ambiente seguro e acolhedor.
        </Text>
        <Text>
          Nosso objetivo é proporcionar um ambiente onde cada jovem possa ter acesso a oportunidades de aprendizado, apoio psicossocial e atividades enriquecedoras. Trabalhamos para oferecer um futuro melhor, garantindo que nossas crianças e adolescentes tenham as ferramentas necessárias para crescer com dignidade e esperança.
        </Text>
      </Section>
      <Section>
        <Title>Como Ajudar?</Title>
        <DonationHighlight>
          <Text>
            Contribua com nossa missão através de doações financeiras ou materiais. Cada contribuição ajuda a oferecer suporte essencial, como uniformes, material escolar e alimentação de qualidade para nossos jovens.
          </Text>
          <DonationButton href="/doacoes">Faça uma Doação</DonationButton>
        </DonationHighlight>
      </Section>
      <Footer />
    </>
  );
}
