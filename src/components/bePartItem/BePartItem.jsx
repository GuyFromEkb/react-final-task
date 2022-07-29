

import './BePartItem.scss'

const BePartItem = ({ img, descr, link }) => {
    return (

        <div className="be-part-item">
            <img className='be-part-item__img' src={img} alt="icon" />
            <div className="be-part-item__descr">{descr}{" "}
                {link && <a className='be-part-item__link' href="/">{link}</a>}
            </div>
        </div>

    )
}

export default BePartItem