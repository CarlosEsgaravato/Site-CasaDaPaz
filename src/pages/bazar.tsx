import { Menu } from "@/components/Menu";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const Section = styled.div`
  padding: 40px 6%;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 800px;
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
`;

const Text = styled.p`
  color: #333;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const BannerContainer = styled.div`
  width: 100%;
  height: 300px;
  background-image: url('/imagens/bazar.jpg');
  background-color: #e0e0e0; /* Placeholder for the banner image */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

const BannerText = styled.h3`
  color: #333;
  font-size: 24px;
`;

export default function Bazar() {
  return (
    <>
      <Menu />
        <BannerContainer>
        </BannerContainer>
      <Section>
        <Content>
          
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
    </>
  );
}
