import { Parallax } from "react-parallax";
import DetenteAccueil from "../images/DetenteAccueil.jpg";

const ImageFive = () => (
  <Parallax className="image" bgImage={DetenteAccueil} strength={800}>
    <div className="content">
      <span className="img-txt">Détente & Yoga</span>
    </div>
  </Parallax>
);

export default ImageFive;
