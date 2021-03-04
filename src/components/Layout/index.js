import React from "react";
import DefaultButton from "../DefaultButton";
import { Link, useHistory } from "react-router-dom";
import { Container, NavBar, Content } from "./style.js";
import MenuIcon from "@material-ui/icons/Menu";
import logoFono from "../../assets/fonoaudiologiahospitalar.png";

function Layout({ children }) {
  const history = useHistory();
  return (
    <Container>
      <NavBar>
        <div className="menuwraper">
          <MenuIcon className="menu" />
        </div>
        <div className="navitems">
          <ul>
          <li onClick={() => history.push("/")}>
              <DefaultButton
                as={Link}
                heightstyle={"3em"}
                fontcolor={"white"}
                to="/"
              >
                PRONTUÁRIOS
              </DefaultButton>
            </li>
         
            <li onClick={() => history.push("/anual")}>
              <DefaultButton
                as={Link}
                heightstyle={"3em"}
                fontcolor={"white"}
                to="/anual"
              >
                GRÁFICOS
              </DefaultButton>
            </li>
           
          </ul>
          <img src={logoFono} />
        </div>
      </NavBar>
      <Content>{children}</Content>
    </Container>
  );
}

export default Layout;
