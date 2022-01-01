import "./Header.scss"

//Hooks
import { NavLink, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react"
import { Row } from "react-bootstrap";


//components
import SignUpModal from "../Sign-up-modal/Sign-up-modal";


//images
import RuLangIcon from "../../Assets/image/russia.png"
import UzLangIcon from "../../Assets/image/uzbekistan.png"
import Minefer from "../../Assets/image/minefer";
import LikedIcon from "../../Assets/image/liked";
import ShoppingIcon from "../../Assets/image/shoppingIcon";
import LogoHead from "../../Assets/image/matnar-logo.png"
import ChatIcon from "../../Assets/image/chat-icon.png"

function Header() {

    const langBox = useRef();

    const langModal = () => {
        
        langBox.current.style.display = "block";
    }
    const langModalNone = (evt) => {
        if (evt.currentTarget === langBox.current) {
            langBox.current.style.display = "none";
        }
    }

    const modalLink = useRef();

    const onHoverModal = () => {
        modalLink.current.style.display = "flex";
    }
    const onModal = () => {
        modalLink.current.style.display = "none";
    }
    
    const CloseWindow = useRef();

    const HandleOpenModal = () => {
        CloseWindow.current.style.display = "flex"
    }

    const searchInput = useRef();

    const OpenSearch = () => {
        searchInput.current.style.display = 'block'
    }
    
    const CloseSearch = (evt) => {
        if (evt.target !== searchInput.current) {
            searchInput.current.style.display = 'none'
        }
    }

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);
      

    return (
        <>
            <header className="site-header">
                <div className="site-header__wrapper">
                    <Row className="header-top">
                        <div className="col-4 header-top__left">
                            <p className="header-top__tel">+998 99 111 11 95 | Работаем 7 дней в неделю | 24/7</p>
                            <ul className="header-top__list">
                                <li className="header-top__item">
                                    <NavLink 
                                    className="header-top__lang-link" 
                                    activeClassName="header-top__link-active" 
                                    
                                    to="/men" exact
                                    >
                                    Мужское
                                    </NavLink>
                                </li>
                                <li className="header-top__item">
                                    <NavLink 
                                    className="header-top__lang-link" 
                                    activeClassName="header-top__link-active" 
                                    
                                    to="/women"
                                    >
                                    Женское
                                    </NavLink>
                                </li>
                                <li className="header-top__item">
                                    <NavLink 
                                    className="header-top__lang-link" 
                                    activeClassName="header-top__link-active" 
                                    
                                    to="/kids"
                                    >
                                    Детское
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-4 site-logo__wrap">
                            <a className="site-logo__link" href="/"><img src={LogoHead} alt="site logo" /></a>
                        </div>
                        <div className="col-4 header-top__right">
                            <div className="header-lang__wrap">
                                <button className="header-lang__btn" onClick={langModal}><img src={RuLangIcon} alt="ru flag" /></button>
                                <div className="modal-lang__select" ref={langBox} onMouseLeave={langModalNone} onClick={langModalNone}>
                                    <button className="modal-lang__btn"><img src={RuLangIcon} alt="flag" /><span>Русский</span></button>
                                    <button className="modal-lang__btn"><img src={UzLangIcon} alt="flag" /><span>O'zbekcha</span></button>
                                </div>
                            </div>
                            <button className="header__btn" onClick={HandleOpenModal}>Личный кабинет</button>
                            <div className="header-btn__box">
                                <div>
                                    <button className="header__btn search-open__btn" onClick={OpenSearch}><Minefer /></button>
                                    <div className="vov fade-in-right faster search-input__wrap" ref={searchInput} onMouseLeave={CloseSearch}>
                                        <form> 
                                            <button className="search-btn"><Minefer /></button>
                                            <input className="search__input" type="search" placeholder="Поиск" />
                                        </form>
                                    </div>
                                </div>
                                <button className="header__btn"><LikedIcon /></button>
                                <button className="header__btn"><ShoppingIcon /></button>
                            </div>
                        </div>
                    </Row>
                    <Row className="header-bottom">
                        <ul className="col-8 header-links-list">
                            <li className="header-links-item"><Link className="header-link" to="/">НОВИНКИ</Link></li>
                            <li className="header-links-item"><Link className="header-link" to="/" onMouseEnter={onHoverModal} onMouseLeave={onModal}>БРЕНДЫ</Link></li>
                            <li className="header-links-item"><Link className="header-link" to="/" onMouseEnter={onHoverModal} onMouseLeave={onModal}>ОДЕЖДА</Link></li>
                            <li className="header-links-item"><Link className="header-link" to="/" onMouseEnter={onHoverModal} onMouseLeave={onModal}>ОБУВЬ</Link></li>
                            <li className="header-links-item"><Link className="header-link" to="/" onMouseEnter={onHoverModal} onMouseLeave={onModal}>СУМКИ</Link></li>
                            <li className="header-links-item"><Link className="header-link" to="/" onMouseEnter={onHoverModal} onMouseLeave={onModal}>АКСЕССУАРЫ</Link></li>
                        </ul>
                    </Row>
                </div>
            </header>
            <div className="vov blur-in fastest modal-link" onMouseEnter={onHoverModal} onMouseLeave={onModal} ref={modalLink}>
                <div className="modal-link__wrapper">
                    <div className="modal-wrapper__left">
                        <h3>По разделам</h3>
                        <ul className="modal-clothes__categories list-unstyled">
                            <li><Link className="link-unstyled" to="/">Женская одежда</Link></li>
                            <li><Link className="link-unstyled" to="/">Женская обувь</Link></li>
                            <li><Link className="link-unstyled" to="/">Женская сумки</Link></li>
                        </ul>
                    </div>
                    <div className="modal-wrapper__brand-box">
                        <ul className="modal-brands__wrapper__list">
                            <li><Link className="link-unstyled" to="/">Alexander McQueen</Link></li>
                            <li><Link className="link-unstyled" to="/">Balenciaga</Link></li>
                            <li><Link className="link-unstyled" to="/">Bottega Veneta</Link></li>
                            <li><Link className="link-unstyled" to="/">Brunello Cucinelli</Link></li>
                            <li><Link className="link-unstyled" to="/">Burberry</Link></li>
                            <li><Link className="link-unstyled" to="/">Dolce & Gabbana</Link></li>
                            <li><Link className="link-unstyled" to="/">Ermenegildo Zegna</Link></li>
                            <li><Link className="link-unstyled" to="/">Gucci</Link></li>
                            <li><Link className="link-unstyled" to="/">Kiton</Link></li>
                            <li><Link className="link-unstyled" to="/">Loro Piana</Link></li>
                            <li><Link className="link-unstyled" to="/">Moncler</Link></li>
                            <li><Link className="link-unstyled" to="/">Off-White</Link></li>
                        </ul>
                        <ul className="modal-brands__wrapper__list">
                            <li><Link className="link-unstyled" to="/">Ralpth Lauren</Link></li>
                            <li><Link className="link-unstyled" to="/">Saint Laurent</Link></li>
                            <li><Link className="link-unstyled" to="/">Santoni</Link></li>
                            <li><Link className="link-unstyled" to="/">Stone Island</Link></li>
                            <li><Link className="link-unstyled" to="/">Tom Ford</Link></li>
                            <li><Link className="link-unstyled" to="/">Valentino</Link></li>
                            <li><Link className="link-unstyled" to="/">Varsace</Link></li>
                            <li><Link className="link-unstyled" to="/">Zilli</Link></li>
                        </ul>
                    </div>
                    <div>
                        <img src="https://picsum.photos/800/480" alt="brand" />
                    </div>
                </div>
            </div>
            {showButton && (
                <button className="site-chat-bot">
                  <img src={ChatIcon} alt="chat" />
                </button>
            )}
            <SignUpModal modalLink={CloseWindow} />
            {/* <ModalChat /> */}
        </>
    )
}

export default Header;