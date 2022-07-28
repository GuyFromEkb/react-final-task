import girl from '../../assets/img/promo-girl.png'
import planes from '../../assets/img/two-plane.png'

import PromoSpace from '../promoSpace/PromoSpace'
import './PromoGirl.scss'

const PromoGirl = () => {
    return (
        <>
        <PromoSpace/>
            <div className="promo-girl__wrap">
                <img className='promo-girl__planes' src={planes} alt="two-plane" />
                <img className='promo-girl__girl' src={girl} alt="girl" />
            </div>

        </>
    )
}

export default PromoGirl