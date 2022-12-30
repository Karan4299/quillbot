import ReportCircular from "components/ReportCircular"
import "./Results.scss"

const reports = [
    {
        key: 1,
        percent: 76,
        classname: "enjoyable",
        description: "76% of Grammarly users find writing more enjoyable."
    },
    {
        key: 2,
        percent: 85,
        className: "writers",
        description: "85% of Grammarly users are now stronger writers."
    },
    {
        key: 3,
        percent: 70,
        className: "confidence",
        description: "70% of Grammarly users reported an increased level of writing confidence."
    }
]
const Results = () => {
    return (
        <div className="grammarly-result-section-main-container">
            <div className="grammarly-result-section-inner-container">
                <div className="grammarly-result-section-head-text-container">
                    <div className="grammarly-result-section-text-item title">Premium Customers Report Better Results</div>
                    <div className="grammarly-result-section-text-item subtitle">We routinely survey Grammarly users and have found that:</div>
                </div>
                <div className="grammarly-result-section-result-group-container">
                    {
                        reports.map((report) => {
                            return (
                                <div key={report.key} className={`grammarly-result-section-result-item-container ${report.className}`}>
                                    <ReportCircular percentage={report.percent} description={report.description}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Results;