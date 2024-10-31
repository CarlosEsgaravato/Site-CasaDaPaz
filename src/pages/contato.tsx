import { Menu } from "@/components/Menu";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "@/components/Footer";

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

const Text = styled.p`
  color: #000;
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

const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const BannerImage = styled.img`
  max-width: 800px;
  width: 100%;
  height: auto;
`;

export default function Contato() {
  return (
    <>
      <Menu />
      <br />
      <BannerContainer>
        <BannerImage src="/imagens/fotocasadapaz.jpeg" alt="Banner de Contato" />
      </BannerContainer>
      <Section>
        <Content>
          <Title>Contato</Title>
          <Text><strong>Telefone/WhatsApp:</strong> (44) 99976-0543</Text>
          <Text><strong>Instagram Casa da Paz:</strong> <ContactLink href="https://www.instagram.com/casadapaz_umuarama" target="_blank">@casadapaz_umuarama</ContactLink></Text>
          <Text><strong>Fanpage:</strong> <ContactLink href="http://facebook.com/CasaDaPazUmuarama" target="_blank">facebook.com/CasaDaPazUmuarama</ContactLink></Text>
          <Text><strong>E-mail:</strong> <ContactLink href="mailto:casadapazassociacao@gmail.com">casadapazassociacao@gmail.com</ContactLink></Text>
          <Text><strong>Endereço da Sede da Casa da Paz:</strong> Rua Mimosa, 3172, Jd. Panorama</Text>
          <Text><strong>Endereço do Bazar Permanente e SEBO Literário:</strong> Av. Rio de Janeiro, 4453, Zona II</Text>
          <Text><strong>Instagram Bazar Beneficente:</strong> <ContactLink href="https://www.instagram.com/bazaresebo_casadapaz" target="_blank">@bazaresebo_casadapaz</ContactLink></Text>
        </Content>
      </Section>
      <Footer />
    </>
  );
}
