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
  color: white;
  padding: 20px 0;

  @media (max-width: 533px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    div {
      margin: 20px 0;
    }
  }
`;

const P = styled.p`
  margin: 0 0 20px 0;
  text-align: center;
  font-size: 1.1rem;
  color: #f05454;
  font-weight: 600;
`;

const Li = styled.li`
  text-align: center;

  i {
    font-size: 2rem;
    color: white;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
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
              <Link href="../favs">
                <a>
                  <i className="pi pi-star-o"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="../cart">
                <a>
                  <i className="pi pi-shopping-cart"></i>
                </a>
              </Link>
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
                <Link href="./trending">
                  <a>
                    <p>Quienes Somos?</p>
                  </a>
                </Link>
              </Li>
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
