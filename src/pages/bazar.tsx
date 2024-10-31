'use client'
import { Menu } from "@/components/Menu";
import styled from "styled-components";
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

const Content = styled.div`
  max-width: 800px;
  background-color: rgba(255, 255, 255, 0.8); /* Fundo branco com transparência */
  padding: 40px;
  border-radius: 8px;
  margin: 20px;
  text-align: left;
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
  text-align: center;
`;

const Text = styled.p`
  color: #333;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: justify;
`;

const BannerImage = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px; /* Espaço entre a imagem e o texto */
`;

export default function Bazar() {
  return (
    <PageContainer>
      <Menu />
      <Section>
        <Content>
          <BannerImage src="/imagens/bazar1.jpg" alt="Banner do Bazar" />
          <Title>Bazar Permanente Beneficente</Title>
          <Text>
            A Casa da Paz organiza um Bazar Permanente Beneficente como uma das formas de arrecadar fundos para apoiar nossos programas e serviços. Em nosso bazar, você encontrará uma variedade de itens novos e usados, incluindo roupas, acessórios, livros, brinquedos e muito mais, tudo a preços acessíveis.
          </Text>
          <Subtitle>Como Funciona</Subtitle>
          <Text><strong>Localização:</strong> O bazar está localizado na Av. Rio de Janeiro, 4453, Zona II e está aberto ao público de terça a sexta das 8 às 17h e no sábado das 8 às 12h.</Text>
          <Text><strong>Doações:</strong> Aceitamos doações de itens em bom estado para revenda no bazar. Se você deseja contribuir, entre em contato conosco para agendar a entrega.</Text>
          <Text><strong>Voluntariado:</strong> Contamos com o apoio de voluntários para ajudar na organização e operação do bazar. Se você gostaria de se envolver, ficaremos felizes em recebê-lo em nossa equipe.</Text>
          <Subtitle>Benefícios</Subtitle>
          <Text><strong>Para a Comunidade:</strong> O bazar oferece uma maneira de adquirir itens de qualidade a preços acessíveis, promovendo a sustentabilidade e o consumo consciente.</Text>
          <Text><strong>Para a Casa da Paz:</strong> Todos os recursos arrecadados no bazar são destinados diretamente aos nossos programas de apoio a crianças e adolescentes, contribuindo para a melhoria de suas vidas e o fortalecimento de nossos serviços.</Text>
          <Subtitle>Visite Nosso Bazar</Subtitle>
          <Text>
            Sua participação e apoio são fundamentais para o sucesso do nosso bazar. Venha nos visitar, faça compras, doe itens ou ofereça seu tempo como voluntário. Cada ação ajuda a fazer a diferença na vida das crianças e adolescentes atendidos pela Casa da Paz.
          </Text>
        </Content>
      </Section>
      <Footer />
    </PageContainer>
  );
}
