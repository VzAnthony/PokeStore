import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Nav,
  Anchor,
  Ul,
  Main,
  Footer,
  P,
  Li,
  SidebarStyled,
  ButtonStyled,
  LiHeader,
} from "../styles/LayoutStyled";

const Layaout = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useRouter();
  return (
    <>
      <header>
        <Nav className="p-d-flex p-jc-between p-ai-center">
          <Link href="/">
            <Anchor>PokeStore</Anchor>
          </Link>
          <Ul className="p-d-flex p-jc-end">
            <LiHeader>
              <Link href="../">
                <a className={`${pathname === "/" ? "active" : ""}`}>
                  <i className="pi pi-home"></i>
                </a>
              </Link>
            </LiHeader>
            <LiHeader>
              <Link href="../trending">
                <a className={`${pathname === "/trending" ? "active" : ""}`}>
                  <i className="pi pi-chart-line"></i>
                </a>
              </Link>
            </LiHeader>
            <LiHeader>
              <Link href="../favs">
                <a className={`${pathname === "/favs" ? "active" : ""}`}>
                  <i className="pi pi-star-o"></i>
                </a>
              </Link>
            </LiHeader>
            <LiHeader>
              <Link href="../payment">
                <a className={`${pathname === "/payment" ? "active" : ""}`}>
                  <i className="pi pi-shopping-cart"></i>
                </a>
              </Link>
            </LiHeader>
            <li>
              <SidebarStyled
                visible={visible}
                baseZIndex={1000000}
                onHide={() => setVisible(false)}
              >
                <Link href="/">
                  <p>Home</p>
                </Link>
                <Link href="../trending">
                  <p>Trending</p>
                </Link>
                <Link href="../favs">
                  <p>Favorites</p>
                </Link>
                <Link href="../payment">
                  <p>Cart</p>
                </Link>
              </SidebarStyled>
              <ButtonStyled
                icon="pi pi-bars"
                onClick={(e) => setVisible(true)}
              />
            </li>
          </Ul>
        </Nav>
      </header>
      <Main>{children}</Main>
      <Footer className="p-d-flex p-jc-around">
        <div>
          <P>Nuestras Redes</P>
          <div>
            <ul className="p-grid  p-justify-center">
              <Li className="p-col-fixed p-col-align-center ">
                <Link href="https://es-la.facebook.com/Pokemon/">
                  <a target="_blank">
                    <i className="pi pi-facebook"></i>
                  </a>
                </Link>
              </Li>
              <Li className="p-col-fixed p-col-align-center">
                <Link href="https://github.com/VzAnthony/PokeStore">
                  <a target="_blank">
                    <i className="pi pi-github"></i>
                  </a>
                </Link>
              </Li>
              <Li className="p-col-fixed p-col-align-center">
                <Link href="https://www.youtube.com/user/PokemonOficialES/videos">
                  <a target="_blank">
                    <i className="pi pi-youtube"></i>
                  </a>
                </Link>
              </Li>
              <Li className="p-col-fixed p-col-align-center">
                <Link href="https://twitter.com/pokemon?lang=es">
                  <a target="_blank">
                    <i className="pi pi-twitter"></i>
                  </a>
                </Link>
              </Li>
            </ul>
          </div>
        </div>
        <div>
          <P>Mas Información </P>
          <div>
            <ul>
              <Li className="p-col-12">
                <Link href="../">
                  <a>
                    <p>Nuestros Articulos</p>
                  </a>
                </Link>
              </Li>
              <Li className="p-col-12">
                <Link href="./trending">
                  <a>
                    <p>Tendencia</p>
                  </a>
                </Link>
              </Li>
              <Li className="p-col-12">
                <p>Todos los derechos Reservados ©</p>
              </Li>
            </ul>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default Layaout;
