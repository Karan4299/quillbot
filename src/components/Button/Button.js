import "./Button.scss"

const Button = ({
    buttonText = "Button",
    status = "active",
    className="",
    locationOnButtonClick = "/upgrade?utm_campaign=funnelPremiumAboveTheFold&utm_medium=internal&utm_source=funnel",
    onClick=() => console.log("clicked")
}) => {

    const handleButtonClick = (event) => {
        event.stopPropagation();
        event.preventDefault();
        onClick(event)
    }
    return <div className={`grammarly-button-component-main-container ${className} ${status}`} onClick={handleButtonClick}>
        <a href={locationOnButtonClick} className="grammarly-button-compoennt-inner-container">
            {buttonText}
        </a>
    </div>
}

export default Button;