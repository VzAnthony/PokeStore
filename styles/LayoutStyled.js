import styled from "styled-components";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

export const Nav = styled.nav`
  background: #f05454;
  padding: 5px;
  height: 50px;
`;
export const Anchor = styled.a`
  color: white;
  font-weight: bold;
  font-size: 2rem;
  text-shadow: -4px 2px 2px black;
  margin-left: 10px;
  cursor: pointer;
`;
export const Ul = styled.ul`
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

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const Main = styled.main`
  background: #dddddd;
  padding: 0 50px 20px 50px;
  width: 100%;

  @media (max-width: 425px) {
    padding: 0 10px 20px 10px;
  }
`;

export const Footer = styled.footer`
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

export const P = styled.p`
  margin: 0 0 20px 0;
  text-align: center;
  font-size: 1.1rem;
  color: #f05454;
  font-weight: 600;
`;

export const Li = styled.li`
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

export const SidebarStyled = styled(Sidebar)`
  background: #222831;
  .p-sidebar-content {
    text-align: center;
    font-size: 1.8rem;
    color: white;
  }

  .p-sidebar-content p {
    margin: 30px 0;
  }
`;

export const ButtonStyled = styled(Button)`
  background: #222831;
  border: 1px solid #30475e;
  text-align: start;
  margin: 0 15px 0 0;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const LiHeader = styled.li`
  display: none;

  .active {
    background: #b22222;
    border-radius: 50px;
  }

  @media (min-width: 768px) {
    display: block;
  }
`;
