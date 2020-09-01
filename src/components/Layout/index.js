import React from "react";
import DefaultButton from "../DefaultButton";
import { Link, useHistory } from "react-router-dom";
import { Container, NavBar, Content } from "./style.js";
import MenuIcon from "@material-ui/icons/Menu";

function Layout({ children }) {
  const history = useHistory();
  return (
    <Container>
      <NavBar>
        <div className="menuwraper">
          <MenuIcon className="menu" />
        </div>
        <ul>
          <li onClick={() => history.push("/tabela")}>
            <DefaultButton
              as={Link}
              heightstyle={"3em"}
              fontcolor={"white"}
              to="/tabela"
            >
              TABELA
            </DefaultButton>
          </li>
          <li onClick={() => history.push("/")}>
            <DefaultButton
              as={Link}
              heightstyle={"3em"}
              fontcolor={"white"}
              to="/"
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
