import { styled } from "@mui/material/styles";
import { TimeField } from "@mui/x-date-pickers";

export const MainContainer = styled("div")(
  ({ idSalon, theme, isComment }) => `
  padding-left: ${isComment ? "45vw" : ""};
  padding-top: 4vh;
  width: 65vw;
  border-radius: 16px;
  margin-bottom: 4vh;
  display: flex;
  flex-direction: column;
  justify-content: left;
     background-color: ${
       idSalon === 1
         ? theme.palette.colorRed.main
         : idSalon === 2
         ? theme.palette.secondary.main
         : theme.palette.colorBlue.main
     };
  
`
);

export const Img = styled("img")`
  width: 20vw;
  text-align: left;
`;

export const Text = styled("div")`
  width: 20vw;
  padding-top: 1vh;
  text-align: left;
  word-wrap: break-word;
`;

export const MyTimeField = styled(TimeField)`
  width: 7vw;
  text-align: left;
  border: none;
`;

export const Author = styled("div")`
  text-align: left;
`;
