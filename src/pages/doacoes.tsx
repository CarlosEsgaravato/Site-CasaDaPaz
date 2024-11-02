import { Menu } from "@/components/Menu";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "@/components/Footer";

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f0f0f0;
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

const Quote = styled.blockquote`
  font-style: italic;
  color: #555;
  margin-bottom: 20px;
  text-align: center;
`;

const DonationDetails = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  text-align: center;
`;

const QrCodeContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const QrCodeImage = styled.img`
  max-width: 200px;
  height: auto;
  border-radius: 8px;
`;

const CenteredText = styled.p`
  text-align: center;
  color: #333;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ContactLink = styled.a`
  color: #89b72d;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const DonationImage = styled.img`
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  margin-right: 20px;
`;

const ImageTextContainer = styled.div`
  max-width: 400px;
`;

const ImageText = styled.p`
  color: #333;
  line-height: 1.6;
`;

export default function Doacoes() {
  return (
    <PageContainer>
      <Menu />
      <Section>
        <Content>
          <ImageContainer>
            <DonationImage src="/imagens/doacao.jpg" alt="Importância da Doação" />
            <ImageTextContainer>
              <ImageText>
                As doações são essenciais para a Casa da Paz. Elas nos permitem oferecer um ambiente seguro e acolhedor para nossas crianças e adolescentes, proporcionando oportunidades de aprendizado, apoio psicossocial e atividades enriquecedoras. Com sua ajuda, podemos garantir que cada jovem tenha as ferramentas necessárias para crescer com dignidade e esperança.
              </ImageText>
            </ImageTextContainer>
          </ImageContainer>
          <Title>Faça sua Doação</Title>
          <Quote>“Deve-se doar com a alma livre, simples, apenas por amor, espontaneamente!” – Martinho Lutero</Quote>
          <Text>
            Você pode ajudar a Casa da Paz com sua doação por depósito ou transferência bancária. Contribua com qualquer valor para:
          </Text>
          <DonationDetails>
            <Text><strong>Banco:</strong> SICOOB (756)</Text>
            <Text><strong>Agência:</strong> 4379</Text>
            <Text><strong>Conta Corrente:</strong> 4586-1</Text>
            <Text><strong>CNPJ:</strong> 05.509.404/0001-29</Text>
            <Text><strong>Titular:</strong> Associação Assistencial e Promocional Casa da Paz</Text>
          </DonationDetails>
          <Text>
            Ou faça sua doação através do nosso PIX:
          </Text>
          <DonationDetails>
            <QrCodeContainer>
              <QrCodeImage src="/imagens/qrcode.png" alt="QR Code para doação via PIX" />
            </QrCodeContainer>
            <CenteredText><strong>Chave PIX:</strong> 05.509.404/0001-29</CenteredText>
          </DonationDetails>
          <Subtitle>Participe do Programa Adote um Aluno</Subtitle>
          <Text>
            Você também pode se cadastrar para participar do nosso programa “Adote um Aluno”. Entre em contato para mais detalhes sobre como fazer parte dessa iniciativa e apoiar diretamente o desenvolvimento de nossos jovens.
          </Text>
          <Subtitle>Parcerias e Patrocínios</Subtitle>
          <Text>
            Empresas e organizações podem colaborar com nossa causa por meio de parcerias e patrocínios.
          </Text>
          <Text>
            Sua empresa pode ajudar a promover eventos, fornecer recursos ou apoiar projetos específicos. Apoio em Eventos: Participe dos nossos eventos e ajude a divulgar nossa causa. Sua presença e apoio são fundamentais para o sucesso de nossas iniciativas e para aumentar a conscientização sobre nosso trabalho.
          </Text>
          <Text>
            Se interessou? Então não perca tempo, venha contribuir com a gente! Entre em contato conosco, pelos nossos canais de comunicação que estão disponíveis no menu <ContactLink href="/contato">FALE CONOSCO</ContactLink>.
          </Text>
        </Content>
      </Section>
      <Footer />
    </PageContainer>
  );
}
