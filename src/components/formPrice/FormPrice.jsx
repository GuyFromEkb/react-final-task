import vk from "../../assets/img/social-vk-icon.png"
import ok from "../../assets/img/social-ok-icon.png"
import './FormPrice.scss'

const FormPrice = () => {
    return (
        <div className="form-price">
            <FormPriceHeader />
            <p className="form-price__descr">Стоимость участия:</p>
            <div className="form-price__wrap">
                <div className="form-price__price">149₽</div>
                <div className="form-price__discount">299₽</div>
            </div>
            <p className="form-price__descr second">При наличии репоста в соцсетях :&#41;</p>
            <div className="form-price__social">
                <div className="form-price__get-discound">Получить скидку:</div>
                <div className="form-price__social-wrap">
                    <a href="/"><img src={vk} alt="vk.ru" /></a>
                    <a href="/"><img src={ok} alt="odnoklassniki.ru" /></a>
                </div>
            </div>
        </div>
    )
}

export default FormPrice



const FormPriceHeader = () => {
    return (
        <>
            <div className="form-price__header-text">Скидка за репост</div>
            <svg
                className='form-price__header' width="292" height="110" viewBox="0 0 292 110" fill="#0E8958" xmlns="http://www.w3.org/2000/svg">
                <path d="M281.07 14.7005H292L281.07 0V14.7005Z" />
                <path d="M10.9305 14.7005H0L10.9305 0V14.7005Z" />
                <path d="M281.07 14.7005V0H10.9305V14.7005V110L146 74.5161L281.07 110V14.7005Z" fill="#14A76C" />
            </svg>
        </>
    )
}
