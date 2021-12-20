import "./New-products.scss"

import Carusel from "../Carusel/Carusel";


function NewProducts() {
  
    return (
        <div className="container-fluid">
            <div className="new-products-section">
                <h2 className="new-products__lead">НОВИНКИ</h2>
                <hr className="new-products__line" />
                <Carusel />
                <Carusel />
            </div>
        </div>
    )
}

export default NewProducts;