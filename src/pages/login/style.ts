import styled from "styled-components";

export const Containerlogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  font-family: inter;

  h1 {
    color: rgba(255, 87, 127, 1);
    font-weight: 600;
    margin-bottom: 19.39px;
  }

  .containerForm {
    display: flex;
    flex-direction: column;
    width: 90%;
    padding-top: 5px;
  }

  form {
    background: rgba(33, 37, 41, 1);
    height: 402px;
    width: 95%;
    border-radius: 3.21px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;

    @media (min-width: 400px) {
      max-width: 400px;
    }
  }

  p {
    color: rgba(248, 249, 250, 1);
    font-weight: 700;
    line-height: 22.46px;
    font-size: 14.44px;
    text-align: center;
  }

  .buttonPassword {
    width: max-content;
    background-color: transparent;
    padding: 0px;
    margin: 0px;
    border: none;
    align-items: center;
  }

  label {
    width: 90%;

    font-family: Inter;
    font-weight: 400;
    font-size: 12px;
    color: rgba(248, 249, 250, 1);

    margin-bottom: 18px;
  }

  input {
    background-color: rgba(52, 59, 65, 1);
    border: 1px solid rgba(248, 249, 250, 1);
    border-radius: 3.21px;
    height: 38.5px;
    padding: 0px 13px;
    margin-bottom: 9px;
    outline: 0;
  }

  .iconPassword:hover {
    color: #ffff33;
  }

  input::placeholder {
    color: #868e96;
    font-family: Inter;
    font-weight: 400;
    font-size: 12.99px;
    line-height: 21.1px;
    margin-left: 13px;
  }

  .divPassword {
    background-color: rgba(52, 59, 65, 1);
    border: 1px solid rgba(248, 249, 250, 1);

    border-radius: 3.21px;
    display: flex;
    align-items: center;
    margin-bottom: 9px;
    padding: 0 10px 0 13px;
  }

  .divPassword > input {
    width: 95%;
    margin-right: 5px;
    border: none;
    padding: 0px 0px 0px 0px;
    margin-bottom: 0px;
    outline: 0;
  }

  .divPassword > input::placeholder {
    margin-left: 0px;
  }

  button {
    width: 100%;
    font-family: Inter;
    font-size: 13px;
    font-weight: 500;
    line-height: 21px;
    color: rgba(255, 255, 255, 1);

    background-color: rgba(255, 87, 127, 1);
    border-radius: 4px;
    border: 1px solid rgba(255, 87, 127, 1);
    height: 38px;
    cursor: pointer;
    margin-top: 15px;
  }

  span {
    font-family: Inter;
    font-size: 10px;
    font-weight: 600;
    line-height: 14px;
    color: rgba(134, 142, 150, 1);
    margin: 27px 0px 17px 0px;
  }

  .buttonCadastro {
    background-color: rgba(134, 142, 150, 1);
    color: rgba(248, 249, 250, 1);
    font-family: Inter;
    font-size: 13px;
    font-weight: 500;
    line-height: 21px;

    border: 1px solid rgba(134, 142, 150, 1);
    margin-bottom: 36px;
  }

  .error {
    font-family: Inter;
    font-weight: 400;
    font-size: 9.77px;
    color: #d4ee5e;
    margin: 0px;
  }
`;
