import { Parallax } from "react-parallax";
import StripPlasticAccueil from "../images/StripPlasticAccueil.jpg";

const ImageTwo = () => (
  <Parallax className="image" bgImage={StripPlasticAccueil} strength={800}>
    <div className="content">
      <span className="img-txt-strip">Strip-Plastic</span>
    </div>
  </Parallax>
);

export default ImageTwo;
