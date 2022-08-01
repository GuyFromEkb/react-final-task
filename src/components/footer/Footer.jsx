
import tg from '../../assets/img/social-tg-icon.png'
import dzen from '../../assets/img/social-dzen-icon.png'
import vk from '../../assets/img/social-vk-icon-footer.png'

import './Footer.scss'

const Footer = () => {

    function onArrowClick() {
        document.querySelector('.promo').scrollIntoView({
            behavior: "smooth"
        });
    }
    return (

        <footer className='footer'>
            <div className="container">
                <div className="footer__wrap">
                    <div className="footer__social">
                        <p className='footer__our-social' >Наши соцсети:</p>
                        <div>
                            <a href="/"><img src={tg} alt="telegramm icon" /></a>
                            <a href="/"><img src={dzen} alt="yandex dzen icon" /></a>
                            <a href="/"><img src={vk} alt="vkontakte icon" /></a>
                        </div>
                    </div>
                    <div className="footer__nav">
                        <ul>
                            <li><a href="/">Главная</a></li>
                            <li><a href="/">Личный кабинет</a></li>
                            <li><a href="/">Контакты</a></li>
                            <li><a href="/">Конфиденциальность</a></li>
                        </ul>
                    </div>
                    <div className="footer__arrow">
                        {/* <p className='footer__our-social' >Наши соцсети:</p> */}
                        <div onClick={() => onArrowClick()}></div>
                    </div>
                </div>
                <div className="footer__footer">@ Все права защищены.  ООО”Слонум” 2022</div>

            </div>
        </footer>

    )
}

export default Footer



