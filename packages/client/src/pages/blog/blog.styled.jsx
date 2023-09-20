import { styled } from "@mui/material/styles";
import ListItemButton from "@mui/material/ListItemButton";

export const MainContainer = styled("div")`
  padding-bottom: 10rem;
  padding-top: 10rem;
  text-align: center;
  width: 100vw;
  /* height: 100vh; */
  background-color: ${({ theme }) => theme.palette.colorOrangeBlog.main};
`;

export const GridCadre = styled("div")(
  ({ idSalon, theme }) => `
  width: 80%;
  margin-left: 12vw;
  border: solid 3px;
  border-radius: 20px;
  box-shadow: 5px 14px 12px 4px #00000080;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  /* padding-top: 4vh; */

  background-color: ${
    idSalon === 1
      ? theme.palette.colorRed.main
      : idSalon === 2
      ? theme.palette.secondary.main
      : theme.palette.colorBlue.main
  };

  @media (max-width: 750px) {
    width: 100%;
  }
`
);

export const GridSendBox = styled("div")(
  ({ idSalon, theme }) => `
  width: 80%;
  margin-left: 12vw;
  margin-top: 4vh;
  height: 15vh;
  box-shadow: 5px 14px 12px 4px #00000080;
  background-color: ${
    idSalon === 1
      ? theme.palette.colorRed.main
      : idSalon === 2
      ? theme.palette.secondary.main
      : theme.palette.colorBlue.main
  };
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
`
);

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

export const Filter = styled("div")`
  width: 80%;
  margin-left: 12vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2vh;

  position: -webkit-sticky;
  position: sticky;
  align-self: start;
  top: 1rem;
  left: 1rem;
  text-align: center;
  @media (max-width: 750px) {
  }
`;

export const MyButton = styled(ListItemButton)`
  white-space: nowrap;
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  justify-content: center;
  align-items: center;
`;
