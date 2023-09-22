import Typography from "@mui/material/Typography";
import VideoAccueil from "../videos/VideoAccueil.mp4";
import * as S from "./ImgVideo.styled";

const VideoOne = () => (
  <S.GridContainer>
    <video src={VideoAccueil} autoPlay loop muted />

    <div className="content">
      <Typography className="img-txt-video">AssoFacTory</Typography>
    </div>
  </S.GridContainer>
);

export default VideoOne;
