import "./Sign-up-modal.scss"


function SignUpModal({modalLink}) {

    

    const HandleClose = () => {
        modalLink.current.style.display = "none"
    }
    const HandleWindowClose = (evt) => {
        if (evt.target === modalLink.current) {
            modalLink.current.style.display = "none"
        }
    }

    return (
        <div className="sign-up__modal" ref={modalLink} onClick={HandleWindowClose}>
            <div className="sign-up__wrapper">
                <header className="sign-up__header">
                    <h2 className="sign-up__lead">Укажите телефон</h2>
                    <button className="sign-up__close" onClick={HandleClose}>X</button>
                </header>
                <div className="sign-up__content">
                    <form className="js-sign-up__form">
                        <input className="sign-up__input-tel" type="tel" defaultValue="+998" maxLength="13" minLength="13" />
                        <p className="sign-up__text">Мы отправим СМС с кодом для входа</p>
                        <button className="sign-up__btn">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpModal;