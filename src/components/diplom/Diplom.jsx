
import SpanUnderLine from '../spanUnderLine/SpanUnderLine'
import diplom from "../../assets/img/diplom.jpg"

import './Diplom.scss'

const Diplom = () => {
    return (

        <section className="diplom">
            <div className="container">
                <div className="diplom__wrap">
                    <DiplomLeft />
                    <DiplomRight />
                </div>
            </div>
        </section>
    )
}

export default Diplom





const DiplomLeft = () => {
    return (

        <div className="diplom__left">
            <h2 className="diplom__title title title_section">Выдаём <SpanUnderLine>дипломы</SpanUnderLine> участникам  </h2>
            <p className='diplom__descr' >
                Жюри конкурса рассмотрит работы и выделит победителей по городам и возрастным категориям, а также определит другие номинации, подчеркнув уникальную особенность каждого конкретного рисунка — дипломы получат все дети!
                <br /><br />
                Скачать диплом можно будет в личном кабинете через сутки после окончания конкурса, дополнительно вышлем его на e-mail.
                <br /><br />
                Со слоном к победам напролом!
            </p>
        </div>

    )
}

const DiplomRight = () => {
    return (
        <div className="diplom__right">
            <img className='diplom__img' src={diplom} alt="diplom" />
        </div>
    )
}

