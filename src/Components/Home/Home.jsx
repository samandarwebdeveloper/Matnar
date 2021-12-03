import "./Home.scss"

//Hooks
import { NavLink, Link } from "react-router-dom";
import { useRef } from "react"

//components
import SignUpModal from "../Sign-up-modal/Sign-up-modal";
import CategoriesSlider from "../Categories-slider/Categories-slider";
import Footer from "../Footer/Footer";

//images
import HeroVideo from "../../Assets/video/matnar.mp4"
import RuLangIcon from "../../Assets/image/russia.png"
import UzLangIcon from "../../Assets/image/uzbekistan.png"
import Minefer from "../../Assets/image/minefer";
import StarIcon from "../../Assets/image/StarIcon";
import ShoppingIcon from "../../Assets/image/Shopping";

function Home() {
    
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
        modalLink.current.style.display = "block";
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
        searchInput.current.style.display = 'flex'
    }
    const CloseSearch = (evt) => {
        if (evt.target !== searchInput.current) {
            searchInput.current.style.display = 'none'
        }
    }

    return (
        <>
            <div className="container">
                <div className="hero-section__wrapper">
                    <video className="video-section" autoPlay loop muted  src={HeroVideo}></video>
                    <div className="hero-section">
                        <header className="site-header">
                            <div className="site-header__wrapper">
                                <div className="header-top">
                                    <ul className="header-top__list">
                                        <li className="header-top__item"><NavLink className="header-top__lang-link" activeClassName="header-top__link-active" to="/" exact>Женское</NavLink></li>
                                        <li className="header-top__item"><NavLink className="header-top__lang-link" activeClassName="header-top__link-active" to="/men">Мужское</NavLink></li>
                                        <li className="header-top__item"><NavLink className="header-top__lang-link" activeClassName="header-top__link-active" to="/kids">Детское</NavLink></li>
                                    </ul>
                                    <h1>MATNAR</h1>
                                    <div className="header-top__right">
                                        <button className="header-lang__btn" onClick={langModal}><img src={RuLangIcon} alt="" /><span>RU</span></button>
                                        <div className="modal-lang__select" ref={langBox} onMouseLeave={langModalNone} onClick={langModalNone}>
                                            <button className="modal-lang__btn"><img src={RuLangIcon} alt="flag" /><span>Русский</span></button>
                                            <button className="modal-lang__btn"><img src={UzLangIcon} alt="flag" /><span>O'zbekcha</span></button>
                                        </div>
                                        <button className="header__btn" onClick={HandleOpenModal}>Личный кабинет</button>
                                        <div className="header-btn__box">
                                            <div>
                                                <button className="header__btn search-open__btn" onClick={OpenSearch}><Minefer /></button>
                                                <div className="search-input__wrap" ref={searchInput} onMouseLeave={CloseSearch}>
                                                    <form> 
                                                        <button className="search-btn"><Minefer /></button>
                                                        <input className="search__input" type="search" placeholder="Поиск" />
                                                    </form>
                                                </div>
                                            </div>
                                            <button className="header__btn"><StarIcon /></button>
                                            <button className="header__btn"><ShoppingIcon /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-bottom">
                                    <ul className="header-links-list">
                                        <li className="header-links-item"><Link className="header-link" to="/">НОВИНКИ</Link></li>
                                        <li className="header-links-item"><Link className="header-link" to="/" onMouseEnter={onHoverModal} onMouseLeave={onModal}>БРЕНДЫ</Link></li>
                                        <li className="header-links-item"><Link className="header-link" to="/" onMouseEnter={onHoverModal} onMouseLeave={onModal}>ОДЕЖДА</Link></li>
                                        <li className="header-links-item"><Link className="header-link" to="/" onMouseEnter={onHoverModal} onMouseLeave={onModal}>ОБУВЬ</Link></li>
                                        <li className="header-links-item"><Link className="header-link" to="/" onMouseEnter={onHoverModal} onMouseLeave={onModal}>СУМКИ</Link></li>
                                        <li className="header-links-item"><Link className="header-link" to="/" onMouseEnter={onHoverModal} onMouseLeave={onModal}>АКСЕССУАРЫ</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </header>
                        <SignUpModal modalLink={CloseWindow} />
                        <div className="modal-link" onMouseEnter={onHoverModal} onMouseLeave={onModal} ref={modalLink}>
                            <div className="modal-link__wrapper">
                                <div className="modal-wrapper__left">
                                    <h3>По разделам</h3>
                                    <ul className="modal-clothes__categories">
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
                                    <img src="https://picsum.photos/600/350" alt="brand" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="salets-section">
                    <div className="salest-section__wrapper">
                        <h2 className="salest-section__lead">Осен-зима <br /> 2021-2022</h2>
                    </div>
                </div>
                <section className="new-collection">
                    <h2 className="new-collection__lead">НОВЫЕ ПОСТУПЛЕНИЯ</h2>
                    <CategoriesSlider />
                </section>
                <Footer />
            </div>
        </>
    )
}

export default Home;