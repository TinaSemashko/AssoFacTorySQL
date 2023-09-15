import Typography from "@mui/material/Typography";
import VideoAccueil from "../videos/VideoAccueil.mp4";
import * as S from "./ImgVideo.styled";
import { BackGroundGradientLogo } from "../shared/shared.styled.jsx";

const VideoOne = () => (
  <S.GridContainer>
    <video src={VideoAccueil} autoPlay loop muted />

    <div className="content">
      <BackGroundGradientLogo>
        <Typography className="img-txt-video">AssoFacTory</Typography>
      </BackGroundGradientLogo>
    </div>
  </S.GridContainer>

);

export default VideoOne;
