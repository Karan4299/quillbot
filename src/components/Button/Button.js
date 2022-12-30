import "./Button.scss"

const Button = ({
    buttonText = "Button",
    status = "active",
    className="",
    locationOnButtonClick = "https://www.grammarly.com/upgrade?utm_campaign=funnelPremiumFooter&utm_medium=internal&utm_source=funnel",
    onClick=() => console.log("clicked")
}) => {

    const handleButtonClick = (event) => {
        event.stopPropagation();
        event.preventDefault();
        onClick(event)
    }
    return <div className={`grammarly-button-component-main-container ${className} ${status}`}>
        <a href={status === "active" && locationOnButtonClick} className="grammarly-button-compoennt-inner-container">
            {buttonText}
        </a>
    </div>
}

export default Button;