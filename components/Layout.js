import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  background: #f05454;
  padding: 5px;
  height: 50px;
`;
const Anchor = styled.a`
  color: white;
  font-weight: bold;
  font-size: 2rem;
  text-shadow: -4px 2px 2px black;
  margin-left: 10px;
  cursor: pointer;
`;
const Ul = styled.ul`
  width: 45%;
  height: 100%;

  && a {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    height: 100%;
    width: 100%;
  }
`;

const Main = styled.main`
  background: #dddddd;
  padding: 0 50px 20px 50px;
  width: 100%;
`;

const Footer = styled.footer`
  background: #222831;
  height: auto;
  color: white;
  padding: 20px 0;
`;

const P = styled.p`
  margin: 0 0 10px 0;
  text-align: center;
  font-size: 1.1rem;
  color: #f05454;
  font-weight: 600;
`;

const Li = styled.li`
  text-align: center;
`;

const Layaout = ({ children }) => {
  return (
    <>
      <header>
        <Nav className="p-d-flex p-jc-between p-ai-center">
          <Link href="/">
            <Anchor>PokeStore</Anchor>
          </Link>
          <Ul className="p-d-flex p-jc-evenly p-dm-10">
            <li>
              <Link href="./trending">
                <a>
                  <i className="pi pi-chart-line"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="./favs">
                <a>
                  <i className="pi pi-star-o"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="./basket">
                <a>
                  <Li className="pi pi-shopping-cart"></Li>
                </a>
              </Link>
            </li>
          </Ul>
        </Nav>
      </header>
      <Main>{children}</Main>
      <Footer className="p-grid">
        <div className="p-col-6">
          <P>Nuestras Redes</P>
          <div>
            <ul className="p-grid ">
              <Li className="p-col-6 p-col-align-center ">
                <i className="pi pi-facebook"></i>
              </Li>
              <li className="p-col-fixed p-col-align-center">
                <i className="pi pi-github"></i>
              </li>
              <Li className="p-col-6 p-col-align-center">
                <i className="pi pi-youtube"></i>
              </Li>
              <li className="p-col-fixed p-col-align-center">
                <i className="pi pi-twitter"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-col-6">
          <P>Mas Información </P>
          <div>
            <ul>
              <Li className="p-col-12">Quienes Somos?</Li>
              <Li className="p-col-12">Nuestros Articulos</Li>
              <Li className="p-col-12">Tendencia</Li>
              <Li className="p-col-12">Todos los derechos Reservados ©</Li>
            </ul>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default Layaout;
