import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  padding-bottom: 10rem;
  padding-top: 10rem;
  text-align: center;
  width: 100vw;
  /* height: 100vh; */
  background-color: ${({ theme }) => theme.palette.colorOrangeBlog.main};
`;

export const GridCadre = styled("div")`
  width: 80%;
  margin-left: 12vw;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  border: solid 3px;
  border-radius: 20px;
  box-shadow: 5px 14px 12px 4px #00000080;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 4vh;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const GridSendBox = styled("div")`
  width: 80%;
  margin-left: 12vw;
  margin-top: 4vh;
  height: 15vh;
  box-shadow: 5px 14px 12px 4px #00000080;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: solid 1px;
  border-radius: 20px;

  .icon {
    transform: rotate(-40deg);
  }

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const GridImg = styled("div")`
  background-color: ${({ theme }) => theme.palette.colorOrangeBlog.main};
  padding: 4vh;
  width: 70%;
  height: 50vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;

  border-radius: 16px;
  box-shadow: 0px 4px 4px grey;
  margin-bottom: 4vh;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const Img = styled("img")`
  width: 80%;
  /* height: 100vh; */
  font-family: "Alkatra", cursive;
  grid-column: 1;
  grid-row: 1;
`;

export const TextImg = styled("div")`
  grid-column: 1;
  grid-row: 2;
`;

export const GridTitle = styled("div")`
  width: 70%;
  height: 10vh;
  padding-top: 1rem;
  border-radius: 16px;
  box-shadow: 0px 4px 4px grey;
  font-family: "Alkatra", cursive;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  text-align: center;
  margin-bottom: 4vh;
  margin-top: 8vh;
`;
