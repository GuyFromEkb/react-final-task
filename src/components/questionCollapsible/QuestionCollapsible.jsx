import Collapsible from 'react-collapsible';

import './QuestionCollapsible.scss'

const QuestionCollapsible = ({ num, activeNum, onAddActiveNum, content, title }) => {

    const isActive = activeNum === num

    return (
        <div className="question__wrap">
            <Collapsible
                transitionTime={300}
                transitionCloseTime={300}
                // easing="ease-in-out"
                trigger={<Header title={title} active={isActive} />}
                open={isActive}
                accordionPosition={num}
                handleTriggerClick={() => onAddActiveNum(num)}
            >
                <div className="question__content">
                    {content}
                </div>
            </Collapsible>
        </div>
    )
}

export default QuestionCollapsible

const Header = ({ active, title }) => {

    return (
        <div className={`question__header ${active ? 'active' : null}`}>
            <p className="question__question" >{title}</p>
            <div className="question__circl"></div>
        </div>
    )
}