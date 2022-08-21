import styled from "styled-components";

export const Modal = styled.form`
  max-width: 369px;
  width: 80%;
  margin: 0 auto;
  font-family: Inter;
  z-index: 1;
  position: absolute;
  margin: 322px auto;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .divHead {
    display: flex;
    background-color: #343b41;
    border-radius: 3px 3px 0px 0px;
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;

    p {
      line-height: 19.25px;
      font-weight: 700px;
      font-size: 11.23px;
      color: #f8f9fa;
    }

    button {
      color: #868e96;
    }
  }

  .divBotton {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #212529;
    padding-top: 21px;
    gap: 21.39px;
    border-radius: 0px 0px 3.21px 3.21px;

    label {
      width: auto;
      display: flex;
      flex-direction: column;
      color: #f8f9fa;
      width: 90%;
      font-weight: 400;
      font-size: 9.77px;
      margin: 0px auto;

      input {
        border: 0.98px solid rgba(248, 249, 250, 1);
        background-color: rgba(52, 59, 65, 1);
        border-radius: 3.21px;
        padding: 8.5px;
        margin-top: 17px;
      }

      input::placeholder {
        color: rgba(134, 142, 150, 1);
      }
    }

    select {
      margin-top: 17px;
      background-color: rgba(52, 59, 65, 1);
      border: 0.98px solid rgba(248, 249, 250, 1);
      border-radius: 3.21px;
      color: rgba(134, 142, 150, 1);
      padding: 8.5px;
    }

    button {
      background-color: #ff577f;
      border: 1.22px solid rgba(255, 87, 127, 1);
      border-radius: 4.06px;
      width: 90%;
      margin: 0px auto 25px auto;
      color: rgba(255, 255, 255, 1);
      padding: 10px;
      cursor: pointer;
    }
  }
`;
