import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./style.js";

function Home() {
  return (
    <Container>
      <Link className="link" to="/uti1">
        UTI - 1
      </Link>
      <Link className="link" to="/uti2">
        UTI - 2
      </Link>
      <Link className="link" to="/uti3">
        UTI - 3
      </Link>
      <Link className="link" to="/utineo">
        UTI - NEO
      </Link>
      <Link className="link" to="/utiped">
        UTI - PEDIÁTRICA
      </Link>
    </Container>
  );
}

export default Home;
