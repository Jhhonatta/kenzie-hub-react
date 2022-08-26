import styled from "styled-components";

export const Containerlogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;

  padding-top: 81px;
  font-family: inter;
  margin-bottom: 51px;

  h1 {
    color: rgba(255, 87, 127, 1);
    font-weight: 600;
    margin-bottom: 19.39px;
  }

  form {
    background: rgba(33, 37, 41, 1);
    height: 402px;
    border-radius: 3.21px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
  }

  p {
    color: rgba(248, 249, 250, 1);
    font-weight: 700;
    line-height: 22.46px;
    font-size: 14.44px;
    margin: 33.69px 128.35px 22.83px 128.35px;
  }

  label {
    font-family: Inter;
    font-weight: 400;
    font-size: 9.77px;
    color: rgba(248, 249, 250, 1);
    margin-right: 240px;
    margin-bottom: 18px;
  }

  input {
    width: 80%;
    background-color: rgba(52, 59, 65, 1);
    border: 1px solid rgba(248, 249, 250, 1);
    border-radius: 3.21px;
    height: 38.5px;
    padding: 0px 13px;
    margin-bottom: 9px;
    outline: 0;
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
    width: 82%;

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
    width: 90%;
    font-family: Inter;
    font-size: 13px;
    font-weight: 500;
    line-height: 21px;
    color: rgba(255, 255, 255, 1);
    padding: 8px 110px;
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
    padding: 8px 91px;
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
