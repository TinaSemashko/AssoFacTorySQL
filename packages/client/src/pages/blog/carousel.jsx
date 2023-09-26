import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YogaCarousel from "../../images/YogaCarousel.jpg";
import StrongWomenCarousel from "../../images/StrongWomenCarousel.jpg";
import DetenteCarousel from "../../images/DetenteCarousel.jpg";
import StripPlasticCarousel from "../../images/StripPlasticCarousel.jpg";
import * as S from "./blog.styled";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <S.CarouselContainer>
      <Slider {...settings}>
        <div>
          <img
            src={YogaCarousel}
            alt="YogaCarousel"
            width="cover"
            height="600rem"
          />
        </div>
        <div>
          <img
            src={StrongWomenCarousel}
            alt="StrongWomenCarousel"
            width="800rem"
            height="600rem"
          />
        </div>
        <div>
          <img
            src={DetenteCarousel}
            alt="DetenteCarousel"
            width="800rem"
            height="600rem"
          />
        </div>
        <div>
          <img
            src={StripPlasticCarousel}
            alt="StripPlasticCarousel"
            width="800rem"
            height="600rem"
          />
        </div>
      </Slider>
    </S.CarouselContainer>
  );
};

export default Carousel;
