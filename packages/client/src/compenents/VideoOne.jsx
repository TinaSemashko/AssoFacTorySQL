import Typography from "@mui/material/Typography";
import VideoAccueil from "../videos/VideoAccueil.mp4";
import * as S from "./ImgVideo.styled";
// import { BackGroundGradientMain } from "../shared/shared.styled.jsx";

const VideoOne = () => (
  <S.GridContainer>
    <video src={VideoAccueil} autoPlay loop muted />

    <div className="content">
      {/* <BackGroundGradientMain> */}
        <Typography className="img-txt-video">AssoFacTory</Typography>
      {/* </BackGroundGradientMain> */}
    </div>
  </S.GridContainer>

);

export default VideoOne;
