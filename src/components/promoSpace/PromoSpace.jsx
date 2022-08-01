import { motion } from "framer-motion"
import spaceBg from "../../assets/img/space/space-bg.png"
import atom from "../../assets/img/space/space-atom.png"
import bigPlanet from "../../assets/img/space/space-big-planet.png"
import alarm from "../../assets/img/space/space-alarm.png"
import rocket from "../../assets/img/space/space-rocket.png"
import ball from "../../assets/img/space/space-ball.png"
import darkPlanet from "../../assets/img/space/space-dark-planet.png"
import strippedPlanet from "../../assets/img/space/space-stripped-planet.png"
import cross from "../../assets/img/space/space-cross.png"
import divide from "../../assets/img/space/space-divide.png"
import lamp from "../../assets/img/space/space-lamp.png"
import elephant from "../../assets/img/space/space-elephant.png"
import paints from "../../assets/img/space/space-paints.png"
import plane from "../../assets/img/space/space-plane.png"
import './PromoSpace.scss'

const showSpaceAnimation = {
    start: {
        opacity: 0
    },
    end: {
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 1.5
        }
    }
}

const PromoSpace = () => {

    return (
        <>
            <motion.div
                className="promo-space"
                variants={showSpaceAnimation}
                initial={"start"}
                whileInView={"end"}
                viewport={{ once: true }}
            >
                <img src={spaceBg} alt="space" className="promo-space__bg" />
                <img src={atom} alt="atom" className="promo-space__atom" />
                <img src={bigPlanet} alt="big-planet" className="promo-space__big-planet" />
                <img src={alarm} alt="alarm-clock" className="promo-space__alarm" />
                <img src={rocket} alt="rocket" className="promo-space__rocket" />
                <img src={ball} alt="ball" className="promo-space__ball" />
                <img src={darkPlanet} alt="dark-planet" className="promo-space__dark-planet" />
                <img src={strippedPlanet} alt="stripped-planet" className="promo-space__strip-planet" />
                <img src={cross} alt="cross" className="promo-space__cross" />
                <img src={divide} alt="divide" className="promo-space__divide" />
                <img src={lamp} alt="lamp" className="promo-space__lamp" />
                <img src={elephant} alt="elephant" className="promo-space__elephant" />
                <img src={paints} alt="paints" className="promo-space__paints" />
                <img src={plane} alt="plane" className="promo-space__plane" />
            </motion.div>
        </>
    )
}

export default PromoSpace