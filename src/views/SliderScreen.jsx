import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderScreen = () => {
  const arrayImage = [
    {
      url: "https://camerabox.vn/uploads/news/2018_07/chup-anh-phong-canh-thu-vi.jpg",
      id: uuidv4,
      alt: "img1",
    },
    {
      url: "https://data.webnhiepanh.com/wp-content/uploads/2020/11/21105453/phong-canh-1.jpg",
      id: uuidv4,
      alt: "img2",
    },
    {
      url: "https://i.pinimg.com/originals/26/7b/b4/267bb463744304dde190ce42ad07f0b0.jpg",
      id: uuidv4,
      alt: "img3",
    },
  ];

  const styleSlider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <Slider {...styleSlider} >
      {arrayImage.map((item) => {
            return (
              <div key={item.id}>
                <img
                  src={item.url}
                  alt={item.alt}
                  style={{ width: 800, height: 400 }}
                ></img>
              </div>
            );
          })}
    </Slider>
  );
};

export default SliderScreen;
