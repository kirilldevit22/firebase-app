import React from "react";
import logo from '../../assets/icons/Logo.jpg'
import { backgroundImageSides } from "../../constants/constants";


export default function BackgroundImage() {
    
    return (
        <div>
            {backgroundImageSides.map((side, idx) => (
                <div key={idx} className={`background_${side} logo_image`}>
                    <img src={logo} title='logo' />
                </div>
            ))}
        </div>
    )
}