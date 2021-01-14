import React from "react";
import Link from "next/link";

const Layaout = ({ children }) => {
  return (
    <>
      <header>
        <nav className="p-d-flex p-flex-row">
          <Link href="/" classNamep="p-mb-2">
            <a>PokeStore</a>
          </Link>
          <ul className="p-d-flex">
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
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <h2>finalizamos con un footer</h2>
      </footer>
    </>
  );
};

export default Layaout;
