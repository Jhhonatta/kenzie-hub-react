import styled from "styled-components";

export const DivDashboard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  color: white;
  text-align: center;

  h1 {
    font-family: Inter;
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(248, 249, 250, 1);
    margin: 35.5px 0px 10px 12px;
  }

  header {
    width: 100%;
    color: #ff577f;
    font-family: Inter;
    font-size: 19px;
    font-weight: 700;

    .divHeader {
      width: 80%;
      display: flex;
      justify-content: space-between;

      align-items: center;
      margin: 26px auto;
      padding: 0px;
    }

    .divHeader > button {
      color: #f8f9fa;
      background-color: rgba(33, 37, 41, 1);
      border-radius: 4px;
      width: 55px;
      padding: 4.48px 16px;
      border: none;
      font-family: Inter;
      font-size: 10px;
      font-weight: 600;
      line-height: 23px;
      cursor: pointer;
    }
  }

  .subHeader {
    width: 100%;
    border-top: 1px solid rgba(33, 37, 41, 1);
    border-bottom: 1px solid rgba(33, 37, 41, 1);
    margin-top: 24px;

    div {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      margin: 0 auto;
    }

    p {
      color: rgba(134, 142, 150, 1);
      font-family: Inter;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0em;
      text-align: left;
      margin: 0px 0px 35px 12px;
    }

    @media (min-width: 769px) {
      div {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 45px 0px;
      }

      p {
        margin: 0;
      }

      h1 {
        margin: 0;
      }
    }
  }

  main {
    width: 100%;

    div {
      display: flex;
      justify-content: space-between;

      width: 80%;
      margin: 19px auto;

      align-items: center;
      p {
        color: #f8f9fa;
        font-family: Inter;
        font-size: 16px;
        font-weight: 600;
        line-height: 18px;
      }

      button {
        background-color: #212529;
        border: none;
        padding: auto;
        height: 32px;
        width: 32.485294342041016px;
        border-radius: 4px;
        cursor: pointer;
      }
    }

    ul {
      background-color: #212529;
      width: 80%;
      height: auto;
      margin: auto;
      border-radius: 4px;
      padding: 22px 8.5px;
    }

    li {
      background-color: #121214;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12.18px;
      border-radius: 4.06px;
      margin-bottom: 16px;

      h1 {
        margin: 0;
      }

      p {
        color: rgba(134, 142, 150, 1);
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
      }

      .divDelete {
        width: auto;
        margin: 0;
        gap: 10px;
      }

      .delete {
        margin: 0;
        background-color: transparent;
        padding: 0;
      }
    }
  }
`;
