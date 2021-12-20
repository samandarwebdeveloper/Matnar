import "./Our-Brands.scss"

import BrandImage from "../../Assets/image/zara.png"

function OurBrands(props) {

    var items = [
        {
            img: BrandImage,
        },
        {
            img: BrandImage,
        },
        {
            img: BrandImage,
        },
        {
            img: BrandImage,
        },
        {
            img: BrandImage,
        },
    ]

    return (
        <div className="container">
            <div className="brands-section">
                <h2 className="brands-lead">наши бренды</h2>
                <hr className="brands__line" />
                <div className="brands__list">
                    {
                        items.map( (item, i) => <Item key={i} item={item} /> )
                    }
                </div>
            </div>
        </div>
    )
}

function Item(props)
{
    return (
        <div className="brands__item">
            <img className="brands__item-image" src={props.item.img} alt="brand" />
        </div>
    )
}

export default OurBrands;