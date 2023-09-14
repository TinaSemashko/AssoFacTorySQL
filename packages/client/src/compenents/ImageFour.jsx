import Typography from "@mui/material/Typography";
import { Parallax } from "react-parallax";
import YogaAccueil from "../images/YogaAccueil.jpg";
import * as S from "../compenents/ImgVideo.styled";

const ImageFour = () => (
  <Parallax className="image" bgImage={YogaAccueil} strength={800}>
    <div className="content">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <span className="img-txt-yoga">Yoga</span>
=======
      <span className="img-txt">Détente & Yoga</span>
>>>>>>> b18f12fa (accueil)
=======
      <span className="img-txt-yoga">Yoga</span>
>>>>>>> 06513aa8 (accueil video)
=======
      <S.Texts>
        <span className="img-txt-yoga">Cours de Yoga</span>
        <br />
        <br />
        <br />
        <br />
        <Typography
          variant="h4"
          sx={{ color: "#66a3fd", mixBlendMode: "difference" }}
        >
          Respirez, étirez-vous, trouvez la paix intérieure.
        </Typography>
        <br />

        <Typography
          variant="h4"
          sx={{ color: "#66a3fd", mixBlendMode: "difference" }}
        >
          Le yoga vous guide vers l'équilibre et la sérénité.
        </Typography>
        <br />

        <Typography
          variant="h4"
          sx={{ color: "#66a3fd", mixBlendMode: "difference" }}
        >
          Pratiquez avec amour et laissez votre lumière intérieure briller.
        </Typography>
        <br />
        <Typography
          variant="h4"
          sx={{ color: "#66a3fd", mixBlendMode: "difference" }}
        >
          Vous serez entourez des meilleurs coachs pour vous aider à
          perfectionner ces mouvements et à équilibrer votre chakra.
        </Typography>
      </S.Texts>
>>>>>>> cb1821cf (styled Accueil)
    </div>
  </Parallax>
);

export default ImageFour;
