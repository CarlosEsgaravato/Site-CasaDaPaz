'use client'
import Link from 'next/link';
import styled from 'styled-components'

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 80px;
    background-color: #f8f8f8;  /* Branco mais claro */
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #e0e0e0;  /* Borda inferior */
`;

export const NavbarLink = styled(Link)`
    color: #89b72d;  /* Cor verde para o texto */
    font-size: large;
    text-decoration: none;
    margin: 10px;

    &:hover {
        color: #76a024;  /* Cor de hover */
    }

    @media (max-width: 700px) {
        display: none;
    }
`;

export const LeftContainer = styled.div`
  flex: 20%;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

export const CenterContainer = styled.div`
  flex: 60%;
  display: flex;
  justify-content: center;  /* Centraliza os itens */
  align-items: center;
`;

export const RightContainer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarLinkExtended = styled(Link)`
  color: #89b72d;  /* Cor verde para o texto */
  font-size: large;
  text-decoration: none;
  margin: 10px;
  display: flex;
  align-items: center;

  &:hover {
    color: #76a024;  /* Cor de hover */
  }
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const DonationButton = styled(Link)`
  background-color: #89b72d;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: large;
  font-weight: bold;

  &:hover {
    background-color: #76a024;
    color: #fff;
  }
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #ccc;
  font-size: 45px;
  cursor: pointer;

  :hover {
    color: #fff;
  }

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;
