import { motion } from "framer-motion"
import girl from '../../assets/img/promo-girl.png'
import pen from '../../assets/img/pen.png'
import planes from '../../assets/img/two-plane.png'
import './PromoGirl.scss'

const PromoGirl = () => {

    return (
        <div className="promo-girl__wrap">
            <img className='promo-girl__planes' src={planes} alt="two-plane" />
            <motion.img
                className='promo-girl__pen'
                src={pen}
                alt="pen"
                animate={{
                    rotate: 50,
                    x: 30,
                    y: 15,
                }}
                transition={{
                    y: {
                        delay: 2,
                        ease: "anticipate",
                        repeat: Infinity,
                        repeatDelay: 6,
                        repeatType: "mirror",
                        duration: 1,
                    },
                    x: {
                        delay: 1,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 3,
                        repeatType: "reverse",
                    },
                    rotate: {
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: 4,

                    }
                }}
            />
            <img className='promo-girl__girl' src={girl} alt="girl" />
        </div>
    )
}

export default PromoGirl