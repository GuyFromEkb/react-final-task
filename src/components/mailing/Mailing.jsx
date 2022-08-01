
import MailingForm from '../mailingForm/MailingForm'
import './Mailing.scss'

const Mailing = () => {

    return (

        <section className="mailing">
            <div className="container">
                <h3 className='title title_section mailing__title'>Подпишись на нашу рассылку</h3>
                <p className="mailing__descr">Обещаем присылать только самое важное и интересное <span className='bold'>:&#41;</span></p>
                <MailingForm />
            </div>

        </section>


    )
}

export default Mailing