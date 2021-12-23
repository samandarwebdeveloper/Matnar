import "./Home-Footer.scss"

import { Row } from "react-bootstrap";

function HomeFooter() {
    return (
        <div 
        data-aos="zoom-in-up"
        data-aos-duration="1000" 
        data-aos-offset="0"
        className="home-footer"
        >
            <Row className="home-footer__top">
                <div className="col-sm-6 footer-top__left">
                    <h3 className="left-footer__lead">О НАС</h3>
                    <p className="left-footer__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.</p>
                </div>
                <div className="col-sm-6 footer-top__right">
                    <h3 className="right-footer__lead">закажите по номеру:</h3>
                    <p className="right-footer__tel">+998 99 111 11 95</p>
                    <a className="right-footer__mail" href="mailto:matnar@info.uz">matnar@info.uz</a>
                </div>
            </Row>
            <div className="home-footer__bottom">
                <p className="footer-copyright">© 2020 Все права защищены</p>
                <a className="footer-site__link" href="/">MATNAR.UZ</a>
            </div>
        </div>
    )
}

export default HomeFooter;