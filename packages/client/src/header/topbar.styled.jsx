import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  overflow-x: hidden;
`;

export const CloseIconStyle = styled("div")`
  display: flex;
  justify-content: end;
  align-items: center;

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

export const FormContainer = styled("div")`
  padding-top: 25vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;
  height: 10vh;
  padding-bottom: 15vh;
  color: ${({ theme }) => theme.palette.colorWhite.main};
`;

export const FlexContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  @media (max-width: 750px) {
    width: 80vw;
  }
`;

export const InputContainer = styled("div")(
  ({ isinscrit }) => `
display: ${isinscrit ? "none" : "block"};
`
);

export const Inscrivez = styled("div")`
  color: ${({ theme }) => theme.palette.colorWhite.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: 1rem;
  cursor: pointer;
`;

export const Form = styled("div")`
  color: ${({ theme }) => theme.palette.colorWhite.main};
  padding-bottom: 5%;
`;

export const LogoText = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Prenom = styled("div")(
  ({ isinscrit, theme }) => `
  display: ${isinscrit ? "flex" : "none"};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: solid;
  border-color: ${theme.palette.colorViolet.main};
  background-color: ${theme.palette.colorViolet.main};
  color: ${theme.palette.colorBlack.main};
  padding-top: 0.5vh;
  padding-bottom: 0.5vh;
  padding-right: 1vw;
  padding-left: 1vw;
  min-width: 10vw;
`
);

export const ButtonLogin = styled(Button)(
  ({ isinscrit, theme }) => `
  margin:  1vw;
  background-color: ${isinscrit ? "transparent" : theme.palette.secondary.main};
  border: solid black;
  width: 10vw;
  border-radius: 20px;
  color: ${theme.palette.colorBlack.main};
`
);

export const PrenomPhoto = styled("div")`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 20vw;
`;
