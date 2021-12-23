import "./Season.scss"


import { Link } from "react-router-dom"
import Slider from "react-slick";

//images
import SeasonListImage from "../../Assets/image/season-list__image.png"
import SeasonImage from "../../Assets/image/season-image.png"
import { Row } from "react-bootstrap"

function Season() {

    var items = [
        {
            img: SeasonListImage,
            name: "Louis XVI ATHOS",
            description: "22.300.000 sum/2203 $"
        },
        {   img: SeasonListImage,
            name: "Louis XVI ATHOS",
            description: "22.300.000 sum/2203 $"
        },
        {
            img: SeasonListImage,
            name: "Louis XVI ATHOS",
            description: "22.300.000 sum/2203 $"
        },
        {   img: SeasonListImage,
            name: "Louis XVI ATHOS",
            description: "22.300.000 sum/2203 $"
        },
        {
            img: SeasonListImage,
            name: "Louis XVI ATHOS",
            description: "22.300.000 sum/2203 $"
        },
        {   img: SeasonListImage,
            name: "Louis XVI ATHOS",
            description: "22.300.000 sum/2203 $"
        },
        
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
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
        <div className="container-fluid">
            <Row className="season-section">
                <div 
                data-aos={"zoom-in-right"} 
                data-aos-duration="1000"
                data-aos-offset="0"
                className="col-sm-6 season-section__content"
                >
                    <h2 className="season-section__lead">СЕЗОН 2021/22</h2>
                    <hr className="season-content__line" />
                    <Slider {...settings}>
                        {
                            items.map( (item, i) => <Item key={i} item={item} /> )
                        }
                    </Slider>
                </div>
                <div 
                data-aos={"fade-left"}
                data-aos-offset="0"
                data-aos-duration="1000"
                className="col-sm-6 season-section__image__wrap"
                >
                    <img className="season-section__image" src={SeasonImage} alt="season" />
                    <div className="season-section__image-content">
                        <h2 className="season-image__lead">Новая коллекция</h2>
                        <Link className="season-image__link" to="/">Каталог</Link>
                    </div>
                </div>
            </Row>
        </div>
    )
}

function Item(props)
{
    return (
        <div className="season-list__item">
            <img className="season-item__img" src={props.item.img} alt="dress" />
            <Link className="season-list__link" to="/product">
                <h4 className="season-item__lead">{props.item.name}</h4>
                <p className="season-item__text">{props.item.description}</p>
            </Link>
        </div>
    )
}

export default Season;