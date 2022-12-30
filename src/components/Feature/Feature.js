import "./Feature.scss"
const Feature = ({
    feature,
    className=""
}) => {
    return (
        <div className={`grammarly-feature-item-main-container ${className}`}>
            <div className="grammarly-feature-item-inner-container">
                <div className="grammarly-feature-item-tick-svg-container"></div>
                <div className="grammarly-feature-item-text-container">{feature}</div>
            </div>
        </div>
    )
}

export default Feature;