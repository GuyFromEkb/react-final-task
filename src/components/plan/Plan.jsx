import SpanUnderLine from "../spanUnderLine/SpanUnderLine";
import PlanAnimateWrap from "../planAnimateWrap/PlanAnimateWrap";

import "./Plan.scss";

const Plan = () => {

    return (
        <section className="plan">
            <div className="container">
                <h2 className="plan__title title title_section">Пошаговый <SpanUnderLine>план</SpanUnderLine> </h2>
                <PlanAnimateWrap />
            </div>
        </section>
    )
}

export default Plan
