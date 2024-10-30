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

const ImageContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const MissionImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 20px;
`;

export default function SobreNos() {
  return (
    <>
      <Menu />
      <Section>
        <Content>
          <Title>Sobre a Casa da Paz</Title>
          <Text>
            A Associação Assistencial e Promocional Casa da Paz é uma entidade sem fins lucrativos que oferece apoio integral a crianças e adolescentes no município de Umuarama, Paraná. Mantida por doações, parcerias, convênios e voluntários, nossa missão é garantir um ambiente seguro e acolhedor.
          </Text>
          <Text>
            Fundada para responder à urgência da alimentação, a Casa da Paz rapidamente percebeu que a questão era mais ampla. Observamos que muitas crianças estavam vulneráveis nas ruas, enfrentando altos índices de repetência escolar e evasão, e expostas a perigos graves como o tráfico de drogas e a prostituição.
          </Text>
          <Text>
            Nosso objetivo é proporcionar um ambiente seguro e acolhedor, onde cada jovem possa ter acesso a oportunidades de aprendizado, apoio psicossocial e atividades enriquecedoras. Trabalhamos para oferecer um futuro melhor, garantindo que nossas crianças e adolescentes tenham as ferramentas necessárias para crescer com dignidade e esperança.
          </Text>
          <Subtitle>No que acreditamos?</Subtitle>
          <Text>
            Acreditamos que é possível mudar o destino de crianças e adolescentes por meio do conhecimento. Oferecemos oficinas de artes, cultura, lazer e educação, integradas com noções de ética e cidadania. Nosso objetivo é capacitar essas jovens pessoas para que se tornem protagonistas de suas próprias histórias e construam um futuro melhor.
          </Text>
          <Subtitle>Onde e como as atividades acontecem?</Subtitle>
          <Text>
            As atividades da Casa da Paz são realizadas no contraturno escolar tanto nas nossas instalações quanto em instituições parceiras. Contamos com a colaboração de voluntários e estagiários para a execução das oficinas. Apesar das dificuldades com recursos, garantimos que nossos participantes recebam uniformes, material escolar e lanches preparados com produtos de qualidade e segurança alimentar.
          </Text>
          <Subtitle>De onde vêm os recursos?</Subtitle>
          <Text>
            Os recursos para a manutenção dos projetos da Casa da Paz são obtidos através de doações de pessoas físicas e jurídicas, termo de colaboração com a Prefeitura Municipal de Umuarama, arrecadação do programa Nota Paraná e promoções realizadas pela entidade.
          </Text>
          <Text>
            Com grande empenho, construímos nossa sede própria de 400 m² em dois pisos, em um terreno de 800 m² doado pelo poder público municipal, já devidamente escriturado em nome da Casa da Paz. Com a nova estrutura, aprimoramos a qualidade dos nossos serviços de convivência e fortalecimento de vínculos para crianças, adolescentes e suas famílias.
          </Text>
          <ImageContainer>
            <MissionImage src="/imagens/missao.png" alt="Missão, Visão e Valores" />
          </ImageContainer>
        </Content>
      </Section>
    </>
  );
}
