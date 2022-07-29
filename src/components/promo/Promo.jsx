
import Logo from '../logo/Logo'
import PromoTitle from '../promoTitle/PromoTitle'
import PromoAction from '../promoAction/PromoAction'

import PromoGirl from '../promoGirl/PromoGirl'
import PromoSpace from '../promoSpace/PromoSpace'

import PromoSide from '../promoSide/PromoSide'

import './Promo.scss'


const Promo = () => {
    return (

        <section className="promo">
            <div className="container">
                <Logo />

                <div className="promo__wrap">
                    <PromoSide>
                        <PromoTitle />
                        <PromoAction />
                    </PromoSide>
                    
                    <PromoSide>
                        <PromoGirl />
                        <PromoSpace />
                    </PromoSide>
                </div>

            </div>
        </section>


    )
}

export default Promo