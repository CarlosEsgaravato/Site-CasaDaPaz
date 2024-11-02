import styled from 'styled-components';

export const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #f8f8f8;
  color: #89b72d;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  position: relative;
  bottom: 0;
  margin-top: auto;
`;

export const IconLink = styled.a`
  color: #89b72d;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    color: #ff6347;
  }
`;

export const BootstrapIcon = styled.i`
  font-size: 32px;
`;
