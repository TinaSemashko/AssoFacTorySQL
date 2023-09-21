import { Typography } from "@mui/material";

import * as S from "./blockWall.styled";

const blockWall = ({ dataBlock }) => {
  return (
    <S.MainContainer idSalon={dataBlock.id_salon}>
      <S.Author>
        <Typography variant="h6"> {dataBlock.prenom}</Typography>
      </S.Author>
      <S.Time>
        <Typography variant="h6"> {dataBlock.time}</Typography>
      </S.Time>
      <S.Img src={dataBlock.media} />
      <S.Text>
        <Typography variant="h6"> {dataBlock.message}</Typography>
      </S.Text>
    </S.MainContainer>
  );
};

export default blockWall;
