import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  justify-content: center;
  align-items: center;
  .container {
    width: 90%;
    height: 70%;
    background: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    h2 {
      display: flex;
      margin: 0;
      padding: 0;
      align-items: center;
      flex: 1;
      margin-left: 2em;
      font-size: 2em;
    }
    .form {
      flex: 4;
      display: flex;
      justify-content: space-around;

      .formwrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        h3 {
          font-size: 1.8em;
          font-weight: 500;
        }
        label {
          font-size: 1.2em;
          margin-top: 1em;
        }
        input {
          margin-top: 0.2em;
          border: none;
          border-bottom: solid 1px black;
          width: calc(1.5em * 3);
          font-size: 1.5em;
        }
      }
    }
    .buttonwrap {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      max-height: 20%;

      button {
        margin-right: 2em;
        width: 20%;
        height: 75%;
        background: black;
        border: none;
        color: white;
        font-size: 2em;
        border-radius: 8px;
        cursor: pointer;
      }
    }
  }
`;

export const ButtonSave = styled.button`
  height: 4em;
  width: 15em;
  border: none;
  border-radius: 4px;
  background: black;
  color: white;
  font-size: 1.5em;
  margin: 0;
  padding: 0;
  position: relative;
  left: 70%;
  top: -10%;
  cursor: pointer;
  box-shadow: 0px 5px 1px black;

  &:active {
    background-color: #3e8e41;
    box-shadow: 0 2px #666;
    transform: translateY(4px);
  }
`;
