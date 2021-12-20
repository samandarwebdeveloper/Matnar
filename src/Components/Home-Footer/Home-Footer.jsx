import "./Home-Footer.scss"

function HomeFooter() {
    return (
        <div className="home-footer">
            <div className="home-footer__top">
                <div>
                    <h3>О НАС</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.</p>
                </div>
                <div>
                    <h3>закажите по номеру:</h3>
                    <p>+998 99 111 11 95</p>
                    <a href="mailto:matnar@info.uz">matnar@info.uz</a>
                </div>
            </div>
            <div className="home-footer__bottom">
                <p>© 2020 Все права защищены</p>
                <a href="/">MATNAR.UZ</a>
            </div>
        </div>
    )
}

export default HomeFooter;