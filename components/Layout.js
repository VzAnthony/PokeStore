import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  background: crimson;
`;
const LinkStyle = styled(Link)`
  background: blue;
  color: orange;
`;
const Ul = styled.ul`
  background: orange;
`;

const Layaout = ({ children }) => {
  return (
    <>
      <header>
        <Nav className="p-d-flex p-jc-between">
          <LinkStyle href="/">
            <a>PokeStore</a>
          </LinkStyle>
          <Ul className="p-d-flex p-flex-column">
            <li>
              <Link href="./trending">
                <a>Trending</a>
              </Link>
            </li>
            <li>
              <Link href="./favs">
                <a>Favs</a>
              </Link>
            </li>
            <li>
              <Link href="./basket">
                <a>Basket</a>
              </Link>
            </li>
          </Ul>
        </Nav>
      </header>
      <main>{children}</main>
      <footer>
        <h2>finalizamos con un footer</h2>
      </footer>
    </>
  );
};

export default Layaout;
