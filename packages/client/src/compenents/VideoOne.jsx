<<<<<<< HEAD
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
=======
import Typography from "@mui/material/Typography";
>>>>>>> 06513aa8 (accueil video)
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
<<<<<<< HEAD
  </div>
  // </Parallax>
>>>>>>> b18f12fa (accueil)
=======
  </S.GridContainer>
>>>>>>> 06513aa8 (accueil video)
);

export default VideoOne;
