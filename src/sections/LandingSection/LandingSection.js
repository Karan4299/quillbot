
import Button from "components/Button";
import LandingFeatureCard from "components/LandingFeatureCard";
import "./LandingSection.scss";

const featuresData = [
    {
        title: "Clear, confident communication",
        subtitle: "Take the guesswork out of great writing.",
        imageUrl: "https://static.grammarly.com/assets/files/42e0587aa278ef8c3a3ecab5be8d42c3/mobile@2x.png",
        key: 1,
        classsName: "feature_landing_1"
    },
    {
        title: "Comprehensive real-time feedback",
        subtitle: "Effective writing takes more than good grammar.",
        imageUrl: "https://static.grammarly.com/assets/files/ccc513909b90c59f62277a3493cfc1dc/mobile@2x.png",
        key: 2,
        classsName: "feature_landing_2"
    },
    {
        title: "Support you can rely on",
        subtitle: "Write with a second pair of eyes that never gets tired.",
        imageUrl: "https://static.grammarly.com/assets/files/90b995e0a51631a514394463af78cc81/mobile@2x.png",
        key: 3,
        classsName: "feature_landing_3"
    },
    {
        title: "Strike the right tone",
        subtitle: "Make the best impression, every time.",
        imageUrl: "https://static.grammarly.com/assets/files/d3d9cd971c972b5421228b2cc1372f6d/mobile@2x.png",
        key: 4,
        classsName: "feature_landing_4"
    },
]

const LandingSection = () => {
    return (
        <div className="grammarly-landing-page-main-container">
            <div className="grammarly-landing-page-inner-container">
                <div className="grammarly-landing-page-header-text-container">
                    Aim High With Brilliant Writing
                </div>
                <div className="grammarly-landing-page-button-container">
                    <Button buttonText="Upgrade to Grammarly Premium" />
                </div>
                <div className="grammarly-landing-page-landing-features-main-container">
                    {
                        featuresData.map((feature, index) => {
                            return (
                                <LandingFeatureCard 
                                    imageUrl={feature.imageUrl}
                                    titleText={feature.title}
                                    subtitleText={feature.subtitle}
                                    className={index % 2 === 0 ? "forward" : "reverse"}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default LandingSection;