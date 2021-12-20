import "./Product.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

// Api

import Api from "../../Assets/Data/Api";

// images
import men from "../../Assets/image/plash.png"
import vomen from "../../Assets/image/shim.png"
import kids from "../../Assets/image/kurtka.png"
import bottom from "../../Assets/image/bottom.png"
import {Context} from "../../Context/headerContext";
import { Link } from "react-router-dom";

function Product() {
  console.log(Api);
const [photos , setPhotos] = useState([]);
const {product, setProduct} = useContext(Context);

useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/photos')
.then((res)=> res.json())
.then((date)=> setPhotos(date))
}, [])
photos.splice(20)
console.log(product);
let img = men
let type = 0
if(product == 'men'){
  img = men
  type = 2
}
if(product == 'vomen'){
  img = vomen
  type = 1
}
if(product == 'kids'){
  img = kids
  type = 3
}
let newApi = Api.filter((e)=> e.typeId == type)
return(
<>
<img src="" alt="" />
{/* <h1 className="product-title">{product}</h1> */}
  <div className="product-wrapper product-container">
    <ul className="cotigoriy-list">
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
        <span><img src={bottom} alt="" width="20"/>бренд</span>
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
        {newApi.map((photo)=> (
        <li className="home-list_item" key={photo.id}>
          <img src={photo.img} alt="" />
          <h2>{photo.title}</h2>
          <p>{product}</p>
          <span>{photo.cash}</span>
        </li>
        ))}
      </ul>
    </Carousel.Item>
    <Carousel.Item>
      <ul className="home-list">
        {newApi.map((photo)=>(
        <li className="home-list_item" key={photo.id}>
          <img src={photo.img} alt="" />
          <h2>{photo.title}</h2>
          <p>{product}</p>
          <span>{photo.cash}</span>
        </li>
        ))}
      </ul>
    </Carousel.Item>
    <Carousel.Item>
      <ul className="home-list">
        {newApi.map((photo)=>(
        <li className="home-list_item" key={photo.id}>
          <img src={photo.img} alt="" />
          <h2>{photo.title}</h2>
          <p>{product}</p>
          <span>{photo.cash}</span>
        </li>
        ))}
      </ul>
    </Carousel.Item>
    <Carousel.Item>
      <ul className="home-list">
        {newApi.map((photo)=>(
        <li className="home-list_item" key={photo.id}>
          <img src={photo.img} alt="" />
          <h2>{photo.title}</h2>
          <p>{product}</p>
          <span>{photo.cash}</span>
        </li>
        ))}
      </ul>
    </Carousel.Item>
    <Carousel.Item>
      <ul className="home-list">
        {newApi.map((photo)=>(
        <li className="home-list_item" key={photo.id}>
          <img src={photo.img} alt="" />
          <h2>{photo.title}</h2>
          <p>{product}</p>
          <span>{photo.cash}</span>
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