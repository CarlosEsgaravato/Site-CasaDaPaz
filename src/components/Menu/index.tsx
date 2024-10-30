"use client"
import { useEffect, useState } from "react"
import { LeftContainer, NavbarContainer, NavbarInnerContainer, NavbarLink, NavbarLinkContainer, NavbarLinkExtended, RightContainer } from "./style"
import axios, { AxiosError } from "axios"

interface ICategoria {
  id: number,
  nome: string
}

export const Menu = () => {

  const [categorias, setCategorias] = useState<Array<ICategoria>>([]);

  useEffect(() => {

    axios.get('http://localhost:3001/categorias')
      .then((resposta) => {
        setCategorias(resposta.data)
      })
      .catch((err: AxiosError) => {
        console.log(err)
      })

  }, [])

  return (
    <>
      <NavbarContainer>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkExtended
              href={"/"}
              style={{
                color: '#fff',
              }}
            >
              Casa da Paz
            </NavbarLinkExtended>
          </LeftContainer>
          <RightContainer>
            <NavbarLinkContainer>
              <NavbarLink href={"/"}>Início</NavbarLink>
              <NavbarLink href={"/sobre-nos"}>Sobre Nós</NavbarLink>
              <NavbarLink href={"/doacoes"}>Doações</NavbarLink>
              <NavbarLink href={"/bazar"}>Bazar</NavbarLink>
              <NavbarLink href={"/voluntarios"}>Voluntários</NavbarLink>
              <NavbarLink href={"/galeria"}>Galeria</NavbarLink>
              <NavbarLink href={"/contato"}>Contato</NavbarLink>
            </NavbarLinkContainer>
          </RightContainer>
        </NavbarInnerContainer>
      </NavbarContainer>
    </>
  )
}