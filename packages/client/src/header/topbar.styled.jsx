import styled from "styled-components";

export const Container = styled("div")`
  overflow-x: hidden;
`;

export const CloseIconStyle = styled("div")`
  display: flex;
  justify-content: end;
  align-items: center;
  color: #000000;

  .close {
    text-transform: capitalize;
    opacity: 0;
    font-weight: 400;

    @media (max-width: 750px) {
      font-size: 4vw;
    }
  }

  &:hover .close {
    cursor: pointer;
    opacity: 1;

    -webkit-animation: slide-top 0.5s ease-out both;
    animation: slide-top 0.5s ease-out both;

    /*
 * ----------------------------------------
 * animation slide-top
 * ----------------------------------------
 */
    @-webkit-keyframes slide-top {
      0% {
        -webkit-transform: translateY(70px);
        transform: translateY(70px);
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
    }
    @keyframes slide-top {
      0% {
        -webkit-transform: translateY(70px);
        transform: translateY(70px);
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
    }
  }
`;

export const Img = styled("img")`
  width: 20vw;
  height: 100%;
`;

export const CContainer = styled("div")`
  width: 100%;
  height: 100vh;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`;

export const Item = styled("div")`
  text-align: "center";

  @media (max-width: 750px) {
    width: 100vw;
    height: 100%;
  }
`;

// // export const Image = styled("img")`
// //   width: 50vw;
// //   height: 100vh;

// //   @media (max-width: 750px) {
// //     width: 100vw;
//    }
// `;

export const FormContainer = styled("div")`
  padding-top: 12rem;
  margin-left: -35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 10vh;
  padding-bottom: 15vh;
  color: white;
`;

export const FlexContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border-radius: 20px; */
  /* width: 30vw;
    height: 70vh;
    background-color: #1d5a43; */
  /* padding-top: 2rem;
    padding-bottom: 2rem; */

  @media (max-width: 750px) {
    width: 80vw;
  }
`;

export const Inscrivez = styled("div")`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 3rem;
`;

export const Form = styled("div")`
  color: white;
`;
