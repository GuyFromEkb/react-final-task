import { useState, useEffect } from 'react'
import TimerItem from '../timerItem/TimerItem'

import './Timer.scss'

const Timer = ({ hideTimer }) => {
    // const DEAD_LINE = '2022-08-26'
    const DEAD_LINE = '2022-08-31T13:50'

    const [day, setDay] = useState(null)
    const [hour, setHour] = useState(null)
    const [min, setMin] = useState(null)

    useEffect(() => {
        updateTimer()

        const idTimer = setInterval(updateTimer, 60000)
        return () => (clearTimeout(idTimer))
        // eslint-disable-next-line
    }, [])

    const getTimeRemaining = (endtime) => {
        const t = Date.parse(endtime) - new Date()

        const days = Math.floor(t / (1000 * 60 * 60 * 24))
        const hours = Math.floor((t / (1000 * 60 * 60) % 24))
        const minutes = Math.floor((t / 1000 / 60) % 60)

        return {
            t,
            days,
            hours,
            minutes
        }
    }
    const updateTimer = () => {
        const deadline = getTimeRemaining(DEAD_LINE)

        if (deadline.t < 0 || isNaN(deadline.t)) {
            hideTimer()
            return
        }

        setDay(deadline.days)
        setHour(deadline.hours)
        setMin(deadline.minutes)
    }

    return (
        <div className="promo-timer">
            <TimerItem digit={day} itemName={"дней"} />
            <div className="promo-timer__dots">:</div>
            <TimerItem digit={hour} itemName={"часов"} textForHours={"по МСК"} />
            <div className="promo-timer__dots">:</div>
            <TimerItem digit={min} itemName={"минут"} />
        </div>
    )
}

export default Timer
