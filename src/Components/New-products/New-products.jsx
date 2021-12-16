import "./New-products.scss"

import Example from "../Carusel";

function NewProducts() {
  
    return (
        <div className="container">
            <div className="new-products-section">
                <h2 className="new-products__lead">НОВИНКИ</h2>
                <hr className="new-products__line" />
                <Example />
            </div>
        </div>
    )
}

export default NewProducts;