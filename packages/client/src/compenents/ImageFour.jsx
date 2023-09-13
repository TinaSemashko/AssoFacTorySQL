import { Parallax } from "react-parallax";
import YogaAccueil from "../images/YogaAccueil.jpg";

const ImageFour = () => (
  <Parallax className="image" bgImage={YogaAccueil} strength={800}>
    <div className="content">
      <span className="img-txt-yoga">Yoga</span>
    </div>
  </Parallax>
);

export default ImageFour;
