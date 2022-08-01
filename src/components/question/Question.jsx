import { useState } from "react";

import QuestionCollapsible from "../questionCollapsible/QuestionCollapsible";
import './Question.scss'

const questionData = [
    'Может ли ребёнок заниматься самостоятельно?',
    'Как происходит оплата?',
    'Есть ли гарантии усвоения материала?',
    'С кем будет общаться мой ребёнок?',
    'Каковы принципы обучения?',
    'Сколько раз в неделю можно заниматься?'
]
const lorem = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, nesciunt repellendus iusto reprehenderit ea odit minima deserunt aut a! Quo inventore labore praesentium quam iure nisi, adipisci ipsam quod rem."

const Question = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const handleActiveQuestion = (questNum) => {
        activeQuestion === questNum ? setActiveQuestion(null) : setActiveQuestion(questNum)
    }

    return (
        <section className="question">
            <div className="container">
                <h3 className="title title_section question__title">Вопрос/Ответ</h3>
                {
                    questionData.map((item, index) =>
                        <QuestionCollapsible
                            title={item}
                            activeNum={activeQuestion}
                            num={index}
                            onAddActiveNum={handleActiveQuestion}
                            key={index}
                            content={lorem}
                        />)
                }
            </div>
        </section>

    )
}

export default Question