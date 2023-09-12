<<<<<<< HEAD
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
=======
import VideoAccueil from "../videos/VideoAccueil.mp4";

const VideoOne = () => (
  <div>
    {/* <Parallax className="video"> */}
    <video className="video" src={VideoAccueil} autoPlay loop muted />
    <div className="content">
      <span className="img-txt">AssoFacTory</span>
    </div>
  </div>
  // </Parallax>
>>>>>>> b18f12fa (accueil)
);

export default VideoOne;
