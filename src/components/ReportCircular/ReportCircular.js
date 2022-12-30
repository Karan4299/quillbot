import { CircularProgress, circularProgressClasses } from "@mui/material";
import { useEffect, useState } from "react";
import "./ReportCircular.scss"

const ReportCircular = ({ 
        percentage = 0,
        description = ""
    }) => {
    const [circularValue, setCircularValue] = useState(0);

    const increaseValueBy1 = () => {
        if (circularValue < percentage){
            setCircularValue(circularValue + 1)
        }
    }

    useEffect(() => {
        setTimeout(() =>  increaseValueBy1(), 40)
    }, [circularValue])

    return (
        <div className="grammarly-report-circular-card-main-container">
            <div className="grammarly-report-circular-card-inner-container">
                <div className="grammarly-report-circular-card-circular-item-container">
                    <div className="grammarly-report-circular-card-circular-value-container">
                        {circularValue} <span>%</span>
                    </div>
                    <CircularProgress 
                        variant="determinate"
                        sx={{
                          color: "#E6E6E8",
                          position: "absolute"
                        }}
                        size={55}
                        thickness={1}
                        value={100}
                    />
                    <CircularProgress
                        className="custom_svg_circle"
                        sx={{
                            color: "#12C399",
                            left: 0,
                            [`& .${circularProgressClasses.circle}`]: {
                                strokeLinecap: "round"
                            }
                        }}
                        variant="determinate"
                        value={circularValue}
                        thickness={1.1}
                    />
                </div>
                <div className="grammarly-report-description-container">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default ReportCircular;