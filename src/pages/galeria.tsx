import { useState, useEffect } from "react";
import { Menu } from "@/components/Menu";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "@/components/Footer";
import axios from 'axios';

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
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px 3%;
  }
`;

const Title = styled.h2`
  color: #89b72d;
  margin-bottom: 20px;
  text-align: center;
`;

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const GalleryImageContainer = styled.div`
  width: 100%;
  padding-top: 75%;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const GalleryImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Modal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 1000;

  &.show {
    display: flex;
  }
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90%;
  text-align: center;
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 80vh;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  background-color: #89b72d;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #76a024;
  }
`;

export default function Galeria() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/images');
        const imageUrls = response.data.map((image: { filename: string }) => `http://localhost:8000/storage/images/${image.filename}`);
        setImages(imageUrls);
      } catch (error) {
        console.error('Erro ao carregar imagens:', error);
      }
    };

    loadImages();
  }, []);

  const openModal = (src: string) => {
    setSelectedImage(src);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage("");
  };

  return (
    <PageContainer>
      <Menu />
      <Section>
        <Title>Galeria de Eventos</Title>
        <GalleryContainer>
          {images.map((src, index) => (
            <GalleryImageContainer key={index} onClick={() => openModal(src)}>
              <GalleryImage src={src} alt={`Galeria ${index + 1}`} />
            </GalleryImageContainer>
          ))}
        </GalleryContainer>
      </Section>
      <Modal className={showModal ? "show" : ""}>
        <ModalContent>
          <ModalImage src={selectedImage} alt="Imagem ampliada" />
          <CloseButton onClick={closeModal}>Fechar</CloseButton>
        </ModalContent>
      </Modal>
      <Footer />
    </PageContainer>
  );
}
