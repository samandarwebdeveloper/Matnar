import "./Sign-up-modal.scss"


// images
import CloseIcon from "../../Assets/image/close-icon.png"
import LeftIcon from "../../Assets/image/left-arrow.png"
import { useState } from "react";
import { useRef } from "react";

function SignUpModal({modalLink}) {

    const signNumber = useRef();
    const signCode = useRef();

    const CloseSignNumber =() => {
        signNumber.current.style.display = "none"
        signCode.current.style.display = "block"
    }

    const OpenSignNumber =() => {
        signNumber.current.style.display = "block"
        signCode.current.style.display = "none"
    }

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

    const [telephone, setTelephone] = useState();

    const onTelephone = (e) => {
    const value = e.target.value.replace(/\D/g, "+");
    setTelephone(value);
    };

    // const [password, setPassword] = useState();

    // const onPassword = (e) => {
    // const value = e.target.value.replace(/\D/g, "");
    // setPassword(value);
    // };

    return (
        <div className="sign-up__modal" ref={modalLink} onClick={HandleWindowClose}>
            <div className="vov fade-in-up faster sign-up__wrapper" ref={signNumber}>
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
                        value={telephone}
                        onChange={onTelephone}
                        defaultValue="+998" 
                        maxLength="13" 
                        minLength="13" 
                        required />
                        <p className="sign-up__text">Мы отправим СМС с кодом для входа в Ваш личный кабинет</p>
                    </form>
                        <button className="sign-up__btn" onClick={CloseSignNumber} type="submit">Отправить</button>
                </div>
            </div>
            <div className="sign-up-code__wrapper" ref={signCode}>
                <header className="sign-up-code__header">
                    <button className="prev-btn" onClick={OpenSignNumber}>
                        <img src={LeftIcon} alt="icon" />
                    </button>
                    <h2 className="sign-up-code__lead">Укажите код из СМС</h2>
                    <button className="sign-up__close" 
                    onClick={HandleClose}>
                        <img src={CloseIcon} alt="close" width={31} height={35} />
                    </button>
                </header>
                <div className="sign-up-code__content">
                    <form>
                        <input className="sign-up-code__input" type="text" 
                        maxLength="1" 
                        minLength="1" 
                        required
                        />
                        <input className="sign-up-code__input" type="text" 
                        maxLength="1" 
                        minLength="1" 
                        required
                        />
                        <input className="sign-up-code__input" type="text" 
                        maxLength="1" 
                        minLength="1" 
                        required
                        />
                        <input className="sign-up-code__input" type="text" 
                        maxLength="1" 
                        minLength="1" 
                        required
                        />
                    </form>
                    <p className="sign-up-code__text">Мы отправили СМС с кодом подтверждения на номер <br /> +998 (__) ___ __ __</p>
                    <p className="sign-up-code__timer">Получить новый код можно через 00:45</p>
                </div>
            </div>
        </div>
    )
}

export default SignUpModal;