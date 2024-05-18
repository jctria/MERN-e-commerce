import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MobileCarousel = ({ images, onImageClick }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        cssEase: "linear"
    };

    return (
        <Slider {...settings}>
        {images.map((url, index) => (
            <div key={index}>
                <img src={url} alt={`Product Image ${index}`} onClick={() => onImageClick(index)} className={`carousel-image image-${index}`}/>
            </div>
        ))}
        </Slider>
    );
};

export default MobileCarousel;