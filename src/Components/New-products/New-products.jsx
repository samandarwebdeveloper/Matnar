import "./New-products.scss"

import Carusel from "../Carusel/Carusel";
import { Row } from "react-bootstrap";


function NewProducts() {
  
    return (
        <div className="container-fluid">
            <Row>
                <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="0"
                className="col-sm-12 new-products-section"
                >
                    <h2 className="new-products__lead">НОВИНКИ</h2>
                    <hr className="new-products__line" />
                    <Carusel />
                    <Carusel />
                </div>
            </Row>
        </div>
    )
}

export default NewProducts;