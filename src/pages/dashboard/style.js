import styled from "styled-components";

export const DivDashboard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 17px;
    gap: 35%;

    @media (min-width: 584px) {
      gap: 56%;
    }
  }

  header > button {
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

  .subHeader {
    width: 100%;
    border-top: 1px solid rgba(33, 37, 41, 1);
    border-bottom: 1px solid rgba(33, 37, 41, 1);
    margin-top: 24px;
    justify-content: space-evenly;

    div {
      margin: 0px;
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

    @media (min-width: 584px) {
      display: flex;
      align-items: center;
      padding: 35px 12px 35px 12px;

      h1 {
        margin: 0px;
      }

      p {
        margin: 0px;
      }

      div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 5%;
      }
    }
  }

  main {
    h3 {
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(255, 255, 255, 1);
      margin-left: 12px;
    }
  }
`;
