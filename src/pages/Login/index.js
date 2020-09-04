import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../context/firebase";
import { useGlobalContext } from "../../context/index";
import { Container } from "./style.js";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function handleSubmit() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        const uid = firebase.auth().currentUser;
        localStorage.setItem("userFono", JSON.stringify(uid));
        window.location.href = "/";
      });
  }

  function createAccount() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(() => {
        window.location.href = "/";
      });
  }

  return (
    <Container>
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <span>Entrar</span>
                  <span>Criar conta</span>
                </h6>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label for="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Entrar</h4>
                          <div className="form-group">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="E-mail"
                              id="logemail"
                              autocomplete="off"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Senha"
                              id="logpass"
                              autocomplete="off"
                              onChange={(e) => setPass(e.target.value)}
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a onClick={handleSubmit} className="btn mt-4">
                            Entrar
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Criar Conta</h4>

                          <div className="form-group mt-2">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="E-mail"
                              id="logemail"
                              autocomplete="off"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Senha"
                              id="logpass"
                              autocomplete="off"
                              onChange={(e) => setPass(e.target.value)}
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a
                            onClick={() => createAccount()}
                            className="btn mt-4"
                          >
                            Enviar
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
