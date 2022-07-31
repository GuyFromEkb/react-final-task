
import FormPrice from '../formPrice/FormPrice'
import './Form.scss'

const Form = () => {
    return (

        <section className="form">

            <div className="container">
                <div className="form__wrap">

                    <FormSide>
                        <FormPrice />
                    </FormSide>

                    <FormSide>
                        <h3 className="form__title title title_section">Зарегистрируйтесь, чтобы участвовать</h3>
                    </FormSide>



                </div>
            </div>




        </section>


    )
}

export default Form


const FormSide = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}
