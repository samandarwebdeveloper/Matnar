import "./ItemCom.scss";
import { useContext } from "react";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Row } from "react-bootstrap";

import { Content } from "../../Context/itemContext";

import Boot from "../../Assets/image/boot.png";

function Product() {
    const { items } = useContext(Content);
    // useEffect(() => {

    //   }, []);

    return (
        <div className="container-fluid">
            <Row className="item-wrapper">
                <div className="col-sm-6">
                    {items.map((item) => (
                        <div className="item__left">
                            <img src={Boot} alt="boot-black" width='400' height='400' />
                        </div>
                    ))}
                </div>
                <div className="col-sm-6">
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
                        <Accordion className="accordion-list">
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography>Описание</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                В черном рюкзаке из коллекции сезона осень-зима 2021 года команда марки сделала ставку на функциональность. На нее работает и лаконичный дизайн, и вместительное основное отделение, и внешние отсеки — объемные и плоские карманы, закрывающиеся молниями. Для пошива аксессуара использовали знаковый для изделий бренда матовый нейлон. За счет мягких лямок, соединенных между собой вставкой, и рельефного узора на задней части в такой модели не страшны большие нагрузки: она будет равномерно распределена на спину.
                                <br /> <br />
                                Текстиль: 100%; <br />
                                Страна производства: Италия <br />
                                Страна дизайна: Италия <br />
                                Артикул: HE00754052 <br />
                                Артикул производителя: 2VZ135-2DXR-F0002-HCI <br />
                              </Typography>
                            </AccordionDetails>
                        </Accordion> 
                        <Accordion className="accordion-list">
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography>Доставка и возврат</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                В черном рюкзаке из коллекции сезона осень-зима 2021 года команда марки сделала ставку на функциональность. На нее работает и лаконичный дизайн, и вместительное основное отделение, и внешние отсеки — объемные и плоские карманы, закрывающиеся молниями. Для пошива аксессуара использовали знаковый для изделий бренда матовый нейлон. За счет мягких лямок, соединенных между собой вставкой, и рельефного узора на задней части в такой модели не страшны большие нагрузки: она будет равномерно распределена на спину.
                              </Typography>
                            </AccordionDetails>
                        </Accordion> 
                    </div>
                    ))}
                </div>
            </Row>
        </div>
    )
}

export default Product;