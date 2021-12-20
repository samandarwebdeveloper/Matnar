import "./Carusel.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
// import { Link } from "react-router-dom";

// import leftArrow from "../../Assets/image/left-arrow.png"
import image from "../../Assets/image/new-dress.png"



function Carusel(props) {


    var items = [
        {
            img: image,
            name: "Louis XVI ATHOS",
            description: "22.300.000 sum/2203 $"
        },
        {   img: image,
            name: "Louis XVI ATHOS",
            description: "22.300.000 sum/2203 $"
        },
        {
            img: image,
            name: "Louis XVI ATHOS",
            description: "22.300.000 sum/2203 $"
        },
        {   img: image,
            name: "Louis XVI ATHOS",
            description: "22.300.000 sum/2203 $"
        },
        {
            img: image,
            name: "Louis XVI ATHOS",
            description: "22.300.000 sum/2203 $"
        },
        {   img: image,
            name: "Louis XVI ATHOS",
            description: "22.300.000 sum/2203 $"
        },
        {
            img: image,
            name: "Louis XVI ATHOS",
            description: "22.300.000 sum/2203 $"
        },
        {   img: image,
            name: "Louis XVI ATHOS",
            description: "22.300.000 sum/2203 $"
        },
        
    ]

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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

    return (
        <div className="collection-carusel">
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
        <div className="new-clothes__item">
            <img className="new-clothes__item-image" src={props.item.img} alt="dress" />
            <h4 className="new-collection__item-name">{props.item.name}</h4>
            <p>{props.item.description}</p>
        </div>
    )
}

export default Carusel;