

import './TimerItem.scss'

const TimerItem = ({ digit, itemName, textForHours }) => {

    const numWord = (value, words) => {
        value = Math.abs(value) % 100;
        const num = value % 10;
        if (value > 10 && value < 20) return words[2];
        if (num > 1 && num < 5) return words[1];
        if (num === 1) return words[0];
        return words[2];
    }

    const prefixDigit = digit < 10 ? "0" : null
    let correctName = ""

    switch (itemName) {
        case 'дней':
            correctName = numWord(digit, ['день', 'дня', 'дней']);
            break;
        case 'часов':
            correctName = numWord(digit, ['час', 'часа', 'часов']);
            break;
        case 'минут':
            correctName = numWord(digit, ['минута', 'минуты', 'минут']);
            break;

        default:
            correctName = ""
            break;
    }



    return (

        <div className="timer-item">
            <div className="timer-item__block">{prefixDigit}{digit}</div>
            <div className="timer-item__desr">{correctName} {textForHours && <span>{textForHours}</span>}
            </div>
        </div>

    )
}
export default TimerItem