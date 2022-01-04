import "./Product.scss";

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../Context/headerContext";
import { Content } from "../../Context/itemContext";

import men from "../../Assets/image/plash.png"
import women from "../../Assets/image/shim.png"
import kids from "../../Assets/image/kurtka.png"
// import bottom from "../../Assets/image/bottom.png"

function Products() {
  const [photos, setPhotos] = useState([]);
  const { product, setProduct } = useContext(Context);
  console.log(setProduct);
  // Second Context
  const { items, setItems } = useContext(Content);

  useEffect(() => {
    console.log(items);
    console.log(product);
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((data) => setPhotos(data))
  });


  photos.splice(15)
  // console.log(product);
  let img = men
  if (product === 'men') {
    img = men
  }
  if (product === 'women') {
    img = women
  }
  if (product === 'kids') {
    img = kids
  }
  return (
    <>
      <h1 className="product-title">товары для {product}</h1>
      <div className="product-wrapper product-container">
        <ul>
          <li>
            <Link>КУРТКИ</Link>
          </li>
          <li>
            <Link>ПУХОВИКИ</Link>
          </li>
          <li>
            <Link>ТРИКОТАЖ</Link>
          </li>
          <li>
            <Link>ПЛАТЬЯ</Link>
          </li>
          <li>
            <Link>БРЮКИ</Link>
          </li>
          <li>
            <Link>ФУТБОЛКИ И ТОПЫ</Link>
          </li>
          <li>
            <Link>ЖАКЕТЫ И КОСТЮМЫ</Link>
          </li>
          <li>
            <Link>ДЕНИМ</Link>
          </li>
          <li>
            <Link>ЮБКИ</Link>
          </li>
          <li>
            <Link>ПАЛЬТО</Link>
          </li>
          <li>
            <Link>БЕЛЬЁ И ДОМАШНЯЯ ОДЕЖДА</Link>
          </li>
          <li>
            <Link>ПЛЯЖНАЯ ОДЕЖДА</Link>
          </li>
          <li>
            <Link>ШОРТЫ</Link>
          </li>
          <li>
            <Link>ДУБЛЁНКИ И ШУБЫ</Link>
          </li>
          <li>
            <Link>ПЛАЩИ</Link>
          </li>
          <li>
            <Link>ТОЛСТОВКИ</Link>
          </li>
          <li>
            <Link>СПОРТ</Link>
          </li>
          <li>
            <Link>КОМБИНЕЗОНЫ</Link>
          </li>
          <li>
            <Link>ДОМАШНЯЯ ОДЕЖДА</Link>
          </li>
          <li>
            <Link>КОЖА</Link>
          </li>
          <li>
            {/* <span><img src={bottom} alt="" width="20" />бренд</span> */}
            <ul>
              <li>бренд One</li>
              <li>бренд Two</li>
              <li>бренд Three</li>
            </ul>
          </li>
        </ul>
        <ul className="home-list">
              {photos.map((photo) => (
                <li className="home-list__item" key={photo.id}
                  onClick={(e) => {
                    const foundItem = photos.find((pic) => pic.id === photo.id)
                    setItems([foundItem])
                  }}
                >
                  <Link className="home-list__link" to="/product">
                    <img src={img} alt="" />
                    <h2>gucci</h2>
                    <p>{product}</p>
                    <span>1,212 $</span>
                  </Link>
                </li>
              ))}
          </ul>
      </div>
    </>
  )
}
export default Products;