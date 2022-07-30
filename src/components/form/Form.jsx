

import './Form.scss'

const Form = () => {
    return (

        <section className="form">

            <div className="container">
                <div className="form__wrap">

                    <div className="form__left">
                        <div className="form-price">
                            <div className="form-price__header-text">Скидка за репост</div>
                            <svg
                                className='form-price__header' width="292" height="110" viewBox="0 0 292 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M281.07 14.7005H292L281.07 0V14.7005Z" fill="#0E8958" />
                                <path d="M10.9305 14.7005H0L10.9305 0V14.7005Z" fill="#0E8958" />
                                <path d="M281.07 14.7005V0H10.9305V14.7005V110L146 74.5161L281.07 110V14.7005Z" fill="#14A76C" />
                            </svg>


                        </div>
                    </div>
                    <div className="form__right">

                        <h3 className="form__title title title_section">Зарегистрируйтесь, чтобы участвовать</h3>

                    </div>
                </div>

            </div>




        </section>


    )
}

export default Form