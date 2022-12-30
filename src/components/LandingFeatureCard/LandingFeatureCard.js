import "./LandingFeatureCard.scss"

const LandingFeatureCard = ({
    imageUrl = "",
    titleText = "",
    subtitleText = "",
    className=""
}) => {
    return (
        <div className="grammarly-landing-features-main-container">
            <div className={`grammarly-landing-fetures-inner-container ${className}`}>
                <div className="grammarly-landing-features-item-container svgcontainer">
                    <img
                        src={`${imageUrl}`}
                        alt="feature_image"
                        className=""
                    />
                </div>
                <div className="grammarly-landing-features-item-container text-container">
                    <div className="grammarly-landing-features-item-text-container title">{titleText}</div>
                    <div className="grammarly-landing-features-item-text-container subtitle">{subtitleText}</div>
                </div>
            </div>
        </div>
    )
}

export default LandingFeatureCard;