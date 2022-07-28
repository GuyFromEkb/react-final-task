
import Logo from '../logo/Logo'
import PromoTitle from '../promoTitle/PromoTitle'
import PromoAction from '../promoAction/PromoAction'
import PromoBg from '../promoBg/PromoBg'


import './Promo.scss'


const Promo = () => {
    return (
        <>

            <div className="container">
                <Logo />

                <div className="wrap">

                    <PromoTitle>
                        <PromoAction />
                    </PromoTitle>
                    <PromoBg />

                </div>
            </div>









        </>
    )
}

export default Promo