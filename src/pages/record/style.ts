import styled from "styled-components";

export const DivRecord = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;

  .logoAndButton {
    width: 100%;
    margin: 0 auto;
    color: #ff577f;
    display: flex;
    align-items: center;
    font-family: Inter;
    font-weight: 700;
    justify-content: space-between;

    @media (min-width: 562px) {
      max-width: 572px;
    }
  }

  .logoAndButton > button {
    color: #f8f9fa;
    background-color: rgba(33, 37, 41, 1);
    border-radius: 4px;
    width: 79px;
    padding: 4.48px 16px;
    border: none;
    font-family: Inter;
    font-size: 10px;
    font-weight: 600;
    line-height: 23px;
    cursor: pointer;
  }

  .containerFull {
    width: 90%;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: rgba(33, 37, 41, 1);
    padding: 0px 5px;
    border-radius: 3.2px;
    margin: 15px auto;
    overflow-y: auto;

    @media (min-width: 562px) {
      max-width: 562px;
      max-height: 500px;
    }

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }

    ::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
    }

    h3 {
      color: rgba(248, 249, 250, 1);
      margin: 33.58px 0px 17.59px 0px;
      text-align: center;

      font-family: Inter;
      font-size: 14px;
      font-weight: 700;
      line-height: 22px;
    }

    h4 {
      font-family: Inter;
      font-size: 10px;
      font-weight: 400;
      line-height: 18px;
      color: rgba(134, 142, 150, 1);
      text-align: center;
      margin-bottom: 22px;
    }

    label {
      font-family: Inter;
      font-size: 10px;
      font-weight: 400;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(248, 249, 250, 1);
      margin-bottom: 17px;
      margin-top: 9px;
      display: flex;
      flex-direction: column;

      > p {
        color: #d4ee5e;
      }
    }

    input {
      background-color: rgba(52, 59, 65, 1);
      padding: 8px 13px;
      border: 0.97px solid rgba(52, 59, 65, 1);
      font-family: Inter;
      font-size: 13px;
      font-weight: 400;
      line-height: 21px;
      text-align: left;
      border-radius: 3.2px;
      margin-bottom: 8px;
      margin-top: 5px;
    }

    select {
      width: 100%;
      margin-bottom: 16px;
      background-color: rgba(52, 59, 65, 1);
      border: 0.97px solid rgba(52, 59, 65, 1);
      font-family: Inter;
      font-size: 13px;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: 0em;
      text-align: left;
      color: #868e96;
      padding: 8.19px 0px;
      border-radius: 3.2px;
    }

    button {
      margin-bottom: 19.96px;
      background-color: rgba(255, 87, 127, 1);
      font-family: Inter;
      font-size: 13px;
      font-weight: 500;
      line-height: 21px;
      color: rgba(255, 255, 255, 1);
      border: 1.22px solid rgba(255, 87, 127, 1);
      padding: 8.19px 0px;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;
