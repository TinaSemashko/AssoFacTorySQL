import { Typography } from "@mui/material";

import * as S from "./blockWall.styled";

const blockWall = ({ dataBlock, idSalon, isComment = false }) => {
  return (
    <S.MainContainer idSalon={idSalon} isComment={isComment}>
      <S.Author>
        <Typography variant="h6">
          {!isComment ? `№ ${dataBlock.id} | ` : ""} {dataBlock.time}{" "}
          {dataBlock.prenom}
        </Typography>
      </S.Author>
      <S.Text>
        <Typography variant="h6"> {dataBlock.message}</Typography>
      </S.Text>
      <S.Img src={dataBlock.media} />
    </S.MainContainer>
  );
};

export default blockWall;
