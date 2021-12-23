import "./Our-Brands.scss"

import Slider from "react-slick";

import { Link } from "react-router-dom";

import BrandImage from "../../Assets/image/zara.png"
import HermesImage from "../../Assets/image/hermes.png"
import DolceImage from "../../Assets/image/dolce.png"
import GucciImage from "../../Assets/image/gucci.png"
import ArmaniImage from "../../Assets/image/armani.png"





function OurBrands(props) {

    var items = [
        {
            img: BrandImage,
        },
        {
            img: HermesImage,
        },
        {
            img: DolceImage,
        },
        {
            img: GucciImage,
        },
        {
            img: ArmaniImage,
        },
        {
            img: BrandImage,
        },
        {
            img: HermesImage,
        },
        {
            img: DolceImage,
        },
        {
            img: GucciImage,
        },
        {
            img: ArmaniImage,
        },
    ]


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false
                }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ],
      };

    return (
        <div 
        data-aos="fade-up"
        data-aos-duration="1000" 
        data-aos-offset="0"
        className="container-fluid"
        >
            <div className="brands-section">
                <h2 className="brands-lead">наши бренды</h2>
                <hr className="brands__line" />
            </div>
            <Slider {...settings}>
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Slider>
        </div>
    )
}

function Item(props)
{
    return (
        <div className="brands__item">
            <Link to="/">
                <img className="brands__item-image" src={props.item.img} alt="brand" />
            </Link>
        </div>
    )
}

export default OurBrands;