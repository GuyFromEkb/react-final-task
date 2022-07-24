import { useState } from 'react'

import Timer from '../timer/Timer'

import './PromoAction.scss'

const PromoAction = () => {
    const [showTimer, setShowTimer] = useState(true)

    const hideTimer = () => {
        setShowTimer(false)
    }

    console.log(showTimer);
    return (
        <>
            <div className="promo-action">
                <button className="promo-action__btn buttons buttons_promo">
                    Учавствовать
                </button>
                {showTimer && <Timer hideTimer={hideTimer} />}
            </div>
        </>
    )
}

export default PromoAction