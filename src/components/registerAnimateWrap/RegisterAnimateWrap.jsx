import { motion } from "framer-motion";

import actionPlane from "../../assets/img/plane-register.png";
import fstPlane from "../../assets/img/plane-fst.png";
import scdPlane from "../../assets/img/plane-scd.png";
import "./RegisterAnimateWrap.scss";

const actionPlaneVariant = {
    start: {
        offsetDistance: "100%",
    },
    end: {
        offsetDistance: "0%",
        transform: "translateX(-130px) translateY(2px) rotate(6deg)",
    },
}
const actionPlaneTransition = {
    offsetDistance: {
        delay: 0.2,
        duration: 0.8,
        ease: "easeOut",
    },
    transform: {
        delay: 0.85,
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
    },
}
const fstPlaneVariant = {
    end: {
        transform: "translateY(6px) translateX(-29px)",
    },
}
const scdPlaneVariant = {
    end: {
        transform: "translateX(3px) translateY(-9px)",
    },
}
const planeTransition = {
    type: "spring",
    bounce: 0.5,
    delay: 0.85,
    duration: 0.8,
}

const RegisterAnimateWrap = () => {
    return (
        <motion.div
            className="register-animate"
            initial="start"
            whileInView="end"
            viewport={{ once: true, amount: 0.4 }}
        >
            <motion.img
                variants={actionPlaneVariant}
                transition={actionPlaneTransition}
                className="register-animate__action-plane"
                src={actionPlane}
                alt="action plane"
            />

            <motion.img
                variants={fstPlaneVariant}
                transition={planeTransition}
                className="register-animate__fst-plane"
                src={fstPlane}
                alt="first plane"
            />

            <motion.img
                variants={scdPlaneVariant}
                transition={planeTransition}
                className="register-animate__scd-plane"
                src={scdPlane}
                alt="second plane"
            />
        </motion.div>
    );
};

export default RegisterAnimateWrap;
