
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
    );
}

export default Register


const RegisterSide = ({ children }) => {
    return (
        <div className="register__side">
            {children}
        </div>
    )
}





/* <div className="animate">

<motion.img
    initial={{
        offsetDistance: "100%"
    }}
    animate={{
        offsetDistance: "0%",
        transform: "translateX(-130px) translateY(2px) rotate(6deg)",
    }}
    transition={{
        offsetDistance: {
            delay: 0.2,
            duration: 1,
            ease: "circOut"
        },
        transform: {
            delay: 1.05,
            type: "spring",
            bounce: 0.4,
            duration: .8
        }
    }}
    className='animate__action-plane'
    src={actionPlane}
    alt="action plane" />


<motion.img
    animate={{
        transform: 'translateY(6px) translateX(-29px)'
    }}
    transition={{
        type: "spring",
        bounce: 0.5,
        delay: 1.05,
        duration: .8
    }}
    className='animate__fst-plane'
    src={fstPlane}
    alt="first plane" />

<motion.img
    animate={{
        transform: 'translateX(3px) translateY(-9px)'
    }}
    transition={{
        type: "spring",
        bounce: 0.5,
        delay: 1.05,
        duration: .8
    }}
    className='animate__scd-plane'
    src={scdPlane}
    alt="second plane" />
</div> */














// import { motion } from "framer-motion"

// import RegisterPrice from '../registerPrice/RegisterPrice'
// import RegisterForm from "../registerForm/RegisterForm"
// import './Register.scss'

// import actionPlane from '../../assets/img/plane-register.png'
// import fstPlane from '../../assets/img/plane-fst.png'
// import scdPlane from '../../assets/img/plane-scd.png'


// const actionPlaneVariant = {
//     start: {
//         offsetDistance: "100%"
//     },
//     end: {
//         offsetDistance: "0%",
//         transform: "translateX(-130px) translateY(2px) rotate(6deg)",
//     }
// }
// const fstPlaneVariant = {
//     end: {
//         transform: 'translateY(6px) translateX(-29px)'
//     }
// }
// const scdPlaneVariant = {
//     end: {
//         transform: 'translateX(3px) translateY(-9px)'
//     }
// }




// const Register = () => {




//     return (
//         <section className="register">
//             <div className="container">
//                 <div className="register__wrap">
//                     <RegisterSide>
//                         <RegisterPrice />
//                     </RegisterSide>

//                     <RegisterSide>
//                         <h3 className="register__title title title_section">Зарегистрируйтесь, чтобы участвовать</h3>
//                         <RegisterForm />
//                     </RegisterSide>
//                 </div>
//             </div>

//             <motion.div
//                 className="register-animate"
//                 initial='start'
//                 whileInView='end'
//                 viewport={{ once: true, amount: 0.4 }}
//             >

//                 <motion.img
//                     variants={actionPlaneVariant}
//                     transition={{
//                         offsetDistance: {
//                             delay: 0.2,
//                             duration: .8,
//                             ease: "easeOut"
//                         },
//                         transform: {
//                             delay: .85,
//                             type: "spring",
//                             bounce: 0.4,
//                             duration: .8
//                         }
//                     }}
//                     className='register-animate__action-plane'
//                     src={actionPlane}
//                     alt="action plane" />


//                 <motion.img
//                     variants={fstPlaneVariant}
//                     transition={{
//                         type: "spring",
//                         bounce: 0.5,
//                         delay: .85,
//                         duration: .8
//                     }}
//                     className='register-animate__fst-plane'
//                     src={fstPlane}
//                     alt="first plane" />

//                 <motion.img
//                     variants={scdPlaneVariant}
//                     transition={{
//                         type: "spring",
//                         bounce: 0.5,
//                         delay: .85,
//                         duration: .8
//                     }}
//                     className='register-animate__scd-plane'
//                     src={scdPlane}
//                     alt="second plane" />
//             </motion.div>

//         </section>
//     );
// }

// export default Register


// const RegisterSide = ({ children }) => {
//     return (
//         <div className="register__side">
//             {children}
//         </div>
//     )
// }





/* <div className="animate">

<motion.img
    initial={{
        offsetDistance: "100%"
    }}
    animate={{
        offsetDistance: "0%",
        transform: "translateX(-130px) translateY(2px) rotate(6deg)",
    }}
    transition={{
        offsetDistance: {
            delay: 0.2,
            duration: 1,
            ease: "circOut"
        },
        transform: {
            delay: 1.05,
            type: "spring",
            bounce: 0.4,
            duration: .8
        }
    }}
    className='animate__action-plane'
    src={actionPlane}
    alt="action plane" />


<motion.img
    animate={{
        transform: 'translateY(6px) translateX(-29px)'
    }}
    transition={{
        type: "spring",
        bounce: 0.5,
        delay: 1.05,
        duration: .8
    }}
    className='animate__fst-plane'
    src={fstPlane}
    alt="first plane" />

<motion.img
    animate={{
        transform: 'translateX(3px) translateY(-9px)'
    }}
    transition={{
        type: "spring",
        bounce: 0.5,
        delay: 1.05,
        duration: .8
    }}
    className='animate__scd-plane'
    src={scdPlane}
    alt="second plane" />
</div> */