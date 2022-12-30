import React from "react";
import "./Header.scss";

import gramarlyLogo from "assets/svg/gramarly-logo.svg"

const Header = () => {
    return (
        <div className="grammarly-header-main-container">
            <div className="grammarly-header-inner-container">
                <div className="grammarly-header-logo-container">
                    <img
                        src={gramarlyLogo}
                        alt="grammarly_logo"
                        className="grammarly-header-logo-item"
                    />
                </div>
                <div className="grammarly-header-navigator-container">
                    <div className="grammarly-header-navigator-list-container"></div>
                    <div className="grammarly-header-navigator-log-in-container">
                        Log in
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;