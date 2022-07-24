
import logo from '../../assets/img/logo.png'
import './Logo.scss'

const Logo = () => {
    return (
        <>
            <div className="container">
                <div className="logo">
                    <img className='logo__img' src={logo} alt="logo slon um" />
                    <div className="logo__text">Слон<span>УМ</span></div>
                </div>

            </div>

        </>
    )
}

export default Logo