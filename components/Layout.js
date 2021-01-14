import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  background: crimson;
  padding: 5px;

  @media (min-width: 321px) {
    background: blue;
  }

  @media (min-width: 331px) {
    background: green;
  }
`;
const Anchor = styled.a`
  background: blue;
  color: orange;
  margin-left: 10px;
  display: block;
`;
const Ul = styled.ul`
  display: none;
  background: orange;
  width: 80%;
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
