import { useState, useEffect } from "react";
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
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: #89b72d;
  margin-bottom: 20px;
  text-align: center;
`;

const AlbumContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const AlbumCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  cursor: pointer;
  text-align: center;
`;

const AlbumImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const AlbumTitle = styled.h3`
  color: #333;
  padding: 10px;
`;

const Modal = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 800px;
  width: 90%;
  text-align: center;
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  background-color: #89b72d;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #76a024;
  }
`;

export default function Galeria() {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch albums from the backend
    fetch("/api/albums")
      .then(response => response.json())
      .then(data => setAlbums(data));
  }, []);

  const openAlbum = (album) => {
    setSelectedAlbum(album);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedAlbum(null);
  };

  return (
    <PageContainer>
      <Menu />
      <Section>
        <Title>Galeria de Eventos</Title>
        <AlbumContainer>
          {albums.map((album) => (
            <AlbumCard key={album.id} onClick={() => openAlbum(album)}>
              <AlbumImage src={album.coverImage} alt={album.title} />
              <AlbumTitle>{album.title}</AlbumTitle>
            </AlbumCard>
          ))}
        </AlbumContainer>
      </Section>
      {selectedAlbum && (
        <Modal show={showModal}>
          <ModalContent>
            <h2>{selectedAlbum.title}</h2>
            {selectedAlbum.images.map((image, index) => (
              <ModalImage key={index} src={image.url} alt={`Imagem ${index + 1}`} />
            ))}
            <CloseButton onClick={closeModal}>Fechar</CloseButton>
          </ModalContent>
        </Modal>
      )}
      <Footer />
    </PageContainer>
  );
}
