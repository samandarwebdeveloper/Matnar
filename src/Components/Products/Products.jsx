import "./Products.scss"

import { useContext, useEffect } from "react";
import { Content } from "../Context/itemContext";


import Boot from "../../Assets/image/boot.png";


function Products() {

    const { items } = useContext(Content);
    console.log(items);

    return (
        <div className="item-wrapper item">

                <div className="item__top-wrapper">
                    {items.map((item) => (
                        <div className="item__left">
                            <img src={Boot} alt="boot-black" width='400' height='400' />
                        </div>
                    ))}
                    {items.map((item) => (
                        <div className="item__right right">
                            <p className="right__brend-title"></p>
                            <p className="right__product-name">зимнее пальто</p>
                            <span className="right__product-price">{item.id}</span>
                            <p className="right__product-color">Цвет:<span>BLACK</span></p>
                            <span className="right__size-title">Размер</span>
                            <select className="right__size-select">
                                <option >Определите размер</option>
                                <option className="option" value='31'>Определите размер 31</option>
                                <option className="option" value='32'>Определите размер 32</option>
                                <option className="option" value='33'>Определите размер 33</option>
                                <option className="option" value='34'>Определите размер 34</option>
                            </select>
                            <button className="right__add-basket">Добавить в корзину</button>
                            <div className="right__btn-wrapper">
                                <button className="right__buy-btn">Быстрая покупка</button>
                                <button className="right__add-choosen">в избранное</button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
    )
}

export default Products;