import * as S from "../../compenents/ImgVideo.styled";
import VideoOne from "../../compenents/VideoOne";
import ImageTwo from "../../compenents/ImageTwo";
import ImageThree from "../../compenents/ImageThree";
import ImageFour from "../../compenents/ImageFour";
import ImageFive from "../../compenents/ImageFive";

const Home = () => {
  return (
    <S.MainContainer>
      <VideoOne />
      <ImageTwo />
      <ImageThree />
      <ImageFour />
      <ImageFive />
    </S.MainContainer>
  );
};

export default Home;
