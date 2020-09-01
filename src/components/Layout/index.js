import React from "react";
import DefaultButton from "../DefaultButton";
import { Link } from "react-router-dom";
import { Container, NavBar, Content } from "./style.js";

function Layout({ children }) {
  return (
    <Container>
      <NavBar>
        <ul>
          <li>
            <DefaultButton
              as={Link}
              heightstyle={"3em"}
              fontcolor={"white"}
              to="/"
            >
              Home
            </DefaultButton>
          </li>
          <li>
            <DefaultButton
              as={Link}
              heightstyle={"3em"}
              fontcolor={"white"}
              to="/uti1"
            >
              UTI - 1
            </DefaultButton>
          </li>
          <li>
            <DefaultButton
              as={Link}
              heightstyle={"3em"}
              fontcolor={"white"}
              to="/uti2"
            >
              UTI - 2
            </DefaultButton>
          </li>
          <li>
            <DefaultButton
              as={Link}
              heightstyle={"3em"}
              fontcolor={"white"}
              to="/uti3"
            >
              UTI - 3
            </DefaultButton>
          </li>
          <li>
            <DefaultButton
              as={Link}
              heightstyle={"3em"}
              fontcolor={"white"}
              to="/utineo"
            >
              UTI - NEO
            </DefaultButton>
          </li>
          <li>
            <DefaultButton
              as={Link}
              heightstyle={"3em"}
              fontcolor={"white"}
              to="/utiped"
            >
              UTI - PEDIÁTRICA
            </DefaultButton>
          </li>
          <li>
            <DefaultButton
              as={Link}
              heightstyle={"3em"}
              fontcolor={"white"}
              to="/geral"
            >
              GERAL
            </DefaultButton>
          </li>
        </ul>
      </NavBar>
      <Content>{children}</Content>
    </Container>
  );
}

export default Layout;
