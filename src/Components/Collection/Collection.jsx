import "./Collection.scss"

import CollectionImage from "../../Assets/image/collection-image.png"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Collection() {
    return (
        <div className="container">
            <div className="collection-section">
                <div className="collection-image__wrap">
                    <img className="collection__image" src={CollectionImage} alt="collection" />
                </div>
                <div className="collection-section__content">
                    <h2 className="collection-content__lead">Коллекция   2021</h2>
                    <hr className="collection-content__line" />
                    <p className="collection-content__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam. </p>
                    <Link className="collection-content__link">посмотреть коллекцию</Link>
                </div>
            </div>
        </div>
    )
}

export default Collection;