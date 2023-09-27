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
          <S.ImgCarousel src={YogaCarousel} alt="YogaCarousel" />
        </div>
        <div>
          <S.ImgCarousel src={StrongWomenCarousel} alt="StrongWomenCarousel" />
        </div>
        <div>
          <S.ImgCarousel src={DetenteCarousel} alt="DetenteCarousel" />
        </div>
        <div>
          <S.ImgCarousel
            src={StripPlasticCarousel}
            alt="StripPlasticCarousel"
          />
        </div>
      </Slider>
    </S.CarouselContainer>
  );
};

export default Carousel;
