import "./Modal-chat.scss"

import CloseButton from "../../Assets/image/close-icon.png"

function ModalChat() {
    return (    
        <div>
            <header>
                <h3>Чат</h3>
                <button><img src={CloseButton} alt="icon" /></button>
            </header>
            <div>
            </div>
        </div>
    )
}

export default ModalChat;