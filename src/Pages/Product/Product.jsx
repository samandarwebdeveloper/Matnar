import "./Product.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useContext, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import men from "../../Assets/image/plash.png"
import women from "../../Assets/image/shim.png"
import kids from "../../Assets/image/kurtka.png"

import { Context } from "../../Components/Context/headerContext";
import { Content } from "../../Components/Context/itemContext";

function Product() {
  const [photos, setPhotos] = useState([]);
  const { product, setProduct } = useContext(Context);
  // Second Context
  const { items, setItems } = useContext(Content);

  useEffect(() => {
    console.log(items);
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((date) => setPhotos(date))
  }, []);


  photos.splice(20)
  console.log(product);
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
      {/* <h1 className="product-title">{product}</h1> */}
      <div className="product-wrapper product-container">
        <ul>
          <li>
            <Link>Lorem.</Link>
          </li>
          <li>
            <Link>Suscipit.</Link>
          </li>
          <li>
            <Link>Libero?</Link>
          </li>
          <li>
            <Link>Recusandae?</Link>
          </li>
          <li>
            <Link>Nam?</Link>
          </li>
          <li>
            <Link>Ipsam.</Link>
          </li>
          <li>
            <Link>Rerum!</Link>
          </li>
          <li>
            <Link>Magni.</Link>
          </li>
          <li>
            <Link>At?</Link>
          </li>
          <li>
            <Link>Doloribus?</Link>
          </li>
          <li>
            <ul>
              <li>бренд One</li>
              <li>бренд Two</li>
              <li>бренд Three</li>
            </ul>
          </li>
        </ul>
        <Carousel className="carousel w-70 h-100">
          <Carousel.Item>
            <ul className="home-list">
              {photos.map((photo) => (
                <li className="home-list__item" key={photo.id}
                  onClick={(e) => {
                    const foundItem = photos.find((pic) => pic.id === photo.id)
                    setItems([foundItem])
                  }}
                >
                  <Link className="home-list__link" to="/brend">
                    <img src={img} alt="" />
                    <h2>gucci</h2>
                    <p>{product}</p>
                    <span>1,212 $</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Carousel.Item>
          <Carousel.Item>
            <ul className="home-list">
              {photos.map((photo) => (
                <li className="home-list__item"
                  onClick={(e) => {
                    const foundItem = photos.find((pic) => pic.id === photo.id)
                    setItems([foundItem])
                  }}
                  key={photo.id}>
                  <Link className="home-list__link" to="/brend">
                    <img src={img} alt="" />
                    <h2>gucci</h2>
                    <p>{product}</p>
                    <span>1,212 $</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Carousel.Item>
          <Carousel.Item>
            <ul className="home-list">
              {photos.map((photo) => (
                <li className="home-list__item"
                  onClick={(e) => {
                    const foundItem = photos.find((pic) => pic.id === photo.id)
                    setItems([foundItem])
                  }}
                  key={photo.id}>
                  <Link className="home-list__link" to="/brend">
                    <img src={img} alt="" />
                    <h2>gucci</h2>
                    <p>{product}</p>
                    <span>1,212 $</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Carousel.Item>
          <Carousel.Item>
            <ul className="home-list">
              {photos.map((photo) => (
                <li className="home-list__item"
                  onClick={(e) => {
                    const foundItem = photos.find((pic) => pic.id === photo.id)
                    setItems([foundItem])
                  }}
                  key={photo.id}>
                  <Link className="home-list__link" to="/brend">
                    <img src={img} alt="" />
                    <h2>gucci</h2>
                    <p>{product}</p>
                    <span>1,212 $</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Carousel.Item>
          <Carousel.Item>
            <ul className="home-list">
              {photos.map((photo) => (
                <li className="home-list__item"
                  onClick={(e) => {
                    const foundItem = photos.find((pic) => pic.id === photo.id)
                    setItems([foundItem])
                  }}
                  key={photo.id}>
                  <Link className="home-list__link" to="/brend">
                    <img src={img} alt="" />
                    <h2>gucci</h2>
                    <p>{product}</p>
                    <span>1,212 $</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}
export default Product;