import { motion } from "framer-motion"

import girl from '../../assets/img/promo-girl.png'
import pen from '../../assets/img/pen.png'
import planes from '../../assets/img/two-plane.png'

// import PromoSpace from '../promoSpace/PromoSpace'
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





// const penAnimation = {
//     animate: {
//         rotate: 50,
//         x: 30,
//         y: 15,
//     },
//     y: {
//         ease: "anticipate",
//         repeat: Infinity,
//         repeatDelay: 6,
//         repeatType: "mirror",
//         duration: 1,
//     },
//     x: {
//         ease: "easeInOut",
//         repeat: Infinity,
//         repeatDelay: 3,
//         repeatType: "reverse",
//     },
//     rotate: {
//         repeat: Infinity,
//         repeatType: "reverse",
//         repeatDelay: 3.5,

//     }

// }

/* <motion.img
className='promo-girl__pen'
src={pen}
alt="pen"
animate={{
    // rotate: 50,
    x: 30,
    y: 10,

}}
transition={{

    y: {
        repeatDelay: 4,
        duration: 0.5,
        bounce: .8,
        repeat: Infinity,
        repeatType: "mirror",
    },
    // rotate: {
    //     delay: 2.5,
    //     ease: "linear",
    //     repeat: Infinity,
    //     repeatDelay: 5,
    //     type: "keyframes",
    //     duration: 0.1,
    //     repeatType: "reverse"
    // },
    x: {
        type: "spring",
        stiffness: 50,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: 1.5,
        repeatType: "reverse",
    }
}}
/>

{/* rotate: {
ease: "easeInOut",
repeat: Infinity,
repeatDelay: 2,
type: "spring",
bounce: .8,
duration: 1,
repeatType: "mirror",
    }, */








//     <>
//     <PromoSpace />
//     <div className="promo-girl__wrap">
//         <img className='promo-girl__planes' src={planes} alt="two-plane" />

//         <motion.img
//             className='promo-girl__pen'
//             src={pen}
//             alt="pen"
//             animate={{
//                 rotate: 50,
//                 x: 30,
//                 y: 15,
//             }}
//             transition={{
//                 y: {
//                     ease: "anticipate",
//                     repeat: Infinity,
//                     repeatDelay: 6,
//                     repeatType: "mirror",
//                     duration: 1,
//                 },
//                 x: {
//                     ease: "easeInOut",
//                     repeat: Infinity,
//                     repeatDelay: 3,
//                     repeatType: "reverse",
//                 },
//                 rotate: {
//                     repeat: Infinity,
//                     repeatType: "reverse",
//                     repeatDelay: 3.5,

//                 }
//             }}
//         />




//         <img className='promo-girl__girl' src={girl} alt="girl" />
//     </div>

// </>