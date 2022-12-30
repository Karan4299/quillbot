import Button from "components/Button";
import Feature from "components/Feature";
import "./PlanCard.scss"


const PlanCard = (prop) => {
    const {
        headerDescription= "",
        plan= "",
        description = "",
        buttonData = {
            buttonText: "",
            status:''
        },
        features= []
    } = prop.props

    console.log(prop.props, "--")
    return (
        <div className="grammarly-plan-card-main-container">
            <div className="grammarly-plan-card-inner-container">
                <div className="grammarly-plan-card-item-container head-desc">{headerDescription}</div>
                <div className="grammarly-plan-card-item-container plan">{plan}</div>
                <div className="grammarly-plan-card-item-container desc">{description}</div>
                <div className="grammarly-plan-card-item-container buyButton">
                    <Button buttonText={buttonData.buttonText} status={buttonData.status}/>
                </div>
                <div className="grammarly-plan-card-item-container features">
                    {
                        features.data.map((feature, index) => {
                            console.log(features.emphasise.includes(index))
                            return <Feature feature={feature} className={`${features.emphasise.includes(index) ? "emphasise" : ""}`} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PlanCard;