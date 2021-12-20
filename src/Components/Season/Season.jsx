import "./Season.scss"

import { Link } from "react-router-dom"

//images
import SeasonListImage from "../../Assets/image/season-list__image.png"
import SeasonImage from "../../Assets/image/season-image.png"
import { Row } from "react-bootstrap"

function Season() {
    return (
        <div className="container-fluid">
            <Row className="season-section">
                <div className="col-sm-6 season-section__content">
                    <h2 className="season-section__lead">СЕЗОН 2021/22</h2>
                    <hr className="season-content__line" />
                    <ul className="season-section__list">
                        <li className="season-list__item">
                            <Link className="link-unstyled" to="/" >
                                <img src={SeasonListImage} alt="item" />
                                <h3 className="season-item__lead">Louis XVI ATHOS</h3>
                                <p className="season-item__text">22.300.000 sum/2203 $</p>
                            </Link>
                        </li>
                        <li className="season-list__item">
                            <Link className="link-unstyled" to="/" >
                                <img src={SeasonListImage} alt="item" />
                                <h3 className="season-item__lead">Louis XVI ATHOS</h3>
                                <p className="season-item__text">22.300.000 sum/2203 $</p>
                            </Link>
                        </li>
                        <li className="season-list__item">
                            <Link className="link-unstyled" to="/" >
                                <img src={SeasonListImage} alt="item" />
                                <h3 className="season-item__lead">Louis XVI ATHOS</h3>
                                <p className="season-item__text">22.300.000 sum/2203 $</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-6 season-section__image__wrap">
                    <img className="season-section__image" src={SeasonImage} alt="season" />
                    <div className="season-section__image-content">
                        <h2 className="season-image__lead">Новая коллекция</h2>
                        <Link className="season-image__link" to="/">Каталог</Link>
                    </div>
                </div>
            </Row>
        </div>
    )
}

export default Season;