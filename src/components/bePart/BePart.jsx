
import SpanUnderLine from '../spanUnderLine/SpanUnderLine'
import BePartList from '../bePartList/BePartList'

import './BePart.scss'

const BePart = () => {
    return (
        <section className="be-part">
            <div className="container">
                <h2 className='be-part__title title title_section' >Для чего <SpanUnderLine>нужно</SpanUnderLine> участвовать</h2>
                <BePartList />
            </div>

        </section>


    )
}

export default BePart