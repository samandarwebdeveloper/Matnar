import "./Sign-up-modal.scss"

import Aos from "aos"

// images
import CloseIcon from "../../Assets/image/close-icon.png"
import LeftIcon from "../../Assets/image/left-arrow.png"
// import { useState } from "react";

function SignUpModal({modalLink}) {

    Aos.init();

    const HandleClose = () => {
        modalLink.current.style.display = "none"
        document.body.style.overflowY = 'unset';

    }
    const HandleWindowClose = (evt) => {
        if (evt.target === modalLink.current) {
            modalLink.current.style.display = "none"
            document.body.style.overflowY = 'unset';
        }
    }

    // const [telephone, setTelephone] = useState();

    // const onTelephone = (e) => {
    // const value = e.target.value.test(/^998[389][012345789][0-9]{7}/g);
    // setTelephone(value);
    // };

    // const [password, setPassword] = useState();

    // const onPassword = (e) => {
    // const value = e.target.value.replace(/\D/g, "");
    // setPassword(value);
    // };

    return (
        <div className="sign-up__modal" ref={modalLink} onClick={HandleWindowClose}>
            <div className="vov fade-in-up faster sign-up__wrapper">
                <header className="sign-up__header">
                    <h2 className="sign-up__lead">Укажите телефон</h2>
                    <button 
                    className="sign-up__close" 
                    onClick={HandleClose}><img 
                    src={CloseIcon} alt="close" 
                    width={31} 
                    height={35} 
                    /></button>
                </header>
                <div className="sign-up__content">
                    <form className="js-sign-up__form">
                        <input 
                        className="sign-up__input-tel" 
                        type="tel" 
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        defaultValue="+998" 
                        maxLength="13" 
                        minLength="13" 
                        required />
                        <p className="sign-up__text">Мы отправим СМС с кодом для входа в Ваш личный кабинет</p>
                        <button className="sign-up__btn">Отправить</button>
                    </form>
                </div>
            </div>
            <div>
                <header>
                    <button>
                        <img src={LeftIcon} alt="icon" />
                    </button>
                    <h2>Укажите код из СМС</h2>
                    <button className="sign-up__close" 
                    onClick={HandleClose}>
                        <img src={CloseIcon} alt="close" width={31} height={35} />
                    </button>
                </header>
                <div>
                    <form>
                        <input type="text" 
                        maxLength="1" 
                        minLength="1" 
                        required
                        />
                        <input type="text" 
                        maxLength="1" 
                        minLength="1" 
                        required
                        />
                        <input type="text" 
                        maxLength="1" 
                        minLength="1" 
                        required
                        />
                        <input type="text" 
                        maxLength="1" 
                        minLength="1" 
                        required
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpModal;