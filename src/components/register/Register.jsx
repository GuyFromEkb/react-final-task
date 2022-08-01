import RegisterPrice from '../registerPrice/RegisterPrice'
import RegisterForm from "../registerForm/RegisterForm"
import RegisterAnimateWrap from '../registerAnimateWrap/RegisterAnimateWrap'
import './Register.scss'

const Register = () => {

    return (
        <section className="register">
            <div className="container">
                <div className="register__wrap">
                    <RegisterSide>
                        <RegisterPrice />
                    </RegisterSide>

                    <RegisterSide>
                        <h3 className="register__title title title_section">Зарегистрируйтесь, чтобы участвовать</h3>
                        <RegisterForm />
                    </RegisterSide>
                </div>
            </div>
            <RegisterAnimateWrap />
        </section>
    )
}

export default Register

const RegisterSide = ({ children }) => {
    return (
        <div className="register__side">
            {children}
        </div>
    )
}