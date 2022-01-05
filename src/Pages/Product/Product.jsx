import "./Product.scss";

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import { Context } from "../../Context/headerContext";
import { Content } from "../../Context/itemContext";

import men from "../../Assets/image/plash.png"
import women from "../../Assets/image/shim.png"
import kids from "../../Assets/image/kurtka.png"


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


  photos.splice(20)
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

  var links = [
    {
        brand: "Gucci",
        clothes: "КУРТКИ",
    },
    {   
        brand: "Armani",
        clothes: "ПУХОВИКИ",
    },
    {
        brand: "Dolce Gabbana",
        clothes: "ТРИКОТАЖ",
    },
    { 
        brand: "Kenzo",
        clothes: "ПЛАТЬЯ",
    },
    {
        brand: "Zara",
        clothes: "БРЮКИ",
    },
    {  
        brand: "Louis XVI ATHOS",
        clothes: "ФУТБОЛКИ И ТОПЫ",
    },   
]
  return (
    <div className="container-fluid">
      <header className="product-header">
        <h1 className="product-title">товары для {product}</h1>
        <p>{photos.length} товаров</p>
      </header>
      <Row className="product-wrapper">
        <div className="col-sm-2">
          <Accordion className="accordion-list">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>БРЕНДЫ</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                {
                    links.map( (item, i) => <Brand key={i} item={item} /> )
                }
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion-list">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>ОДЕЖДА</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                {
                    links.map( (item, i) => <Clothes key={i} item={item} /> )
                }
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion-list">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>ОДЕЖДА</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                {
                    links.map( (item, i) => <Clothes key={i} item={item} /> )
                }
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion-list">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>ОДЕЖДА</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                {
                    links.map( (item, i) => <Clothes key={i} item={item} /> )
                }
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="col-sm-10 product-container">
          <ul className="product-list">
                {photos.map((photo) => (
                  <li className="product-list__item" key={photo.id}
                    onClick={(e) => {
                      const foundItem = photos.find((pic) => pic.id === photo.id)
                      setItems([foundItem])
                    }}
                  >
                    <Link className="product-list__link" to="/product">
                      <img src={img} alt="" />
                      <h2>gucci</h2>
                      <p>{product}</p>
                      <span>1,212 $</span>
                    </Link>
                  </li>
                ))}
            </ul>
        </div>
      </Row>
    </div>
  )
}

function Brand(props) {
    return (        
      <li className="accordion-list__item">
        <Link className="accordion-list__link" to="/product">{props.item.brand}</Link>
      </li>        
    )
}

function Clothes(props) {
  return (        
    <li className="accordion-list__item">
      <Link className="accordion-list__link" to="/product">{props.item.clothes}</Link>
    </li>        
  )
}

export default Products;