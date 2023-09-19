import styled from "styled-components";

export const Container = styled("div")`
  width: 100%;
  height: 100vh;

  * {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`;

export const Item = styled("div")`
  text-align: "center";
  grid-template-columns: 1fr 1fr;

  .gridItem {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }

  video {
    width: 50vw;
    height: 100vh;
    object-fit: cover;
  }

  @media (max-width: 750px) {
    width: 100vw;
    height: 100%;
  }
`;

export const FormContainer = styled("div")`
  padding-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  padding-bottom: 15vh;
  background-color: #c38063;
  color: black;
`;

export const FlexContainer = styled("div")`
  display: flex;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 30vw;
  height: 70vh;

  padding-top: 2rem;
  padding-bottom: 2rem;

  @media (max-width: 750px) {
    width: 80vw;
  }
`;

export const FlexContainerPass = styled("div")`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Inscrivez = styled("div")`
  color: white;

  u {
    color: black;
  }
`;
export const FlexContainerNom = styled("div")`
  display: flex;
  justify-content: space-between;
`;
export const FlexControl = styled("div")`
  color: white;
  display: flex;
  justify-content: stretch;
  align-items: center;
`;

export const RadioButton = styled("div")`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
`;

export const Button = styled("div")`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
`;

export const Img2 = styled("img")`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 3rem;

  u{
    color: white;
  }
`;


