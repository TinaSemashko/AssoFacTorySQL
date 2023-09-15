import { Typography } from "@mui/material";

import * as S from "./notFound.styled";

const blockWall = ({ text = "", imageUrl = "" }) => {
  return (
    <S.MainContainer>
      <Typography variant="h1">404</Typography>
    </S.MainContainer>
  );
};

export default blockWall;
