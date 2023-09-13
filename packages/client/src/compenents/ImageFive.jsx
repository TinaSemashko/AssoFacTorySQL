import { Parallax } from "react-parallax";
import DetenteAccueil from "../images/DetenteAccueil.jpg";

const ImageFive = () => (
  <Parallax
    variant="h2"
    sx={{ pt: 8 }}
    className="image"
    bgImage={DetenteAccueil}
    strength={800}
  >
    <div className="content">
      <span className="img-txt-detente">Détente</span>
    </div>
  </Parallax>
);

export default ImageFive;
