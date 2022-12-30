
import PlanCard from "components/PlanCard/PlanCard"
import "./FeaturesComparison.scss"

const freeCardData = {
    headerDescription: "FOR CASUAL WRITING",
    plan: "Free",
    description: "Basic writing suggestions.",
    buttonData: {
        buttonText: "Included In Premium",
        status:'inactive',
        locationOnButtonClick:""
    },
    features: {
        emphasise: [],
        data: ["Spelling", "Grammar", "Punctuation", "Conciseness"]
    }
}

const premiumCardData = {
    headerDescription: "FOR WORK OR SCHOOL",
    plan: "Premium",
    description: "Style, tone, and clarity improvements for writing at work and school.",
    buttonData: {
        buttonText: "Upgrade to Grammarly Premium",
        status:'active'
    },
    features: {
        emphasise: [0],
        data : ["Everything in Free", "Clarity-focused sentence rewrites", "Tone adjustments", 
        "Plagiarism detection", "Word choice", "Formality level", "Fluency", "Additional advanced suggestions"]
    }
}

const FeaturesComparison = () => {
    return (
        <div className="grammarly-feature-main-container">
            <div className="grammarly-feature-inner-container">
                <div className="grammarly-feature-text-container">
                    <div className="grammarly-feature-text-item title">Up-Level Your Communication</div>
                    <div className="grammarly-feature-text-item subtext">Unlock Grammarly Premium’s advanced features and suggestions.</div>
                </div>
                <div className="grammarly-feature-plans-container">
                    <div className="grammarly-feature-plans-item-container free"><PlanCard props={freeCardData}/></div>
                    <div className="grammarly-feature-plans-item-container premium"><PlanCard props={premiumCardData} /></div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesComparison;