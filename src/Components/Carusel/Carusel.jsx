import "./Carusel.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useRef } from "react";
// import { Link } from "react-router-dom";

// import leftArrow from "../../Assets/image/left-arrow.png"
import image from "../../Assets/image/new-dress.png"
import cloth from "../../Assets/image/cloth.png"
import dress from "../../Assets/image/dress.png"
import Arrow from "../../Assets/image/left-arrow.png"




function Carusel(props) {


    var items = [
        {
            img: image,
            name: "Louis XVI ATHOS",
            description: "22.300.000 sum/2203 $"
        },
        {   img: cloth,
            name: "Louis XVI ATHOS",
            description: "22.300.000 sum/2203 $"
        },
        {
            img: dress,
            name: "Louis XVI ATHOS",
            description: "22.300.000 sum/2203 $"
        },
        {   img: image,
            name: "Louis XVI ATHOS",
            description: "22.300.000 sum/2203 $"
        },
        {
            img: cloth,
            name: "Louis XVI ATHOS",
            description: "22.300.000 sum/2203 $"
        },
        {   img: image,
            name: "Louis XVI ATHOS",
            description: "22.300.000 sum/2203 $"
        },
        {
            img: dress,
            name: "Louis XVI ATHOS",
            description: "22.300.000 sum/2203 $"
        },
        {   img: cloth,
            name: "Louis XVI ATHOS",
            description: "22.300.000 sum/2203 $"
        },
        
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
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

    const slider = useRef();

    const next = () => {
        slider.current.slickNext();
    }
    const previous = () => {
        slider.current.slickPrev();
    } 

    return (
        <div 
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-offset="0"
        className="collection-carusel"
        >
        <Slider ref={slider} {...settings}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Slider>
        <button className="carusel-prev" onClick={previous}>
            <img src={Arrow} alt="icon" />
        </button>
        <button className="carusel-next" onClick={next}>
            <img src={Arrow} alt="icon" />
        </button>
      </div>
    )
}

function Item(props)
{
    return (
        <div className="new-clothes__item">
            <div className="img-hover-zoom">
                <img className="new-clothes__item-image" src={props.item.img} alt="dress" />
            </div>
            <h4 className="new-collection__item-name">{props.item.name}</h4>
            <p>{props.item.description}</p>
        </div>
    )
}

export default Carusel;