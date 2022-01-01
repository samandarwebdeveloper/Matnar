import "./Our-Brands.scss"


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
    ]


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
            <div className="brands-list">
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </div>
        </div>
    )
}

function Item(props)
{
    return (
        <div 
        data-aos="rotate" 
        data-aos-duration="800" 
        data-aos-offset="0"  
        className="brands__item">
            <Link to="/">
                <img className="brands__item-image" src={props.item.img} alt="brand" />
            </Link>
        </div>
    )
}

export default OurBrands;