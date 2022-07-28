
import logo from '../../assets/img/logo.png'
import './Logo.scss'

const Logo = () => {
    return (
        <>
            <div className="logo">
                <div className="logo__wrap">
                    <img className='logo__img' src={logo} alt="logo slon um" />
                    <div className="logo__text">Слон<span>УМ</span></div>
                </div>
                <button className="button button_logo logo__btn">Войти</button>
            </div>
        </>
    )
}

export default Logo