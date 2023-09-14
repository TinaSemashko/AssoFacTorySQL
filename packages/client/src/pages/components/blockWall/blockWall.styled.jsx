import { styled } from "@mui/material/styles";
import { TimeField } from "@mui/x-date-pickers";

export const MainContainer = styled("div")`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  padding: 4vh;
  width: 55vw;
  border-radius: 16px;
  box-shadow: 0px 4px 4px grey;
  margin-bottom: 4vh;
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

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
