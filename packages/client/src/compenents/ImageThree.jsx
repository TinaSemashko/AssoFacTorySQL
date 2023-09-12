import { Parallax } from "react-parallax";
import StrongManAccueil from "../images/StrongManAccueil.jpg";

const ImageThree = () => (
  <Parallax className="image" bgImage={StrongManAccueil} strength={800}>
    <div className="content">
      <span className="img-txt">Plateau</span>
    </div>
  </Parallax>
);

export default ImageThree;
